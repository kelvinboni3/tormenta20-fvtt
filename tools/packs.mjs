/**
 * Conversao entre os compendios LevelDB do Foundry e YAML legivel.
 *
 *   npm run unpack [nome]   packs/<nome>            -> _reference/<nome>/*.yml   (consulta)
 *   npm run pack   [nome]   homebrew/packs/<nome>   -> packs/homebrew-<nome>     (build)
 *
 * A fonte de verdade do conteudo homebrew e o YAML em homebrew/packs/.
 * O LevelDB em packs/homebrew-* e gerado e nunca deve ser editado a mao.
 */
import { compilePack, extractPack } from "@foundryvtt/foundryvtt-cli";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const REFERENCE = path.join(ROOT, "_reference");
const HOMEBREW = path.join(ROOT, "homebrew", "packs");
const PACKS = path.join(ROOT, "packs");

const [command, only] = process.argv.slice(2);

async function listDirs(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
	return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function unpack() {
	const names = (await listDirs(PACKS)).filter((n) => !only || n === only);
	if (!names.length) throw new Error(`Nenhum pack encontrado em packs/${only ? ` com o nome "${only}"` : ""}`);
	for (const name of names) {
		const dest = path.join(REFERENCE, name);
		// extractPack abre o LevelDB para escrita e o compacta, reescrevendo o
		// MANIFEST. Trabalhamos sobre uma copia para que os packs versionados
		// nunca sejam alterados por uma simples leitura.
		const scratch = path.join(REFERENCE, `.tmp-${name}`);
		await fs.rm(dest, { recursive: true, force: true });
		await fs.rm(scratch, { recursive: true, force: true });
		await fs.cp(path.join(PACKS, name), scratch, { recursive: true });
		try {
			await extractPack(scratch, dest, { yaml: true, log: false });
		} finally {
			await fs.rm(scratch, { recursive: true, force: true });
		}
		const count = (await fs.readdir(dest)).length;
		console.log(`  extraido  packs/${name} -> _reference/${name} (${count} documentos)`);
	}
}

async function pack() {
	const names = (await listDirs(HOMEBREW)).filter((n) => !only || n === only);
	if (!names.length) throw new Error(`Nenhuma fonte encontrada em homebrew/packs/${only ? ` com o nome "${only}"` : ""}`);
	for (const name of names) {
		const src = path.join(HOMEBREW, name);
		const dest = path.join(PACKS, `homebrew-${name}`);
		const docs = (await fs.readdir(src)).filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"));
		if (!docs.length) {
			console.log(`  ignorado  homebrew/packs/${name} (nenhum .yml)`);
			continue;
		}
		await fs.rm(dest, { recursive: true, force: true });
		await compilePack(src, dest, { yaml: true, log: false });
		console.log(`  compilado homebrew/packs/${name} -> packs/homebrew-${name} (${docs.length} documentos)`);
	}
}

const commands = { unpack, pack };
if (!commands[command]) {
	console.error("Uso: node tools/packs.mjs <unpack|pack> [nome-do-pack]");
	process.exit(1);
}
await commands[command]();
