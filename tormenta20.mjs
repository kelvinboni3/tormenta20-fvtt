const T20Conditions = {};

T20Conditions.abalado = {
	name: "Abalado",
	id: "abalado",
	duration: { rounds: 999 },
	statuses: ["abalado"],
	icon: "systems/tormenta20/icons/conditions/abalado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			stack: "apavorado",
			category: "medo"
		}
	},
	changes: [{ key: "system.pericias.*.condi", type: "downgrade", value: -2 }]
};

T20Conditions.agarrado = {
	name: "Agarrado",
	id: "agarrado",
	duration: { rounds: 999 },
	statuses: ["agarrado"],
	icon: "systems/tormenta20/icons/conditions/agarrado.svg",
	flags: {
		tormenta20: {
			condition: true,
			childEffect: ["desprevenido", "imovel"],
			category: "movimento"
		}
	},
	changes: [
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -2 }
	]
};

T20Conditions.alquebrado = {
	name: "Alquebrado",
	id: "alquebrado",
	duration: { rounds: 999 },
	statuses: ["alquebrado"],
	icon: "systems/tormenta20/icons/conditions/alquebrado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	},
	changes: [{ key: "system.modificadores.custoPM", type: "add", value: 1 }]
};

T20Conditions.apavorado = {
	name: "Apavorado",
	id: "apavorado",
	duration: { rounds: 999 },
	statuses: ["apavorado"],
	icon: "systems/tormenta20/icons/conditions/apavorado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "medo" }
	},
	changes: [{ key: "system.pericias.*.condi", type: "downgrade", value: -5 }]
};

T20Conditions.atordoado = {
	name: "Atordoado",
	id: "atordoado",
	duration: { rounds: 999 },
	statuses: ["atordoado"],
	icon: "systems/tormenta20/icons/conditions/atordoado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["desprevenido"],
			category: "mental"
		}
	}
};

T20Conditions.caido = {
	name: "Caído",
	id: "caido",
	duration: { rounds: 999 },
	statuses: ["caido"],
	icon: "systems/tormenta20/icons/conditions/caido.svg",
	flags: { tormenta20: { condition: true } },
	changes: [
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -5 },
		{ key: "system.attributes.defesa.outros", type: "downgrade", value: -5 },
		{ key: "system.attributes.movement.*.base", type: "downgrade", value: 1.5 }
	]
};

T20Conditions.cego = {
	name: "Cego",
	id: "cego",
	duration: { rounds: 999 },
	statuses: ["cego"],
	icon: "systems/tormenta20/icons/conditions/cego.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["desprevenido", "lento"],
			category: "sentidos"
		}
	},
	changes: [
		{ key: "system.pericias.acro.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.atle.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.cava.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.furt.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.inic.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.pilo.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.refl.condi", type: "downgrade", value: -5 }
	]
};

T20Conditions.confuso = {
	name: "Confuso",
	id: "confuso",
	duration: { rounds: 999 },
	statuses: ["confuso"],
	icon: "systems/tormenta20/icons/conditions/confuso.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	}
};

T20Conditions.debilitado = {
	name: "Debilitado",
	id: "debilitado",
	duration: { rounds: 999 },
	statuses: ["debilitado"],
	icon: "systems/tormenta20/icons/conditions/debilitado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, stack: "inconsciente" }
	},
	changes: [
		{ key: "system.modificadores.atributos.for", type: "add", value: -5 },
		{ key: "system.modificadores.atributos.des", type: "add", value: -5 },
		{ key: "system.modificadores.atributos.con", type: "add", value: -5 },
		{ key: "system.pericias.acro.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.atle.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.cava.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.fort.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.furt.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.inic.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.pilo.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.refl.condi", type: "downgrade", value: -5 }
	]
};

T20Conditions.desprevenido = {
	name: "Desprevenido",
	id: "desprevenido",
	duration: { rounds: 999 },
	statuses: ["desprevenido"],
	icon: "systems/tormenta20/icons/conditions/desprevenido.svg",
	flags: { tormenta20: { condition: true, durationScene: true } },
	changes: [
		{ key: "system.pericias.refl.condi", type: "downgrade", value: -5 },
		{ key: "system.attributes.defesa.condi", type: "downgrade", value: -5 }
	]
};

T20Conditions.doente = {
	name: "Doente",
	id: "doente",
	duration: { rounds: 999 },
	statuses: ["doente"],
	icon: "systems/tormenta20/icons/conditions/doente.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			category: "metabolismo"
		}
	}
};

T20Conditions.emchamas = {
	name: "Em Chamas",
	id: "emchamas",
	duration: { rounds: 999 },
	statuses: ["emchamas"],
	icon: "systems/tormenta20/icons/conditions/em-chamas.svg",
	flags: { tormenta20: { condition: true, durationScene: true } },
	changes: [{ key: "dano", type: "custom", value: "1d6[fogo]" }]
};

T20Conditions.enfeiticado = {
	name: "Enfeitiçado",
	id: "enfeiticado",
	duration: { rounds: 999 },
	statuses: ["enfeiticado"],
	icon: "systems/tormenta20/icons/conditions/enfeiticado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	}
};

T20Conditions.enjoado = {
	name: "Enjoado",
	id: "enjoado",
	duration: { rounds: 999 },
	statuses: ["enjoado"],
	icon: "systems/tormenta20/icons/conditions/enjoado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			category: "metabolismo"
		}
	}
};

T20Conditions.enredado = {
	name: "Enredado",
	id: "enredado",
	duration: { rounds: 999 },
	statuses: ["enredado"],
	icon: "systems/tormenta20/icons/conditions/enredado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["lento", "vulneravel"],
			category: "movimento"
		}
	},
	changes: [
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -2 }
	]
};

T20Conditions.envenenado = {
	name: "Envenenado",
	id: "envenenado",
	duration: { rounds: 999 },
	statuses: ["envenenado"],
	icon: "systems/tormenta20/icons/conditions/envenenado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "veneno" }
	}
};

T20Conditions.esmorecido = {
	name: "Esmorecido",
	id: "esmorecido",
	duration: { rounds: 999 },
	statuses: ["esmorecido"],
	icon: "systems/tormenta20/icons/conditions/esmorecido.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	},
	changes: [
		{ key: "system.modificadores.atributos.int", type: "add", value: -5 },
		{ key: "system.modificadores.atributos.sab", type: "add", value: -5 },
		{ key: "system.modificadores.atributos.car", type: "add", value: -5 },
		{ key: "system.pericias.ades.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.atua.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.conh.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.cura.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.dipl.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.enga.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.guer.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.inti.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.intu.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.inve.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.joga.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.mist.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.nobr.condi", type: "downgrade", value: -5 },
		// {key: "system.pericias.ofic.condi", type: "downgrade", value:-5},
		{ key: "system.pericias.perc.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.reli.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.sobr.condi", type: "downgrade", value: -5 },
		{ key: "system.pericias.vont.condi", type: "downgrade", value: -5 }
	]
};

T20Conditions.exausto = {
	name: "Exausto",
	id: "exausto",
	duration: { rounds: 999 },
	statuses: ["exausto"],
	icon: "systems/tormenta20/icons/conditions/exausto.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			stack: "inconsciente",
			childEffect: ["debilitado", "lento", "vulneravel"],
			category: "cansaco"
		}
	}
};

T20Conditions.fascinado = {
	name: "Fascinado",
	id: "fascinado",
	duration: { rounds: 999 },
	statuses: ["fascinado"],
	icon: "systems/tormenta20/icons/conditions/fascinado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	},
	changes: [{ key: "system.pericias.perc.condi", type: "downgrade", value: -5 }]
};

T20Conditions.fatigado = {
	name: "Fatigado",
	id: "fatigado",
	duration: { rounds: 999 },
	statuses: ["fatigado"],
	icon: "systems/tormenta20/icons/conditions/fatigado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			stack: "exausto",
			childEffect: ["fraco", "vulneravel"],
			category: "cansaco"
		}
	}
};

T20Conditions.fraco = {
	name: "Fraco",
	id: "fraco",
	duration: { rounds: 999 },
	statuses: ["fraco"],
	icon: "systems/tormenta20/icons/conditions/fraco.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, stack: "debilitado" }
	},
	changes: [
		{ key: "system.modificadores.atributos.for", type: "add", value: -2 },
		{ key: "system.modificadores.atributos.des", type: "add", value: -2 },
		{ key: "system.modificadores.atributos.con", type: "add", value: -2 },
		{ key: "system.pericias.acro.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.atle.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.cava.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.fort.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.furt.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.inic.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.pilo.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.refl.condi", type: "downgrade", value: -2 }
	]
};

T20Conditions.frustrado = {
	name: "Frustrado",
	id: "frustrado",
	duration: { rounds: 999 },
	statuses: ["frustrado"],
	icon: "systems/tormenta20/icons/conditions/frustrado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			stack: "esmorecido",
			category: "mental"
		}
	},
	changes: [
		{ key: "system.modificadores.atributos.int", type: "add", value: -2 },
		{ key: "system.modificadores.atributos.sab", type: "add", value: -2 },
		{ key: "system.modificadores.atributos.car", type: "add", value: -2 },
		{ key: "system.pericias.ades.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.atua.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.conh.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.cura.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.dipl.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.enga.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.guer.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.inti.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.intu.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.inve.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.joga.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.mist.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.nobr.condi", type: "downgrade", value: -2 },
		// {key: "system.pericias.ofic.condi", type: "downgrade", value:-2},
		{ key: "system.pericias.perc.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.reli.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.sobr.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.vont.condi", type: "downgrade", value: -2 }
	]
};

T20Conditions.imovel = {
	name: "Imóvel",
	id: "imovel",
	duration: { rounds: 999 },
	statuses: ["imovel"],
	icon: "systems/tormenta20/icons/conditions/imovel.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "movimento" }
	},
	changes: [
		{ key: "system.attributes.movement.walk.base", type: "downgrade", value: 0 },
		{ key: "system.attributes.movement.burrow.base", type: "downgrade", value: 0 },
		{ key: "system.attributes.movement.climb.base", type: "downgrade", value: 0 },
		{ key: "system.attributes.movement.fly.base", type: "downgrade", value: 0 },
		{ key: "system.attributes.movement.swim.base", type: "downgrade", value: 0 }
	]
};

T20Conditions.inconsciente = {
	name: "Inconsciente",
	id: "inconsciente",
	duration: { rounds: 999 },
	statuses: ["inconsciente"],
	icon: "systems/tormenta20/icons/conditions/inconsciente.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["indefeso"]
		}
	}
};

T20Conditions.indefeso = {
	name: "Indefeso",
	id: "indefeso",
	duration: { rounds: 999 },
	statuses: ["indefeso"],
	icon: "systems/tormenta20/icons/conditions/indefeso.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["desprevenido"]
		}
	},
	changes: [{ key: "system.attributes.defesa.condi", type: "downgrade", value: -10 }]
};

T20Conditions.invisivel = {
	name: "Invisível",
	id: "invisivel",
	duration: { rounds: 999 },
	statuses: ["invisivel"],
	icon: "icons/svg/invisible.svg",
	flags: { tormenta20: { condition: true, durationScene: true } }
};

T20Conditions.lento = {
	name: "Lento",
	id: "lento",
	duration: { rounds: 999 },
	statuses: ["lento"],
	icon: "systems/tormenta20/icons/conditions/lento.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "movimento" }
	}
};

T20Conditions.morto = {
	name: "Morto",
	id: "morto",
	duration: { rounds: 999 },
	statuses: ["morto"],
	icon: "systems/tormenta20/icons/conditions/morto.svg",
	flags: { tormenta20: { condition: true } }
};

T20Conditions.ofuscado = {
	name: "Ofuscado",
	id: "ofuscado",
	duration: { rounds: 999 },
	statuses: ["ofuscado"],
	icon: "systems/tormenta20/icons/conditions/ofuscado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "sentidos" }
	},
	changes: [
		{ key: "system.pericias.perc.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.luta.condi", type: "downgrade", value: -2 },
		{ key: "system.pericias.pont.condi", type: "downgrade", value: -2 }
	]
};

T20Conditions.paralisado = {
	name: "Paralisado",
	id: "paralisado",
	duration: { rounds: 999 },
	statuses: ["paralisado"],
	icon: "systems/tormenta20/icons/conditions/paralisado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["imovel", "indefeso"],
			category: "movimento"
		}
	}
};

T20Conditions.pasmo = {
	name: "Pasmo",
	id: "pasmo",
	duration: { rounds: 999 },
	statuses: ["pasmo"],
	icon: "systems/tormenta20/icons/conditions/pasmo.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "mental" }
	}
};

T20Conditions.petrificado = {
	name: "Petrificado",
	id: "petrificado",
	duration: { rounds: 999 },
	statuses: ["petrificado"],
	icon: "systems/tormenta20/icons/conditions/petrificado.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["inconsciente"],
			category: "metamorfose"
		}
	},
	changes: [{ key: "system.tracos.resistencias.dano.value", type: "downgrade", value: 8 }]
};

T20Conditions.sangrando = {
	name: "Sangrando",
	id: "sangrando",
	duration: { rounds: 999 },
	statuses: ["sangrando"],
	icon: "systems/tormenta20/icons/conditions/sangrando.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			category: "metabolismo"
		}
	},
	changes: [{ key: "dano", type: "custom", value: "1d6[perda]" }]
};

T20Conditions.sustentando = {
	name: "Sustentando",
	id: "sustentando",
	duration: { rounds: 999 },
	statuses: ["sustentando"],
	icon: "systems/tormenta20/icons/conditions/sustentando.svg",
	flags: { tormenta20: { condition: true, durationScene: true } },
	changes: [{ key: "sustentado", type: "custom", value: "" }]
};

T20Conditions.surdo = {
	name: "Surdo",
	id: "surdo",
	duration: { rounds: 999 },
	statuses: ["surdo"],
	icon: "systems/tormenta20/icons/conditions/surdo.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "sentidos" }
	},
	changes: [{ key: "system.pericias.inic.condi", type: "downgrade", value: -5 }]
};

T20Conditions.surpreendido = {
	name: "Surpreendido",
	id: "surpreendido",
	duration: { rounds: 999 },
	statuses: ["surpreendido"],
	icon: "systems/tormenta20/icons/conditions/surpreendido.svg",
	flags: {
		tormenta20: {
			condition: true,
			durationScene: true,
			childEffect: ["desprevenido"]
		}
	}
};

T20Conditions.vulneravel = {
	name: "Vulnerável",
	id: "vulneravel",
	duration: { rounds: 999 },
	statuses: ["vulneravel"],
	icon: "systems/tormenta20/icons/conditions/vulneravel.svg",
	flags: { tormenta20: { condition: true, durationScene: true } },
	changes: [{ key: "system.attributes.defesa.condi", type: "downgrade", value: -2 }]
};

T20Conditions.sobrecarregado = {
	name: "Sobrecarregado",
	id: "sobrecarregado",
	duration: { rounds: 999 },
	statuses: ["sobrecarregado"],
	icon: "systems/tormenta20/icons/conditions/sobrecarregado.svg",
	flags: {
		tormenta20: { condition: true, durationScene: true, category: "movimento" }
	},
	changes: [
		{ key: "system.attributes.defesa.pda", type: "add", value: 5 }
		// { key: "system.attributes.movement.*.bonus", type: "add", value: -3 }
	]
};

const T20AmmoUpgrades = {};

T20AmmoUpgrades.status = {
	accurate: "DONE",
	pungent: "DONE",
	cruel: "DONE",
	atrocious: "DONE",
	balanced: "DONE",
	harmonized: "DONE",
	injection: "MANUAL",
	massive: "DONE",
	specialmaterial: "MANUAL",
	scope: "MANUAL",
	precise: "DONE"
};

T20AmmoUpgrades.accurate = {
	name: "T20.WeaponUpgradesAccurate",
	description: "T20.WeaponUpgradesTooltipAccurate",
	tint: "#FFFFFF",
	changes: [
		{
			key: "ataque",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "accurate",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.pungent = {
	name: "T20.WeaponUpgradesPungent",
	description: "T20.WeaponUpgradesTooltipPungent",
	tint: "#FFFFFF",
	changes: [
		{
			key: "ataque",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "pungent",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.cruel = {
	name: "T20.WeaponUpgradesCruel",
	description: "T20.WeaponUpgradesTooltipCruel",
	tint: "#FF0000",
	changes: [
		{
			key: "dano",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "cruel",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.atrocious = {
	name: "T20.WeaponUpgradesAtrocious",
	description: "T20.WeaponUpgradesTooltipAtrocious",
	tint: "#FF0000",
	changes: [
		{
			key: "dano",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "atrocious",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.balanced = {
	name: "T20.WeaponUpgradesBalanced",
	description: "T20.WeaponUpgradesTooltipBalanced",
	tint: "#00FF00",
	changes: [
		{
			key: "system.pericias.luta.outros",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "balanced",
			self: false,
			skill: true,
			items: "T20.SkillLuta"
		}
	},
	disabled: true,
	isSuppressed: true,
	transfer: true
};

T20AmmoUpgrades.harmonized = {
	name: "T20.WeaponUpgradesHarmonized",
	description: "T20.WeaponUpgradesTooltipHarmonized",
	tint: "#FFFF00",
	changes: [],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "harmonized",
			self: false,
			custo: "-1",
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.massive = {
	name: "T20.WeaponUpgradesMassive",
	description: "T20.WeaponUpgradesTooltipMassive",
	tint: "#800080",
	changes: [
		{
			key: "criticoX",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "massive",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

T20AmmoUpgrades.precise = {
	name: "T20.WeaponUpgradesPrecise",
	description: "T20.WeaponUpgradesTooltipPrecise",
	tint: "#808080",
	changes: [
		{
			key: "criticoM",
			value: "-1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "precise",
			self: false,
			attack: true
		}
	},
	disabled: false,
	transfer: true
};

const T20ArmorUpgrades = {
	general: {},
	leve: {},
	pesada: {},
	escudo: {}
};

T20ArmorUpgrades.status = {
	adjusted: "DONE",
	undermeasure: "DONE",
	polished: "DONE",
	reinforced: "DONE",
	delicate: "DONE",
	sealed: "DONE",
	specialmaterial: "MANUAL",
	thorny: "MANUAL"
};

/* GENERAL - Available for all armor */
T20ArmorUpgrades.general.adjusted = {
	name: "T20.ArmorUpgradesAdjusted",
	description: "T20.ArmorUpgradesTooltipAdjusted",
	tint: "#FFFFFF",
	changes: [
		{
			key: "system.attributes.defesa.pda",
			value: "-1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "adjusted"
		}
	},
	disabled: false,
	transfer: true
};

T20ArmorUpgrades.general.undermeasure = {
	name: "T20.ArmorUpgradesUnderMeasure",
	description: "T20.ArmorUpgradesTooltipUnderMeasure",
	tint: "#AAAAAA",
	changes: [
		{
			key: "system.attributes.defesa.pda",
			value: "-2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "undermeasure",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

T20ArmorUpgrades.general.polished = {
	name: "T20.ArmorUpgradesPolished",
	description: "T20.ArmorUpgradesTooltipPolished",
	tint: "#C0C0C0",
	duration: {
		duration: 1,
		rounds: 1,
		startRound: 1,
		startTurn: 0
	},
	changes: [
		{
			key: "system.attributes.defesa.bonus",
			value: "5",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "polished",
			self: true
		}
	},
	disabled: false,
	transfer: true
};

T20ArmorUpgrades.general.reinforced = {
	name: "T20.ArmorUpgradesReinforced",
	description: "T20.ArmorUpgradesTooltipReinforced",
	tint: "#808080",
	changes: [
		{
			key: "system.attributes.defesa.bonus",
			value: "1",
			type: "add",
			priority: 0
		},
		{
			key: "system.attributes.defesa.pda",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "reinforced",
			self: true
		}
	},
	disabled: false,
	transfer: true
};

/** PESADA - Available only for heavy armor */
T20ArmorUpgrades.pesada.delicate = {
	name: "T20.ArmorUpgradesDelicate",
	description: "T20.ArmorUpgradesTooltipDelicate",
	tint: "#FFDDDD",
	changes: [
		{
			key: "system.attributes.defesa.bonus",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "delicate",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

T20ArmorUpgrades.pesada.sealed = {
	name: "T20.ArmorUpgradesSealed",
	description: "T20.ArmorUpgradesTooltipSealed",
	tint: "#0000FF",
	changes: [
		{
			key: "system.modificadores.pericias.resistencia",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "sealed",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

const T20EsotericUpgrades = {};

T20EsotericUpgrades.status = {
	channeler: "MANUAL",
	energetic: "DONE",
	harmonized: "DONE",
	specialmaterial: "MANUAL",
	powerful: "MANUAL",
	vigilant: "DONE"
};

T20EsotericUpgrades.energetic = {
	name: "T20.EsotericUpgradesEnergetic",
	description: "T20.EsotericUpgradesTooltipEnergetic",
	tint: "#FFA500",
	changes: [
		{
			key: "dano",
			value: "1d6",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "energetic",
			self: false,
			spell: true
		}
	},
	disabled: false,
	transfer: true
};

T20EsotericUpgrades.harmonized = {
	name: "T20.EsotericUpgradesHarmonized",
	description: "T20.EsotericUpgradesHTooltiparmonized",
	tint: "#800080",
	changes: [],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "harmonized",
			self: false,
			custo: "-1",
			spell: true
		}
	},
	disabled: false,
	transfer: true
};

T20EsotericUpgrades.vigilant = {
	name: "T20.EsotericUpgradesVigilant",
	description: "T20.EsotericUpgradeTooltipsVigilant",
	tint: "#00FF00",
	changes: [
		{
			key: "system.attributes.defesa.bonus",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "vigilant",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

const T20GeneralUpgrades = {};

T20GeneralUpgrades.status = {
	golden: "DONE",
	gems: "DONE",
	discreet: "DONE",
	macabre: "DONE"
};

T20GeneralUpgrades.golden = {
	name: "T20.ItemUpgradesGoldPlated",
	description: "T20.ItemUpgradesTooltipGoldPlated",
	tint: "#FFD700",
	changes: [
		{
			key: "system.pericias.dipl.bonus",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "golden",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

T20GeneralUpgrades.gems = {
	name: "T20.ItemUpgradesGemsStudded",
	description: "T20.ItemUpgradesTooltipGemsStudded",
	tint: "#8B008B",
	changes: [
		{
			key: "system.pericias.enga.bonus",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "gems",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

T20GeneralUpgrades.discreet = {
	name: "T20.ItemUpgradesDiscreet",
	description: "T20.ItemUpgradesTooltipDiscreet",
	tint: "#808080",
	changes: [
		{
			key: "system.attributes.carga.bonus",
			value: "-1",
			type: "add",
			priority: 0
		},
		{
			key: "system.pericias.furt.bonus",
			value: "5",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "discreet",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

T20GeneralUpgrades.macabre = {
	name: "T20.ItemUpgradesMacabre",
	description: "T20.ItemUpgradesTooltipMacabre",
	tint: "#8B0000",
	changes: [
		{
			key: "system.pericias.inti.bonus",
			value: "2",
			type: "add",
			priority: 0
		},
		{
			key: "system.pericias.dipl.bonus",
			value: "-2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "macabre",
			self: false
		}
	},
	disabled: false,
	transfer: true
};

const T20ToolsUpgrades = {};

T20ToolsUpgrades.status = {
	enhanced: "DONE"
};

T20ToolsUpgrades.enhanced = {
	name: "T20.ToolUpgradesEnhanced",
	description: "T20.ToolUpgradesTooltipEnhanced",
	tint: "#00FF00",
	changes: [
		{
			key: "system.modificadores.pericias.geral",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: false,
			durationScene: false,
			upgrade: "enhanced",
			self: false,
			skill: true
		}
	},
	disabled: false,
	isSuppressed: true,
	transfer: true
};

const T20WeaponUpgrades = {};

T20WeaponUpgrades.status = {
	accurate: "DONE",
	pungent: "DONE",
	cruel: "DONE",
	atrocious: "DONE",
	balanced: "DONE",
	harmonized: "DONE",
	injection: "MANUAL",
	massive: "DONE",
	specialmaterial: "MANUAL",
	scope: "MANUAL",
	precise: "DONE"
};

T20WeaponUpgrades.accurate = {
	name: "T20.WeaponUpgradesAccurate",
	description: "T20.WeaponUpgradesTooltipAccurate",
	tint: "#FFFFFF",
	changes: [
		{
			key: "ataque",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "accurate",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.pungent = {
	name: "T20.WeaponUpgradesPungent",
	description: "T20.WeaponUpgradesTooltipPungent",
	tint: "#FFFFFF",
	changes: [
		{
			key: "ataque",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "pungent",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.cruel = {
	name: "T20.WeaponUpgradesCruel",
	description: "T20.WeaponUpgradesTooltipCruel",
	tint: "#FF0000",
	changes: [
		{
			key: "dano",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "cruel",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.atrocious = {
	name: "T20.WeaponUpgradesAtrocious",
	description: "T20.WeaponUpgradesTooltipAtrocious",
	tint: "#FF0000",
	changes: [
		{
			key: "dano",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "atrocious",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.balanced = {
	name: "T20.WeaponUpgradesBalanced",
	description: "T20.WeaponUpgradesTooltipBalanced",
	tint: "#00FF00",
	changes: [
		{
			key: "system.pericias.luta.outros",
			value: "2",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "balanced",
			self: false,
			skill: true,
			items: "T20.SkillLuta"
		}
	},
	disabled: true,
	isSuppressed: true,
	transfer: true
};

T20WeaponUpgrades.harmonized = {
	name: "T20.WeaponUpgradesHarmonized",
	description: "T20.WeaponUpgradesTooltipHarmonized",
	tint: "#FFFF00",
	changes: [],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "harmonized",
			self: true,
			custo: "-1"
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.massive = {
	name: "T20.WeaponUpgradesMassive",
	description: "T20.WeaponUpgradesTooltipMassive",
	tint: "#800080",
	changes: [
		{
			key: "criticoX",
			value: "1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "massive",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

T20WeaponUpgrades.precise = {
	name: "T20.WeaponUpgradesPrecise",
	description: "T20.WeaponUpgradesTooltipPrecise",
	tint: "#808080",
	changes: [
		{
			key: "criticoM",
			value: "-1",
			type: "add",
			priority: 0
		}
	],
	flags: {
		tormenta20: {
			onuse: true,
			durationScene: false,
			upgrade: "precise",
			self: true
		}
	},
	disabled: false,
	transfer: false
};

/** Each category has a status property that indicates if
 * the upgrade is implemented or should be manually placed in the sheet.
 * DONE: it's implemented
 * MANUAL: it should be manually placed in the sheet
 * if it's not present, it's not implemented and wasn't analyzed
 */
const T20Upgrades = {
	weapon: T20WeaponUpgrades,
	armor: T20ArmorUpgrades,
	esoteric: T20EsotericUpgrades,
	tools: T20ToolsUpgrades,
	general: T20GeneralUpgrades,
	ammo: T20AmmoUpgrades
};

/* FROM 5e */
/* -------------------------------------------- */
/*  Config Pre-Localization                     */
/* -------------------------------------------- */

/**
 * Storage for pre-localization configuration.
 * @type {object}
 * @private
 */
const _preLocalizationRegistrations = {};

/**
 * Mark the provided config key to be pre-localized during the init stage.
 * @param {string} configKey              Key within `CONFIG.T20` to localize.
 * @param {object} [options={}]
 * @param {string} [options.key]          If each entry in the config enum is an object,
 *                                        localize and sort using this property.
 * @param {string[]} [options.keys=[]]    Array of localization keys. First key listed will be used for sorting
 *                                        if multiple are provided.
 * @param {boolean} [options.sort=false]  Sort this config enum, using the key if set.
 */
function preLocalize(configKey, { key, keys = [], sort = false } = {}) {
	if (key) keys.unshift(key);
	_preLocalizationRegistrations[configKey] = { keys, sort };
}

/* -------------------------------------------- */
/*  Active Effect Change Compatibility (v13/v14)                */
/* -------------------------------------------- */

/*
 * No v14 EffectChangeData#mode (número) virou #type (string) e o array saiu de
 * ActiveEffect#changes para ActiveEffect#system#changes. Os helpers abaixo leem
 * tanto o formato novo quanto o antigo, para o sistema funcionar independente de
 * como o dado foi salvo (compêndios/mundos antigos ainda usam mode número).
 */

/** Índice = valor numérico do mode antigo (ACTIVE_EFFECT_MODES) */
const CHANGE_MODE_TO_TYPE = ["custom", "multiply", "add", "downgrade", "upgrade", "override"];

/** type string novo -> valor numérico do mode antigo (subtract mapeia para add) */
const CHANGE_TYPE_TO_MODE = {
	custom: 0,
	multiply: 1,
	add: 2,
	subtract: 2,
	downgrade: 3,
	upgrade: 4,
	override: 5
};

/**
 * Retorna o `type` (string, formato v14) de um change, seja ele novo ou antigo.
 * @param {object} change
 * @returns {string}
 */
function changeType(change) {
	if (typeof change?.type === "string") return change.type;
	return CHANGE_MODE_TO_TYPE[change?.mode] ?? "add";
}

/**
 * Retorna o `mode` (número, formato v13) de um change, seja ele novo ou antigo.
 * Útil para código interno que ainda compara numericamente.
 * @param {object} change
 * @returns {number}
 */
function changeMode(change) {
	if (typeof change?.type === "string") return CHANGE_TYPE_TO_MODE[change.type] ?? 2;
	return typeof change?.mode === "number" ? change.mode : 2;
}

/**
 * Lista de changes de um ActiveEffect (documento) ou de um objeto de dados de efeito,
 * preferindo o local novo (system.changes) e caindo para o antigo (changes).
 * @param {object} doc  ActiveEffect ou dado bruto de efeito
 * @returns {Array}
 */
function effectChanges(doc) {
	return doc?.system?.changes ?? doc?.changes ?? [];
}

/* -------------------------------------------- */

/**
 * Execute previously defined pre-localization tasks on the provided config object.
 * @param {object} config  The `CONFIG.T20` object to localize and sort. *Will be mutated.*
 */
function performPreLocalization(config) {
	for (const [key, settings] of Object.entries(_preLocalizationRegistrations)) {
		_localizeObject(config[key], settings.keys);
		if (settings.sort) config[key] = sortObjectEntries(config[key], settings.keys[0]);
	}
}

/* -------------------------------------------- */

/**
 * Sort the provided object by its values or by an inner sortKey.
 * @param {object} obj                 The object to sort.
 * @param {string|Function} [sortKey]  An inner key upon which to sort or sorting function.
 * @returns {object}                   A copy of the original object that has been sorted.
 */
function sortObjectEntries(obj, sortKey) {
	let sorted = Object.entries(obj);
	const sort = (lhs, rhs) =>
		foundry.utils.getType(lhs) === "string" ? lhs.localeCompare(rhs, game.i18n.lang) : lhs - rhs;
	if (foundry.utils.getType(sortKey) === "function") sorted = sorted.sort((lhs, rhs) => sortKey(lhs[1], rhs[1]));
	else if (sortKey) sorted = sorted.sort((lhs, rhs) => sort(lhs[1][sortKey], rhs[1][sortKey]));
	else sorted = sorted.sort((lhs, rhs) => sort(lhs[1], rhs[1]));
	return Object.fromEntries(sorted);
}

/* -------------------------------------------- */

/**
 * Localize the values of a configuration object by translating them in-place.
 * @param {object} obj       The configuration object to localize.
 * @param {string[]} [keys]  List of inner keys that should be localized if this is an object.
 * @private
 */
function _localizeObject(obj, keys) {
	for (const [k, v] of Object.entries(obj)) {
		const type = typeof v;
		if (type === "string") {
			obj[k] = game.i18n.localize(v);
			continue;
		}

		if (type !== "object") {
			console.error(
				new Error(`Pre-localized configuration values must be a string or object, ${type} found for "${k}" instead.`)
			);
			continue;
		}
		if (!keys?.length) {
			console.error(new Error("Localization keys must be provided for pre-localizing when target is an object."));
			continue;
		}

		for (const key of keys) {
			if (!v[key]) continue;
			v[key] = game.i18n.localize(v[key]);
		}
	}
}

function uuidToObject(uuid) {
	uuid.split(".").reduce(function (result, value, index, array) {
		if (!value) value = `undefined${index}`;
		if (index % 2 === 0) result[value] = array[index + 1];
		return result;
	}, {});
}

function stringify(obj) {
	return JSON.stringify(obj, null, 3);
}

/**
 * Tira o plural de palavras em Português.
 * Atenção para palavras terminadas em "us", que geralmente não estão no plural (deus, virus, ônibus, bônus).
 * @param {string} palavra
 * @param {boolean} pulaUS	Determina se a "us" deve ser considerado plural ou não.
 * @returns {string}
 */
function despluralizar(palavra, pulaUS = true) {
	if (palavra.endsWith("ões") || palavra.endsWith("ães")) {
		return `${palavra.slice(0, -3)}ão`;
	} else if (palavra.endsWith("is") && palavra.length > 3) {
		return `${palavra.slice(0, -2)}l`;
	} else if (palavra.endsWith("res")) {
		return palavra.slice(0, -2);
	} else if (palavra.endsWith("ses")) {
		return palavra.slice(0, -2);
	} else if (palavra.endsWith("s") && (!pulaUS || !palavra.endsWith("us"))) {
		return palavra.slice(0, -1);
	}
	return palavra;
}

function wordToNumber(str) {
	return (
		{
			zero: 0,
			um: 1,
			uma: 1,
			dois: 2,
			duas: 2,
			três: 3,
			quatro: 4,
			cinco: 5,
			seis: 6,
			sete: 7,
			oito: 8,
			nove: 9,
			dez: 10
		}[str.toLowerCase()] ?? 1
	);
}

function fontAwesomeIcon(glyph, { style = "solid", fixedWidth = false } = {}) {
	const styleClass = `fa-${style}`;
	const glyphClass = glyph.startsWith("fa-") ? glyph : `fa-${glyph}`;
	const icon = document.createElement("i");
	icon.classList.add(styleClass, glyphClass);
	if (fixedWidth) icon.classList.add("fa-fw");

	return icon;
}

function htmlQuery(parent, selectors) {
	if (!(parent instanceof Element || parent instanceof Document)) return null;
	return parent.querySelector(selectors);
}

function createHTMLElement(nodeName, { classes = [], dataset = {}, children = [], innerHTML } = {}) {
	const element = document.createElement(nodeName);
	if (classes.length > 0) element.classList.add(...classes);

	for (const [key, value] of Object.entries(dataset).filter(([, v]) => v !== false)) {
		element.dataset[key] = value === true ? "" : String(value);
	}

	if (innerHTML) {
		element.innerHTML = innerHTML;
	} else {
		for (const child of children) {
			const childElement = child instanceof HTMLElement ? child : new Text(child);
			element.appendChild(childElement);
		}
	}

	return element;
}

/**
 * Convert a bonus value to a simple integer for displaying on the sheet.
 * @param {number|string|null} bonus  Bonus formula.
 * @param {object} [data={}]          Data to use for replacing @ strings.
 * @returns {number}                  Simplified bonus as an integer.
 * @protected
 */
function simplifyBonus(bonus, data = {}) {
	if (!bonus) return 0;
	if (Number.isNumeric(bonus)) return Number(bonus);
	try {
		const roll = new Roll(bonus, data);
		return roll.isDeterministic ? roll.evaluateSync().total : 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

/**
 * Convert strings formatadas como "1/4" em valores numéricos.
 * @param {string|number} fraction
 * @returns {number}
 */
function parseFraction(fraction) {
	let [num, denom] = String(fraction).split("/").map(Number);
	denom = isNaN(denom) || denom === 0 ? 1 : denom;
	return num / denom;
}

var utils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	CHANGE_MODE_TO_TYPE: CHANGE_MODE_TO_TYPE,
	CHANGE_TYPE_TO_MODE: CHANGE_TYPE_TO_MODE,
	changeMode: changeMode,
	changeType: changeType,
	createHTMLElement: createHTMLElement,
	despluralizar: despluralizar,
	effectChanges: effectChanges,
	fontAwesomeIcon: fontAwesomeIcon,
	htmlQuery: htmlQuery,
	parseFraction: parseFraction,
	performPreLocalization: performPreLocalization,
	preLocalize: preLocalize,
	simplifyBonus: simplifyBonus,
	sortObjectEntries: sortObjectEntries,
	stringify: stringify,
	uuidToObject: uuidToObject,
	wordToNumber: wordToNumber
});

// TODO checar se os campos abaixo têm utilidade
/**
 * Commom properties for ameacas
 */

/**
 * XP for CR
 */
const CHALLENGELEVEL = Object.freeze([
	"1/4",
	"1/2",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"S",
	"S+"
]);

const TABLESOLO = Object.freeze({
	"1/4": {
		rank: "iniciante",
		ataque: 6,
		dano: 8,
		defesa: 11,
		resistenciaForte: 3,
		resistenciaMedia: 3,
		resistenciaFraca: 3,
		pv: 7,
		efeito: 12
	},
	"1/2": {
		rank: "iniciante",
		ataque: 7,
		dano: 10,
		defesa: 14,
		resitenciaForte: 6,
		resistenciaMedia: 3,
		resistenciaFraca: -1,
		pv: 15,
		efeito: 13
	},
	1: {
		rank: "iniciante",
		ataque: 9,
		dano: 15,
		defesa: 16,
		resistenciaForte: 11,
		resistenciaMedia: 5,
		resistenciaFraca: 0,
		pv: 35,
		efeito: 14
	},
	2: {
		rank: "iniciante",
		ataque: 12,
		dano: 18,
		defesa: 19,
		resistenciaForte: 13,
		resistenciaMedia: 7,
		resistenciaFraca: 2,
		pv: 70,
		efeito: 16
	},
	3: {
		rank: "iniciante",
		ataque: 14,
		dano: 21,
		defesa: 21,
		resistenciaForte: 15,
		resistenciaMedia: 9,
		resistenciaFraca: 3,
		pv: 105,
		efeito: 17
	},
	4: {
		rank: "iniciante",
		ataque: 16,
		dano: 24,
		defesa: 23,
		resistenciaForte: 16,
		resistenciaMedia: 10,
		resistenciaFraca: 4,
		pv: 140,
		efeito: 18
	},
	5: {
		rank: "veterano",
		ataque: 17,
		dano: 40,
		defesa: 24,
		resistenciaForte: 17,
		resistenciaMedia: 11,
		resistenciaFraca: 5,
		pv: 200,
		efeito: 20
	},
	6: {
		rank: "veterano",
		ataque: 20,
		dano: 56,
		defesa: 27,
		resistenciaForte: 18,
		resistenciaMedia: 12,
		resistenciaFraca: 6,
		pv: 240,
		efeito: 22
	},
	7: {
		rank: "veterano",
		ataque: 24,
		dano: 62,
		defesa: 31,
		resistenciaForte: 20,
		resistenciaMedia: 14,
		resistenciaFraca: 7,
		pv: 280,
		efeito: 24
	},
	8: {
		rank: "veterano",
		ataque: 26,
		dano: 68,
		defesa: 33,
		resistenciaForte: 21,
		resistenciaMedia: 15,
		resistenciaFraca: 8,
		pv: 320,
		efeito: 26
	},
	9: {
		rank: "veterano",
		ataque: 27,
		dano: 74,
		defesa: 34,
		resistenciaForte: 21,
		resistenciaMedia: 15,
		resistenciaFraca: 9,
		pv: 360,
		efeito: 28
	},
	10: {
		rank: "veterano",
		ataque: 29,
		dano: 80,
		defesa: 36,
		resistenciaForte: 22,
		resistenciaMedia: 16,
		resistenciaFraca: 10,
		pv: 400,
		efeito: 30
	},
	11: {
		rank: "campeao",
		ataque: 34,
		dano: 130,
		defesa: 41,
		resistenciaForte: 24,
		resistenciaMedia: 18,
		resistenciaFraca: 11,
		pv: 550,
		efeito: 31
	},
	12: {
		rank: "campeao",
		ataque: 36,
		dano: 144,
		defesa: 43,
		resistenciaForte: 26,
		resistenciaMedia: 20,
		resistenciaFraca: 12,
		pv: 600,
		efeito: 33
	},
	13: {
		rank: "campeao",
		ataque: 37,
		dano: 158,
		defesa: 44,
		resistenciaForte: 26,
		resistenciaMedia: 20,
		resistenciaFraca: 13,
		pv: 650,
		efeito: 35
	},
	14: {
		rank: "campeao",
		ataque: 39,
		dano: 172,
		defesa: 46,
		resistenciaForte: 28,
		resistenciaMedia: 22,
		resistenciaFraca: 14,
		pv: 700,
		efeito: 38
	},
	15: {
		rank: "campeao",
		ataque: 43,
		dano: 186,
		defesa: 50,
		resistenciaForte: 28,
		resistenciaMedia: 22,
		resistenciaFraca: 15,
		pv: 750,
		efeito: 40
	},
	16: {
		rank: "campeao",
		ataque: 46,
		dano: 200,
		defesa: 53,
		resistenciaForte: 30,
		resistenciaMedia: 24,
		resistenciaFraca: 16,
		pv: 800,
		efeito: 42
	},
	17: {
		rank: "lenda",
		ataque: 47,
		dano: 270,
		defesa: 54,
		resistenciaForte: 30,
		resistenciaMedia: 24,
		resistenciaFraca: 17,
		pv: 1020,
		efeito: 44
	},
	18: {
		rank: "lenda",
		ataque: 49,
		dano: 288,
		defesa: 56,
		resistenciaForte: 32,
		resistenciaMedia: 26,
		resistenciaFraca: 18,
		pv: 1080,
		efeito: 47
	},
	19: {
		rank: "lenda",
		ataque: 52,
		dano: 306,
		defesa: 59,
		resistenciaForte: 32,
		resistenciaMedia: 26,
		resistenciaFraca: 19,
		pv: 1140,
		efeito: 47
	},
	20: {
		rank: "lenda",
		ataque: 54,
		dano: 324,
		defesa: 61,
		resistenciaForte: 34,
		resistenciaMedia: 28,
		resistenciaFraca: 20,
		pv: 1200,
		efeito: 49
	},
	S: {
		rank: "lenda",
		ataque: 58,
		dano: 360,
		defesa: 65,
		resistenciaForte: 36,
		resistenciaMedia: 30,
		resistenciaFraca: 22,
		pv: 2500,
		efeito: 51
	},
	"S+": {
		rank: "lenda",
		ataque: 65,
		dano: 500,
		defesa: 70,
		resistenciaForte: 38,
		resistenciaMedia: 33,
		resistenciaFraca: 25,
		pv: 4000,
		efeito: 55
	}
});

const TABLELACAIO = Object.freeze({
	"1/4": {
		rank: "iniciante",
		ataque: 7,
		dano: 9,
		defesa: 10,
		resistenciaForte: 2,
		resistenciaMedia: 0,
		resistenciaFraca: -1,
		pv: 4,
		efeito: 12
	},
	"1/2": {
		rank: "iniciante",
		ataque: 9,
		dano: 11,
		defesa: 13,
		resistenciaForte: 5,
		resistenciaMedia: 3,
		resistenciaFraca: 0,
		pv: 6,
		efeito: 13
	},
	1: {
		rank: "iniciante",
		ataque: 11,
		dano: 17,
		defesa: 15,
		resistenciaForte: 10,
		resistenciaMedia: 5,
		resistenciaFraca: 1,
		pv: 9,
		efeito: 14
	},
	2: {
		rank: "iniciante",
		ataque: 14,
		dano: 21,
		defesa: 18,
		resistenciaForte: 12,
		resistenciaMedia: 7,
		resistenciaFraca: 3,
		pv: 14,
		efeito: 16
	},
	3: {
		rank: "iniciante",
		ataque: 16,
		dano: 24,
		defesa: 20,
		resistenciaForte: 14,
		resistenciaMedia: 9,
		resistenciaFraca: 4,
		pv: 21,
		efeito: 17
	},
	4: {
		rank: "iniciante",
		ataque: 17,
		dano: 32,
		defesa: 22,
		resistenciaForte: 15,
		resistenciaMedia: 10,
		resistenciaFraca: 5,
		pv: 28,
		efeito: 18
	},
	5: {
		rank: "veterano",
		ataque: 20,
		dano: 56,
		defesa: 23,
		resistenciaForte: 16,
		resistenciaMedia: 11,
		resistenciaFraca: 6,
		pv: 40,
		efeito: 20
	},
	6: {
		rank: "veterano",
		ataque: 24,
		dano: 62,
		defesa: 26,
		resistenciaForte: 17,
		resistenciaMedia: 12,
		resistenciaFraca: 7,
		pv: 48,
		efeito: 22
	},
	7: {
		rank: "veterano",
		ataque: 26,
		dano: 68,
		defesa: 30,
		resistenciaForte: 19,
		resistenciaMedia: 14,
		resistenciaFraca: 8,
		pv: 56,
		efeito: 24
	},
	8: {
		rank: "veterano",
		ataque: 27,
		dano: 74,
		defesa: 32,
		resistenciaForte: 20,
		resistenciaMedia: 15,
		resistenciaFraca: 9,
		pv: 64,
		efeito: 26
	},
	9: {
		rank: "veterano",
		ataque: 29,
		dano: 80,
		defesa: 33,
		resistenciaForte: 20,
		resistenciaMedia: 15,
		resistenciaFraca: 10,
		pv: 72,
		efeito: 28
	},
	10: {
		rank: "veterano",
		ataque: 34,
		dano: 105,
		defesa: 35,
		resistenciaForte: 21,
		resistenciaMedia: 16,
		resistenciaFraca: 11,
		pv: 80,
		efeito: 30
	},
	11: {
		rank: "campeao",
		ataque: 36,
		dano: 144,
		defesa: 40,
		resistenciaForte: 23,
		resistenciaMedia: 18,
		resistenciaFraca: 12,
		pv: 110,
		efeito: 31
	},
	12: {
		rank: "campeao",
		ataque: 37,
		dano: 158,
		defesa: 42,
		resistenciaForte: 25,
		resistenciaMedia: 20,
		resistenciaFraca: 13,
		pv: 120,
		efeito: 33
	},
	13: {
		rank: "campeao",
		ataque: 39,
		dano: 172,
		defesa: 43,
		resistenciaForte: 25,
		resistenciaMedia: 20,
		resistenciaFraca: 14,
		pv: 130,
		efeito: 35
	},
	14: {
		rank: "campeao",
		ataque: 43,
		dano: 186,
		defesa: 45,
		resistenciaForte: 27,
		resistenciaMedia: 22,
		resistenciaFraca: 15,
		pv: 140,
		efeito: 38
	},
	15: {
		rank: "campeao",
		ataque: 46,
		dano: 200,
		defesa: 49,
		resistenciaForte: 27,
		resistenciaMedia: 22,
		resistenciaFraca: 16,
		pv: 150,
		efeito: 40
	},
	16: {
		rank: "campeao",
		ataque: 47,
		dano: 235,
		defesa: 52,
		resistenciaForte: 29,
		resistenciaMedia: 24,
		resistenciaFraca: 17,
		pv: 160,
		efeito: 42
	},
	17: {
		rank: "lenda",
		ataque: 49,
		dano: 288,
		defesa: 53,
		resistenciaForte: 29,
		resistenciaMedia: 24,
		resistenciaFraca: 18,
		pv: 204,
		efeito: 44
	},
	18: {
		rank: "lenda",
		ataque: 52,
		dano: 306,
		defesa: 55,
		resistenciaForte: 31,
		resistenciaMedia: 26,
		resistenciaFraca: 19,
		pv: 216,
		efeito: 47
	},
	19: {
		rank: "lenda",
		ataque: 54,
		dano: 324,
		defesa: 58,
		resistenciaForte: 31,
		resistenciaMedia: 26,
		resistenciaFraca: 20,
		pv: 228,
		efeito: 47
	},
	20: {
		rank: "lenda",
		ataque: 56,
		dano: 344,
		defesa: 60,
		resistenciaForte: 33,
		resistenciaMedia: 28,
		resistenciaFraca: 21,
		pv: 240,
		efeito: 49
	},
	S: {
		rank: "lenda",
		ataque: 60,
		dano: 485,
		defesa: 64,
		resistenciaForte: 35,
		resistenciaMedia: 30,
		resistenciaFraca: 23,
		pv: 500,
		efeito: 51
	},
	"S+": {
		rank: "lenda",
		ataque: 67,
		dano: 540,
		defesa: 59,
		resistenciaForte: 37,
		resistenciaMedia: 33,
		resistenciaFraca: 26,
		pv: 800,
		efeito: 55
	}
});

const TABLEESPECIAL = Object.freeze({
	"1/4": {
		rank: "iniciante",
		ataque: 4,
		dano: 8,
		defesa: 11,
		resistenciaForte: 3,
		resistenciaMedia: 0,
		resistenciaFraca: -2,
		pv: 5,
		efeito: 14
	},
	"1/2": {
		rank: "iniciante",
		ataque: 5,
		dano: 10,
		defesa: 12,
		resistenciaForte: 6,
		resistenciaMedia: 3,
		resistenciaFraca: -1,
		pv: 11,
		efeito: 15
	},
	1: {
		rank: "iniciante",
		ataque: 7,
		dano: 15,
		defesa: 14,
		resistenciaForte: 11,
		resistenciaMedia: 5,
		resistenciaFraca: 0,
		vida: 25,
		efeito: 16
	},
	2: {
		rank: "iniciante",
		ataque: 10,
		dano: 18,
		defesa: 17,
		resistenciaForte: 13,
		resistenciaMedia: 7,
		resistenciaFraca: 2,
		vida: 49,
		efeito: 18
	},
	3: {
		rank: "iniciante",
		ataque: 12,
		dano: 21,
		defesa: 19,
		resistenciaForte: 15,
		resistenciaMedia: 9,
		resistenciaFraca: 3,
		vida: 74,
		efeito: 19
	},
	4: {
		rank: "iniciante",
		ataque: 14,
		dano: 24,
		defesa: 21,
		resistenciaForte: 16,
		resistenciaMedia: 10,
		resistenciaFraca: 4,
		vida: 98,
		efeito: 20
	},
	5: {
		rank: "veterano",
		ataque: 15,
		dano: 40,
		defesa: 22,
		resistenciaForte: 17,
		resistenciaMedia: 11,
		resistenciaFraca: 5,
		vida: 140,
		efeito: 22
	},
	6: {
		rank: "veterano",
		ataque: 18,
		dano: 56,
		defesa: 25,
		resistenciaForte: 18,
		resistenciaMedia: 12,
		resistenciaFraca: 6,
		vida: 168,
		efeito: 24
	},
	7: {
		rank: "veterano",
		ataque: 22,
		dano: 62,
		defesa: 29,
		resistenciaForte: 20,
		resistenciaMedia: 14,
		resistenciaFraca: 7,
		vida: 196,
		efeito: 26
	},
	8: {
		rank: "veterano",
		ataque: 24,
		dano: 68,
		defesa: 31,
		resistenciaForte: 21,
		resistenciaMedia: 15,
		resistenciaFraca: 8,
		vida: 224,
		efeito: 28
	},
	9: {
		rank: "veterano",
		ataque: 25,
		dano: 74,
		defesa: 32,
		resistenciaForte: 21,
		resistenciaMedia: 15,
		resistenciaFraca: 9,
		vida: 252,
		efeito: 30
	},
	10: {
		rank: "veterano",
		ataque: 27,
		dano: 80,
		defesa: 34,
		resistenciaForte: 22,
		resistenciaMedia: 16,
		resistenciaFraca: 10,
		vida: 280,
		efeito: 32
	},
	11: {
		rank: "campeao",
		ataque: 32,
		dano: 130,
		defesa: 39,
		resistenciaForte: 24,
		resistenciaMedia: 18,
		resistenciaFraca: 11,
		vida: 385,
		efeito: 33
	},
	12: {
		rank: "campeao",
		ataque: 34,
		dano: 144,
		defesa: 41,
		resistenciaForte: 26,
		resistenciaMedia: 20,
		resistenciaFraca: 12,
		vida: 420,
		efeito: 35
	},
	13: {
		rank: "campeao",
		ataque: 35,
		dano: 158,
		defesa: 42,
		resistenciaForte: 26,
		resistenciaMedia: 20,
		resistenciaFraca: 13,
		vida: 455,
		efeito: 37
	},
	14: {
		rank: "campeao",
		ataque: 37,
		dano: 172,
		defesa: 44,
		resistenciaForte: 28,
		resistenciaMedia: 22,
		resistenciaFraca: 14,
		vida: 490,
		efeito: 40
	},
	15: {
		rank: "campeao",
		ataque: 41,
		dano: 186,
		defesa: 48,
		resistenciaForte: 28,
		resistenciaMedia: 22,
		resistenciaFraca: 15,
		vida: 525,
		efeito: 42
	},
	16: {
		rank: "campeao",
		ataque: 44,
		dano: 200,
		defesa: 51,
		resistenciaForte: 30,
		resistenciaMedia: 24,
		resistenciaFraca: 16,
		vida: 560,
		efeito: 44
	},
	17: {
		rank: "lenda",
		ataque: 45,
		dano: 270,
		defesa: 52,
		resistenciaForte: 30,
		resistenciaMedia: 24,
		resistenciaFraca: 17,
		vida: 714,
		efeito: 46
	},
	18: {
		rank: "lenda",
		ataque: 47,
		dano: 288,
		defesa: 54,
		resistenciaForte: 32,
		resistenciaMedia: 26,
		resistenciaFraca: 18,
		vida: 756,
		efeito: 49
	},
	19: {
		rank: "lenda",
		ataque: 50,
		dano: 306,
		defesa: 57,
		resistenciaForte: 32,
		resistenciaMedia: 26,
		resistenciaFraca: 19,
		vida: 798,
		efeito: 49
	},
	20: {
		rank: "lenda",
		ataque: 52,
		dano: 324,
		defesa: 59,
		resistenciaForte: 34,
		resistenciaMedia: 28,
		resistenciaFraca: 20,
		vida: 840,
		efeito: 51
	},
	S: {
		rank: "lenda",
		ataque: 55,
		dano: 360,
		defesa: 63,
		resistenciaForte: 36,
		resistenciaMedia: 30,
		resistenciaFraca: 22,
		pv: 1750,
		efeito: 55
	},
	"S+": {
		rank: "lenda",
		ataque: 60,
		dano: 500,
		defesa: 67,
		resistenciaForte: 38,
		resistenciaMedia: 33,
		resistenciaFraca: 25,
		pv: 2800,
		efeito: 60
	}
});

const AMEACATYPES = Object.freeze({
	solo: TABLESOLO,
	lackey: TABLELACAIO,
	special: TABLEESPECIAL
});

const T20$1 = {};

/* ---------------------------------------- */
/*  Compendium Indexing                     */
/* ---------------------------------------- */

CONFIG.Actor.compendiumIndexFields.push("system.attributes.nd");

CONFIG.Item.compendiumIndexFields.push("type");
CONFIG.Item.compendiumIndexFields.push("system.description.value");

CONFIG.Item.compendiumIndexFields.push("system.tags");
CONFIG.Item.compendiumIndexFields.push("system.tipo");
CONFIG.Item.compendiumIndexFields.push("system.subtipo");

// await compendium.getDocuments({'system.subtipo':{$in:['Bardo']}});

/* ---------------------------------------- */
/*  Template Overwrites                     */
/* ---------------------------------------- */

CONFIG.ChatMessage.template = "systems/tormenta20/templates/chat/chat-message.hbs";

/* ---------------------------------------- */
/*  Effect Data                             */
/* ---------------------------------------- */
Object.freeze(T20Conditions);
T20$1.conditions = T20Conditions;
T20$1.statusEffectIcons = Object.values(T20Conditions);

T20$1.effectTypes = {
	arcano: "T20.EffectTypeArcane",
	atordoamento: "T20.EffectTypeStun",
	cansaco: "T20.EffectTypeWeariness",
	climatico: "T20.EffectTypeClimatic",
	cura: "T20.EffectTypeHealing",
	dano: "T20.EffectTypeDamage",
	divino: "T20.EffectTypeHoly",
	luz: "T20.EffectTypeLight",
	magico: "T20.EffectTypeMagic",
	medo: "T20.EffectTypeFear",
	mental: "T20.EffectTypeMental",
	metabolismo: "T20.EffectTypeMetabolism",
	metamorfose: "T20.EffectTypePolymorph",
	movimento: "T20.EffectTypeMovement",
	sentidos: "T20.EffectTypeSenses",
	trevas: "T20.EffectTypeDarkness",
	veneno: "T20.EffectTypePoison"
};
preLocalize("effectTypes", { sort: true });
T20$1.conditionTypes = foundry.utils.mergeObject(
	{ ...T20$1.effectTypes },
	T20$1.statusEffectIcons.reduce(function (o, s) {
		o[s.id] = s.name;
		return o;
	}, {})
);
preLocalize("conditionTypes", { sort: true });
/* ---------------------------------------- */
/*  System Data                             */
/* ---------------------------------------- */
/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars
 * @enum {number}
 */
T20$1.tokenHPColors = {
	damage: 0xff0000,
	healing: 0x00ff00,
	temp: 0xff0000,
	tempmax: 0x440066,
	negmax: 0xaa0000
};

/**
 * Colors used to visualize temporary and temporary maximum MP in token mana bars
 * @enum {number}
 */
T20$1.tokenMPColors = {
	temp: 0x0000ff,
	tempmax: 0x440066,
	negmax: 0x550000
};

/* ---------------------------------------- */
/*  Tormenta20 Types                        */
/* ---------------------------------------- */

/* --------------- Character --------------- */

T20$1.characterFlags = {
	inventarioOrganizado: {
		type: Boolean
	},
	createPotion: {
		type: Boolean
	},
	createScroll: {
		type: Boolean
	},
	mago: {
		type: Boolean
	},
	teste: {
		type: Number
	}
};

/* --------------- Creature --------------- */

T20$1.creatureTypes = {
	ani: "T20.CreatureBeast",
	con: "T20.CreatureConstruct",
	esp: "T20.CreatureSpirit",
	hum: "T20.CreatureHumanoid",
	mon: "T20.CreatureMonstrosity",
	mor: "T20.CreatureUndead"
};
preLocalize("creatureTypes", { sort: true });

T20$1.creatureRoles = {
	solo: "T20.FoeRoleSolo",
	lackey: "T20.FoeRoleLackey",
	special: "T20.FoeRoleSpecial"
};
preLocalize("creatureRoles");

T20$1.DBcreatureRoles = {
	combatant: "T20.FoeRoleCombatant",
	caster: "T20.FoeRoleCaster",
	trickster: "T20.FoeRoleTrickster",
	lackey: "T20.FoeRoleLackey",
	captain: "T20.FoeRoleCaptain",
	boss: "T20.FoeRoleBoss"
};
preLocalize("creatureRoles");

/* ---------------- Armour ---------------- */
/* TODO change to equipment type */
T20$1.armorTypes = {
	leve: "T20.EquipmentLight",
	pesada: "T20.EquipmentHeavy",
	escudo: "T20.EquipmentShield",
	bonus: "T20.EquipmentMagicBonus",
	natural: "T20.EquipmentNatural",
	acessorio: "T20.EquipmentAccessory",
	traje: "T20.EquipmentClothing",
	ferramenta: "T20.EquipmentTool",
	esoterico: "T20.EquipmentEsoteric"
};
preLocalize("armorTypes");

/* TODO change to equipment type */
T20$1.itemSlotTypes = {
	hand: "T20.ItemSlotHand",
	body: "T20.ItemSlotBody",
	both: "T20.ItemSlotBoth"
};
preLocalize("itemSlotTypes");
/* ---------------- Damage ---------------- */

T20$1.damageTypes = {
	dano: "T20.Damage",
	perda: "T20.DamageLoss",
	acido: "T20.DamageAcid",
	corte: "T20.DamageSlashing",
	eletricidade: "T20.DamageLightning",
	essencia: "T20.DamageForce",
	fogo: "T20.DamageFire",
	frio: "T20.DamageCold",
	impacto: "T20.DamageBludgeoning",
	luz: "T20.DamageRadiant",
	psiquico: "T20.DamagePsychic",
	perfuracao: "T20.DamagePiercing",
	trevas: "T20.DamageNecrotic"
};
preLocalize("damageTypes");

T20$1.healingTypes = {
	curapv: "T20.Healing",
	curatpv: "T20.HealingTemp",
	curapm: "T20.ManaRecovery",
	curatpm: "T20.ManaTemp"
};
preLocalize("healingTypes");

/* ----------------- Time ----------------- */
/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
T20$1.timePeriods = {
	inst: "T20.TimeInst",
	scene: "T20.TimeScene",
	turn: "T20.TimeTurn",
	round: "T20.TimeRound",
	sust: "T20.TimeSust",
	minute: "T20.TimeMinute",
	hour: "T20.TimeHour",
	day: "T20.TimeDay",
	month: "T20.TimeMonth",
	year: "T20.TimeYear",
	perm: "T20.TimePerm",
	special: "T20.Special"
};
preLocalize("timePeriods");

/* ---------------- Usage ----------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
T20$1.abilityActivationTypes = {
	// none: "T20.None",
	passive: "T20.ActionPassive",
	action: "T20.ActionNormal",
	move: "T20.ActionMove",
	full: "T20.ActionFull",
	reaction: "T20.ActionReaction",
	free: "T20.ActionFree",
	minute: T20$1.timePeriods.minute,
	hour: T20$1.timePeriods.hour,
	day: T20$1.timePeriods.day,
	special: T20$1.timePeriods.special
};
preLocalize("abilityActivationTypes");

T20$1.abilityConsumptionTypes = {
	ammo: "T20.ConsumeAmmunition",
	attribute: "T20.ConsumeAttribute",
	material: "T20.ConsumeMaterial"
};
preLocalize("abilityConsumptionTypes");

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
T20$1.targetTypes = {
	none: "T20.None",
	self: "T20.TargetSelf",
	creature: "T20.TargetCreature",
	ally: "T20.TargetAlly",
	enemy: "T20.TargetEnemy",
	object: "T20.TargetObject",
	space: "T20.TargetSpace",
	radius: "T20.TargetRadius",
	sphere: "T20.TargetSphere",
	cylinder: "T20.TargetCylinder",
	cone: "T20.TargetCone",
	square: "T20.TargetSquare",
	cube: "T20.TargetCube",
	line: "T20.TargetLine",
	wall: "T20.TargetWall"
};
preLocalize("targetTypes");

/* -------------------------------------------- */

/**
 * Map the subset of target types which produce a template area of effect
 * The keys are T20 target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
T20$1.areaTargetTypes = {
	cone: "cone",
	cube: "rect",
	cylinder: "circle",
	line: "ray",
	radius: "circle",
	sphere: "circle",
	square: "rect",
	wall: "ray"
};
preLocalize("areaTargetTypes");

/* --------------- Distance --------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
T20$1.movementUnits = {
	m: "T20.DistM",
	km: "T20.DistKM"
};
preLocalize("movementUnits");

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from T20.movementUnits
 * @type {Object<string,string>}
 */
T20$1.distanceUnits = {
	none: "T20.None",
	self: "T20.DistSelf",
	touch: "T20.DistTouch",
	short: "T20.DistShort",
	medium: "T20.DistMedium",
	long: "T20.DistLong",
	spec: "T20.Special",
	any: "T20.DistAny"
};
for (let [k, v] of Object.entries(T20$1.movementUnits)) {
	T20$1.distanceUnits[k] = v;
}
preLocalize("distanceUnits");

/* ---------------------------------------- */
/*  Character Data                          */
/* ---------------------------------------- */

/* -------------- Abilities --------------- */
T20$1.atributos = {
	for: "T20.AbilityStr",
	des: "T20.AbilityDex",
	con: "T20.AbilityCon",
	int: "T20.AbilityInt",
	sab: "T20.AbilityWis",
	car: "T20.AbilityCha"
};
preLocalize("atributos");

T20$1.atributosAbr = {
	for: "T20.AbilityStrAbbr",
	des: "T20.AbilityDexAbbr",
	con: "T20.AbilityConAbbr",
	int: "T20.AbilityIntAbbr",
	sab: "T20.AbilityWisAbbr",
	car: "T20.AbilityChaAbbr"
};
preLocalize("atributosAbr");

/* -------------- Resources --------------- */
T20$1.resources = {
	primary: "T20.ResourcePrimary",
	secondary: "T20.ResourceSecondary",
	tertiary: "T20.ResourceTertiary",
	deathsave: "T20.ResourceDeathSave",
	shadow: "T20.ResourceShadow",
	catarse: "T20.ResourceCatarse"
};
preLocalize("resources");

/* ---------------- Skills ---------------- */

T20$1.pericias = {
	acro: { abl: "des", systems: ["core"], armorPenalty: true, label: "T20.SkillAcro" },
	ades: { abl: "car", systems: ["core"], trainedOnly: true, label: "T20.SkillAdes" },
	atle: { abl: "for", systems: ["core"], label: "T20.SkillAtle" },
	atua: { abl: "car", systems: ["core"], trainedOnly: true, label: "T20.SkillAtua" },
	cava: { abl: "des", systems: ["core"], label: "T20.SkillCava" },
	conh: { abl: "int", systems: ["core"], trainedOnly: true, label: "T20.SkillConh" },
	cura: { abl: "sab", systems: ["core"], label: "T20.SkillCura" },
	dipl: { abl: "car", systems: ["core"], label: "T20.SkillDipl" },
	enga: { abl: "car", systems: ["core"], label: "T20.SkillEnga" },
	fort: { abl: "con", systems: ["core"], label: "T20.SkillFort" },
	furt: { abl: "des", systems: ["core"], armorPenalty: true, sizeMod: true, label: "T20.SkillFurt" },
	guer: { abl: "int", systems: ["core"], trainedOnly: true, label: "T20.SkillGuer" },
	inic: { abl: "des", systems: ["core"], label: "T20.SkillInic" },
	inti: { abl: "car", systems: ["core"], label: "T20.SkillInti" },
	intu: { abl: "sab", systems: ["core"], label: "T20.SkillIntu" },
	inve: { abl: "int", systems: ["core"], label: "T20.SkillInve" },
	joga: { abl: "car", systems: ["core"], trainedOnly: true, label: "T20.SkillJoga" },
	ladi: { abl: "des", systems: ["core"], trainedOnly: true, armorPenalty: true, label: "T20.SkillLadi" },
	luta: { abl: "for", systems: ["core"], label: "T20.SkillLuta" },
	mist: { abl: "int", systems: ["core"], trainedOnly: true, label: "T20.SkillMist" },
	nobr: { abl: "int", systems: ["core"], trainedOnly: true, label: "T20.SkillNobr" },
	perc: { abl: "sab", systems: ["core"], label: "T20.SkillPerc" },
	pilo: { abl: "des", systems: ["core"], trainedOnly: true, label: "T20.SkillPilo" },
	pont: { abl: "des", systems: ["core"], label: "T20.SkillPont" },
	refl: { abl: "des", systems: ["core"], label: "T20.SkillRefl" },
	reli: { abl: "sab", systems: ["core"], trainedOnly: true, label: "T20.SkillReli" },
	sobr: { abl: "sab", systems: ["core"], label: "T20.SkillSobr" },
	vont: { abl: "sab", systems: ["core"], label: "T20.SkillVont" },

	// Ofícios
	alfa: { abl: "int", systems: ["core"], trainedOnly: true, crafting: true, label: "T20.SkillAlfa" },
	alqu: { abl: "int", systems: ["core"], trainedOnly: true, crafting: true, label: "T20.SkillAlqu" },
	arme: { abl: "int", systems: ["core"], trainedOnly: true, crafting: true, label: "T20.SkillArme" },
	arte: { abl: "int", systems: ["core"], trainedOnly: true, crafting: true, label: "T20.SkillArte" },
	cozi: { abl: "int", systems: ["core"], trainedOnly: true, crafting: true, label: "T20.SkillCozi" },
	enge: { abl: "int", systems: ["core"], armorPenalty: true, trainedOnly: true, crafting: true, label: "T20.SkillEnge" }
};
preLocalize("pericias", { key: "label", sort: true });

T20$1.oficios = new Set(Object.keys(T20$1.pericias).filter((key) => T20$1.pericias[key].crafting));

T20$1.resistencias = {
	fort: "T20.SkillFort",
	refl: "T20.SkillRefl",
	vont: "T20.SkillVont"
};
preLocalize("resistencias", { sort: true });

T20$1.skillCompendiumEntries = {
	acro: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.mtIHFUZSK6xBFHqd",
	ades: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.GGVyGDvqfIQKFLch",
	atle: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.eMu2uKBn5KV0eRI4",
	atua: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.ZTsOxj5RZPayHIFX",
	cava: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.MqOZve8EYE7jIUFw",
	conh: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.TjjV15fV27nEoWyX",
	cura: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.wQcNQVpDUvzvmHMY",
	dipl: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.cPbZCkI3ApOFMTnL",
	enga: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.SF7OrtCOR5wqLTaH",
	fort: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.PcT6ZdZqQgsF5xh2",
	furt: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.bNaCnZBCP78XDpTS",
	guer: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.Enbe4Cb4SZmTJiE9",
	inic: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.Wjq09fN74TRjtwaa",
	inti: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.yFlMv6opj01JYXmu",
	intu: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.gOxPHHZ9lKpaVA2i",
	inve: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.FA5Km75yEUsW8hR4",
	joga: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.WKC0D1EIJLEEqsX1",
	ladi: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.Ic17BdCyk6Eb4fE5",
	luta: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.LFvkUhrjgGP9Joqv",
	mist: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.T5I0dWUuXFEyorJG",
	nobr: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.oacoimyp8UfMD1o7",
	ofic: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.GcfpNnf0qsct6c36",
	perc: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.IZDwoKmx3sd0MGDv",
	pilo: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.RZGkvgBj943km7Ux",
	pont: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.FpCIRhlSUBciPvL1",
	refl: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.rYJ5YACNaWGrv3f8",
	reli: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.0GUTcO35fxzma15V",
	sobr: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.SdS8pxPmbSpjv5Ml",
	vont: "Compendium.tormenta20.basico.gPPLzgFvC0JKi5UE.JournalEntryPage.YriqYltqs9f00eAb"
};

/* -------------- Experience -------------- */

T20$1.xpPorNivel = [
	0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000,
	153000, 171000, 190000
];

T20$1.patamares = [4, 10, 16, 20];

/* ---------------- Senses ---------------- */

T20$1.senses = {
	penumbra: "T20.SenseDimVision",
	escuro: "T20.SenseDarkVision",
	cegas: "T20.SenseBlindSight",
	faro: "T20.SenseScent"
};
preLocalize("senses");

/* --------------- Movement --------------- */
/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
T20$1.movementTypes = {
	walk: "T20.MovementWalk",
	climb: "T20.MovementClimb",
	burrow: "T20.MovementBurrow",
	swim: "T20.MovementSwim",
	fly: "T20.MovementFly"
};
preLocalize("movementTypes");

/* ----------------- Size ----------------- */

T20$1.actorSizes = {
	min: "T20.SizeTiny",
	peq: "T20.SizeSmall",
	med: "T20.SizeMedium",
	gra: "T20.SizeLarge",
	eno: "T20.SizeHuge",
	col: "T20.SizeGargantuan"
};
preLocalize("actorSizes");

T20$1.sizeModifiers = {
	min: 5,
	peq: 2,
	med: 0,
	gra: -2,
	eno: -5,
	col: -10
};

T20$1.tokenSizes = {
	min: 0.5,
	peq: 1,
	med: 1,
	gra: 2,
	eno: 3,
	col: 6
};

/* -------------- Proficiencies ----------- */

T20$1.idiomas = {
	comum: "Comum",
	anao: "Anão",
	elfico: "Élfico",
	goblin: "Goblin",
	hynne: "Hynne",
	silvestre: "Silvestre",
	taurico: "Táurico",
	abissal: "Abissal",
	aquan: "Aquan",
	auran: "Auran",
	celestial: "Celestial",
	draconico: "Dracônico",
	gigante: "Gigante",
	gnoll: "Gnoll",
	ignan: "Ignan",
	infernal: "Infernal",
	orc: "Orc",
	terran: "Terran"
};

T20$1.profArmas = {
	simples: "T20.WeaponSimpleProficiency",
	marcial: "T20.WeaponMartialProficiency",
	exotica: "T20.WeaponExoticProficiency",
	fogo: "T20.WeaponFireArmProficiency"
};
preLocalize("profArmas");

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
T20$1.profArmaduras = {
	lev: "T20.ArmorLightProficiency",
	pes: "T20.ArmorHeavyProficiency",
	esc: "T20.ArmorShieldProficiency"
};
preLocalize("profArmaduras");

/* ---------------------------------------- */
/*  Bases Data                          */
/* ---------------------------------------- */

T20$1.porteType = {
	min: "T20.BaseSizeMininmal",
	mod: "T20.BaseSizeModest",
	bas: "T20.BaseSizeBasic",
	for: "T20.BaseSizeFormidable",
	gra: "T20.BaseSizeGrand",
	sup: "T20.BaseSizeSupreme"
};
preLocalize("porteType");

T20$1.maintenanceCost = {
	min: 100,
	mod: 300,
	bas: 600,
	for: 1000,
	gra: 1500,
	sup: 2100
};

T20$1.roomsNumber = {
	min: 0,
	mod: 3,
	bas: 6,
	for: 9,
	gra: 12,
	sup: 15
};

/* ---------------------------------------- */
/*  Power Data                              */
/* ---------------------------------------- */

T20$1.powerType = {
	ability: "T20.PowerTypeClassAbility",
	classe: "T20.PowerTypeClass",
	concedido: "T20.PowerTypeDivine",
	geral: "T20.PowerTypeGeneral",
	origem: "T20.PowerTypeBackground",
	racial: "T20.PowerTypeRacial",
	distincao: "T20.PowerTypeDistincao",
	complicacao: "T20.PowerTypeComplicacao"
};
preLocalize("powerType");

T20$1.powerSubType = {
	combate: "T20.PowerSubTypeCombat",
	concedido: "T20.PowerSubTypeDivine",
	destino: "T20.PowerSubTypeDestiny",
	magia: "T20.PowerSubTypeSpell",
	tormenta: "T20.PowerSubTypeTormenta"
};
preLocalize("powerSubType");

/* ---------------------------------------- */
/*  Spell Data                              */
/* ---------------------------------------- */

/* ------------------ Type ---------------- */

T20$1.spellType = {
	arc: "T20.SpellArc",
	div: "T20.SpellDiv",
	uni: "T20.SpellUni",
	eng: "T20.SpellEng",
	sim: "T20.SpellSim"
};
preLocalize("spellType");

/* ---------------- Schools --------------- */

T20$1.spellSchools = {
	abj: "T20.SchoolAbj",
	adv: "T20.SchoolAdv",
	con: "T20.SchoolCon",
	enc: "T20.SchoolEnc",
	evo: "T20.SchoolEvo",
	ilu: "T20.SchoolIlu",
	nec: "T20.SchoolNec",
	tra: "T20.SchoolTra"
};
preLocalize("spellSchools", { sort: true });

/* ---------------- Circle --------------- */

T20$1.spellLevels = {
	1: "T20.SpellLevel1",
	2: "T20.SpellLevel2",
	3: "T20.SpellLevel3",
	4: "T20.SpellLevel4",
	5: "T20.SpellLevel5"
};
preLocalize("spellLevels", { sort: true });

/* ---------------------------------------- */
/*  Weapon Data                             */
/* ---------------------------------------- */

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 * preLocalize("abilities");
 */
T20$1.weaponTypes = {
	simples: "T20.WeaponSimple",
	marcial: "T20.WeaponMartial",
	exotica: "T20.WeaponExotic",
	fogo: "T20.WeaponFireArm",
	natural: "T20.WeaponNatural",
	improvisada: "T20.WeaponImprovised"
};
preLocalize("weaponTypes");

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 * preLocalize("abilities");
 */
T20$1.weaponPurposeTypes = {
	"corpo-a-corpo": "T20.WeaponMelee",
	"corpo-a-corpo-arremesso": "T20.WeaponMeleeThrowing",
	disparo: "T20.WeaponRanged",
	arremesso: "T20.WeaponThrowing"
};
preLocalize("weaponPurposeTypes");

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 * preLocalize("abilities");
 */
T20$1.weaponWieldingTypes = {
	leve: "T20.WeaponLight",
	uma: "T20.WeaponOneHand",
	duas: "T20.WeaponTwoHanded"
};
preLocalize("weaponWieldingTypes");

/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 * preLocalize("abilities");
 */
T20$1.weaponProperties = {
	ada: "T20.WeaponPropertiesAdaptable", // WeaponPropertiesAda
	agi: "T20.WeaponPropertiesFinesse", // WeaponPropertiesFin
	alo: "T20.WeaponPropertiesReach", // WeaponPropertiesRch
	des: "T20.WeaponPropertiesUnbalanced",
	dup: "T20.WeaponPropertiesDouble", // WeaponPropertiesDou
	ver: "T20.WeaponPropertiesVersatile", // WeaponPropertiesVer
	hib: "T20.WeaponPropertiesHibrid" // WeaponPropertiesVer
};
// "arr": "T20.WeaponPropertiesThr",
// "dst": "T20.WeaponPropertiesRan",
// "dms": "T20.WeaponPropertiesTwo",
// "lev": "T20.WeaponPropertiesLgt",
// "mun": "T20.WeaponPropertiesAmm",
preLocalize("weaponProperties");

T20$1.weaponSizes = {
	reduzida: "T20.WeaponSizeReduced",
	normal: "T20.WeaponSizeNormal",
	aumentada: "T20.WeaponSizeEnlarged",
	gigante: "T20.WeaponSizeGiant"
};
preLocalize("weaponSizes");

/* -------------------------------------------- */

/**
 * Define Item Upgrades and Tooltips
 */
T20$1.upgrades = T20Upgrades;

T20$1.specialMaterials = {
	"ruby-steel": "T20.SpecialMaterialRubySteel",
	adamant: "T20.SpecialMaterialAdamant",
	"everlasting-ice": "T20.SpecialMaterialEverlastingIce",
	"dark-wood": "T20.SpecialMaterialDarkWood",
	"red-matter": "T20.SpecialMaterialRedMatter",
	mithril: "T20.SpecialMaterialMithril",
	"rainbow-metal": "T20.SpecialMaterialRainbowMetal",
	silver: "T20.SpecialMaterialSilver",
	"dragon-leather": "T20.SpecialMaterialDragonLeather",
	"monster-hull": "T20.SpecialMaterialMonsterHull",
	"kaiju-plating": "T20.SpecialMaterialKaijuPlating",
	"bulette-leather": "T20.SpecialMaterialBuletteLeather",
	"sun-crystal": "T20.SpecialMaterialSunCrystal",
	"iron-coral": "T20.SpecialMaterialIronCoral",
	"kraken-feather": "T20.SpecialMaterialKrakenFeather",
	"razza-chitin": "T20.SpecialMaterialRazzaChitin"
};
preLocalize("specialMaterials");

T20$1.itemUpgrades = {
	golden: "T20.ItemUpgradesGoldPlated",
	gems: "T20.ItemUpgradesGemsStudded",
	discreet: "T20.ItemUpgradesDiscreet",
	macabre: "T20.ItemUpgradesMacabre",
	multifunctional: "T20.ItemUpgradesMultifunctional"
};
preLocalize("itemUpgrades");

T20$1.itemUpgradesTooltips = {
	golden: "T20.ItemUpgradesTooltipGoldPlated",
	gems: "T20.ItemUpgradesTooltipGemsStudded",
	discreet: "T20.ItemUpgradesTooltipDiscreet",
	macabre: "T20.ItemUpgradesTooltipMacabre",
	multifunctional: "T20.ItemUpgradesTooltipMultifunctional"
};
preLocalize("itemUpgradesTooltips");

T20$1.toolUpgrades = {
	enhanced: "T20.ToolUpgradesEnhanced"
};
T20$1.toolUpgradesTooltips = {
	enhanced: "T20.ToolUpgradesTooltipEnhanced"
};
for (let [k, v] of Object.entries(T20$1.itemUpgrades)) {
	T20$1.toolUpgrades[k] = v;
	T20$1.toolUpgradesTooltips[k] = T20$1.itemUpgradesTooltips[k];
}
preLocalize("toolUpgrades");
preLocalize("toolUpgradesTooltips");

T20$1.weaponUpgrades = {
	accurate: "T20.WeaponUpgradesAccurate",
	pungent: "T20.WeaponUpgradesPungent",
	cruel: "T20.WeaponUpgradesCruel",
	atrocious: "T20.WeaponUpgradesAtrocious",
	balanced: "T20.WeaponUpgradesBalanced",
	harmonized: "T20.WeaponUpgradesHarmonized",
	injection: "T20.WeaponUpgradesAlchemicalInjection",
	massive: "T20.WeaponUpgradesMassive",
	specialmaterial: "T20.WeaponUpgradesSpecialMaterial",
	scope: "T20.WeaponUpgradesScope",
	precise: "T20.WeaponUpgradesPrecise",
	penetrating: "T20.WeaponUpgradesPenetrating"
};
T20$1.weaponUpgradesTooltips = {
	accurate: "T20.WeaponUpgradesTooltipAccurate",
	pungent: "T20.WeaponUpgradesTooltipPungent",
	cruel: "T20.WeaponUpgradesTooltipCruel",
	atrocious: "T20.WeaponUpgradesTooltipAtrocious",
	balanced: "T20.WeaponUpgradesTooltipBalanced",
	harmonized: "T20.WeaponUpgradesTooltipHarmonized",
	injection: "T20.WeaponUpgradesTooltipAlchemicalInjection",
	massive: "T20.WeaponUpgradesTooltipMassive",
	specialmaterial: "T20.WeaponUpgradesTooltipSpecialMaterial",
	scope: "T20.WeaponUpgradesTooltipScope",
	precise: "T20.WeaponUpgradesTooltipPrecise",
	penetrating: "T20.ItemUpgradesTooltipPenetrating"
};
for (let [k, v] of Object.entries(T20$1.itemUpgrades)) {
	T20$1.weaponUpgrades[k] = v;
	T20$1.weaponUpgradesTooltips[k] = T20$1.itemUpgradesTooltips[k];
}
preLocalize("weaponUpgrades");
preLocalize("weaponUpgradesTooltips");

T20$1.armorUpgrades = {
	adjusted: "T20.ArmorUpgradesAdjusted",
	undermeasure: "T20.ArmorUpgradesUnderMeasure",
	delicate: "T20.ArmorUpgradesDelicate",
	thorny: "T20.ArmorUpgradesThorny",
	specialmaterial: "T20.ArmorUpgradesSpecialMaterial",
	polished: "T20.ArmorUpgradesPolished",
	reinforced: "T20.ArmorUpgradesReinforced",
	sealed: "T20.ArmorUpgradesSealed"
};
T20$1.armorUpgradesTooltips = {
	adjusted: "T20.ArmorUpgradesTooltipAdjusted",
	undermeasure: "T20.ArmorUpgradesTooltipUnderMeasure",
	delicate: "T20.ArmorUpgradesTooltipDelicate",
	thorny: "T20.ArmorUpgradesTooltipThorny",
	specialmaterial: "T20.ArmorUpgradesTooltipSpecialMaterial",
	polished: "T20.ArmorUpgradesTooltipPolished",
	reinforced: "T20.ArmorUpgradesTooltipReinforced",
	sealed: "T20.ArmorUpgradesTooltipSealed"
};

T20$1.shieldUpgrades = {
	thorny: "T20.ShieldUpgradesThorny"
};
T20$1.shieldUpgradesTooltips = {
	thorny: "T20.ShieldUpgradesTooltipThorny"
};
for (let [k, v] of Object.entries(T20$1.armorUpgrades)) {
	if (k === "thorny") continue;
	T20$1.shieldUpgrades[k] = v;
	T20$1.shieldUpgradesTooltips[k] = T20$1.armorUpgradesTooltips[k];
}
for (let [k, v] of Object.entries(T20$1.itemUpgrades)) {
	T20$1.armorUpgrades[k] = v;
	T20$1.armorUpgradesTooltips[k] = T20$1.itemUpgradesTooltips[k];
	T20$1.shieldUpgrades[k] = v;
	T20$1.shieldUpgradesTooltips[k] = T20$1.itemUpgradesTooltips[k];
}
preLocalize("armorUpgrades");
preLocalize("armorUpgradesTooltips");
preLocalize("shieldUpgrades");
preLocalize("shieldUpgradesTooltips");

T20$1.esotericUpgrades = {
	channeler: "T20.EsotericUpgradesChanneler",
	energetic: "T20.EsotericUpgradesEnergetic",
	harmonized: "T20.EsotericUpgradesHarmonized",
	specialmaterial: "T20.EsotericUpgradesSpecialMaterial",
	powerful: "T20.EsotericUpgradesPowerful",
	vigilant: "T20.EsotericUpgradesVigilant",
	enhancer: "T20.EsotericUpgradesEnhancer"
};

T20$1.esotericUpgradesTooltips = {
	channeler: "T20.EsotericUpgradesEnhancer",
	energetic: "T20.EsotericUpgradesTooltipEnergetic",
	harmonized: "T20.EsotericUpgradesTooltipHarmonized",
	specialmaterial: "T20.EsotericUpgradesTooltipSpecialMaterial",
	powerful: "T20.EsotericUpgradesTooltipPowerful",
	enhancer: "T20.EsotericUpgradesTooltipEnhancer",
	vigilant: "T20.EsotericUpgradesTooltipVigilant"
};
for (let [k, v] of Object.entries(T20$1.itemUpgrades)) {
	T20$1.esotericUpgrades[k] = v;
	T20$1.esotericUpgradesTooltips[k] = T20$1.itemUpgradesTooltips[k];
}
preLocalize("esotericUpgrades");
preLocalize("esotericUpgradesTooltips");

/* -------------------------------------------- */

/**
 * Define Item Enchantment and Tooltips
 */

T20$1.weaponEnchantments = {
	keen: "T20.WeaponEnchantKeen",
	bane: "T20.WeaponEnchantBane",
	throwable: "T20.WeaponEnchantThrowable",
	assassin: "T20.WeaponEnchantAssassin",
	seeking: "T20.WeaponEnchantSeeking",
	frost: "T20.WeaponEnchantFrost",
	caster: "T20.WeaponEnchantCaster",
	corrosive: "T20.WeaponEnchantCorrosive",
	dancing: "T20.WeaponEnchantDancing",
	defending: "T20.WeaponEnchantDefending",
	destructive: "T20.WeaponEnchantDestructive",
	lacerating: "T20.WeaponEnchantLacerating",
	draining: "T20.WeaponEnchantDraining",
	shock: "T20.WeaponEnchantShock",
	energy: "T20.WeaponEnchantEnergy",
	excruciating: "T20.WeaponEnchantExcruciating",
	flaming: "T20.WeaponEnchantFlaming",
	formidable: "T20.WeaponEnchantFormidable",
	lancinating: "T20.WeaponEnchantLancinating",
	magnificent: "T20.WeaponEnchantMagnificent",
	merciful: "T20.WeaponEnchantMerciful",
	unholy: "T20.WeaponEnchantUnholy",
	holy: "T20.WeaponEnchantHoly",
	bloodthirsty: "T20.WeaponEnchantBloodthirsty",
	thundering: "T20.WeaponEnchantThundering",
	sepulchral: "T20.WeaponEnchantSepulchral",
	speed: "T20.WeaponEnchantSpeed",
	poisonous: "T20.WeaponEnchantPoisonous"
};
T20$1.weaponEnchantmentsTooltips = {
	keen: "T20.WeaponEnchantTooltipKeen",
	bane: "T20.WeaponEnchantTooltipBane",
	throwable: "T20.WeaponEnchantTooltipThrowable",
	assassin: "T20.WeaponEnchantTooltipAssassin",
	hunter: "T20.WeaponEnchantTooltipHunter",
	freezing: "T20.WeaponEnchantTooltipFreezing",
	caster: "T20.WeaponEnchantTooltipCaster",
	corrosive: "T20.WeaponEnchantTooltipCorrosive",
	dancing: "T20.WeaponEnchantTooltipDancing",
	defender: "T20.WeaponEnchantTooltipDefender",
	destructive: "T20.WeaponEnchantTooltipDestructive",
	lacerating: "T20.WeaponEnchantTooltipLacerating",
	draining: "T20.WeaponEnchantTooltipDraining",
	eletric: "T20.WeaponEnchantTooltipEletric",
	energy: "T20.WeaponEnchantTooltipEnergy",
	excruciating: "T20.WeaponEnchantTooltipExcruciating",
	flaming: "T20.WeaponEnchantTooltipFlaming",
	formidable: "T20.WeaponEnchantTooltipFormidable",
	lancinating: "T20.WeaponEnchantTooltipLancinating",
	magnificent: "T20.WeaponEnchantTooltipMagnificent",
	merciful: "T20.WeaponEnchantTooltipMerciful",
	unholy: "T20.WeaponEnchantTooltipUnholy",
	holy: "T20.WeaponEnchantTooltipHoly",
	bloodthirsty: "T20.WeaponEnchantTooltipBloodthirsty",
	thundering: "T20.WeaponEnchantTooltipThundering",
	sepulchral: "T20.WeaponEnchantTooltipSepulchral",
	speed: "T20.WeaponEnchantTooltipSpeed",
	poisonous: "T20.WeaponEnchantTooltipPoisonous"
};
preLocalize("weaponEnchantments");
preLocalize("weaponEnchantmentsTooltips");

T20$1.armorEnchantments = {
	abascanth: "T20.EquipmentEnchantmentAbascanth",
	blessed: "T20.EquipmentEnchantmentBlessed",
	acrobatic: "T20.EquipmentEnchantmentAcrobatic",
	winged: "T20.EquipmentEnchantmentWinged",
	frightful: "T20.EquipmentEnchantmentFrightful",
	caustic: "T20.EquipmentEnchantmentCaustic",
	defending: "T20.EquipmentEnchantmentDefending",
	slick: "T20.EquipmentEnchantmentSlick",
	ghostly: "T20.EquipmentEnchantmentGhostly",
	ortification: "T20.EquipmentEnchantmenFortification",
	frost: "T20.EquipmentEnchantmentFrost",
	guardian: "T20.EquipmentEnchantmentGuardian",
	hypnotic: "T20.EquipmentEnchantmentHypnotic",
	illusory: "T20.EquipmentEnchantmentIllusory",
	incandescent: "T20.EquipmentEnchantmentIncandescent",
	invulnerable: "T20.EquipmentEnchantmentInvulnerable",
	opaque: "T20.EquipmentEnchantmentOpaque",
	protector: "T20.EquipmentEnchantmentProtector",
	reflecting: "T20.EquipmentEnchantmentReflecting",
	lightning: "T20.EquipmentEnchantmentLightning",
	blinding: "T20.EquipmentEnchantmentBlinding",
	shadow: "T20.EquipmentEnchantmentShadow",
	zealous: "T20.EquipmentEnchantmentZealous"
};
T20$1.armorEnchantmentsTooltips = {
	abascanth: "T20.EquipmentEnchantmentTooltipAbascanth",
	blessed: "T20.EquipmentEnchantmentTooltipBlessed",
	acrobatic: "T20.EquipmentEnchantmentTooltipAcrobatic",
	winged: "T20.EquipmentEnchantmentTooltipWinged",
	frightful: "T20.EquipmentEnchantmentTooltipFrightful",
	caustic: "T20.EquipmentEnchantmentTooltipCaustic",
	defending: "T20.EquipmentEnchantmentTooltipDefending",
	slick: "T20.EquipmentEnchantmentTooltipSlick",
	ghostly: "T20.EquipmentEnchantmentTooltipGhostly",
	ortification: "T20.EquipmentEnchantmenFTooltiportification",
	frost: "T20.EquipmentEnchantmentTooltipFrost",
	guardian: "T20.EquipmentEnchantmentTooltipGuardian",
	hypnotic: "T20.EquipmentEnchantmentTooltipHypnotic",
	illusory: "T20.EquipmentEnchantmentTooltipIllusory",
	incandescent: "T20.EquipmentEnchantmentTooltipIncandescent",
	invulnerable: "T20.EquipmentEnchantmentTooltipInvulnerable",
	opaque: "T20.EquipmentEnchantmentTooltipOpaque",
	protector: "T20.EquipmentEnchantmentTooltipProtector",
	reflecting: "T20.EquipmentEnchantmentTooltipReflecting",
	lightning: "T20.EquipmentEnchantmentTooltipLightning",
	blinding: "T20.EquipmentEnchantmentTooltipBlinding",
	shadow: "T20.EquipmentEnchantmentTooltipShadow",
	zealous: "T20.EquipmentEnchantmentTooltipZealous"
};
preLocalize("armorEnchantments");
preLocalize("armorEnchantmentsTooltips");

T20$1.shieldEnchantments = {
	animateed: "T20.EquipmentEnchantmentAnimateed",
	bashing: "T20.EquipmentEnchantmentBashing"
};
T20$1.shieldEnchantmentsTooltips = {
	animateed: "T20.EquipmentEnchantmentTooltipAnimateed",
	bashing: "T20.EquipmentEnchantmentTooltipBashing"
};
for (let [k, v] of Object.entries(T20$1.armorEnchantments)) {
	T20$1.shieldEnchantments[k] = v;
	T20$1.shieldEnchantmentsTooltips[k] = T20$1.armorEnchantmentsTooltips[k];
}
preLocalize("shieldEnchantments");
preLocalize("shieldEnchantmentsTooltips");

T20$1.passosDano = [
	["1", "1d2", "1d3", "1d4", "1d6", "1d8", "1d10", "1d12", "3d6", "4d6", "4d8", "4d10", "4d12"],
	["1", "1d2", "1d3", "1d4", "1d6", "1d8", "1d10", "2d6", "2d8", "3d8", "4d8", "4d10", "4d12"],
	["1", "1d2", "1d3", "1d4", "1d6", "1d8", "1d10", "2d6", "2d8", "2d10", "3d10", "4d10", "4d12"]
];
/* -------------------------------------------- */

// TODO checar se os campos abaixo têm utilidade
// NPC STATS
T20$1.tableSize = {
	size: ["min", "peq", "med", "gra", "eno", "col"],
	grid: [1.5, 1.5, 1.5, 3, 4.5, 9],
	stealth: [5, 2, 0, -2, -5, -10],
	maneuver: [-5, -2, 0, 2, 5, 10]
};

T20$1.tableMovement = {
	type: [
		"T20.NPCB_Bipedal",
		"T20.NPCB_Bipedal",
		"T20.NPCB_Bipedal",
		"T20.NPCB_Quadrupedal",
		"T20.NPCB_Quadrupedal",
		"T20.NPCB_Quadrupedal",
		"T20.NPCB_Flying",
		"T20.NPCB_Flying",
		"T20.NPCB_Flying",
		"T20.NPCB_Climber",
		"T20.NPCB_Burrower",
		"T20.NPCB_Swimmer"
	],
	size: ["Pequeno ou menor", "Médio", "Grande ou maior", "Pequeno ou maior", "Médio", "Grande", "", "", ""],
	size2: [["min", "peq"], ["med"], ["gra", "eno", "col"]],
	slow: [4.5, 6, 9, 6, 9, 12, 12, 15, 18, 4.5, 4.5, 9],
	normal: [6, 9, 12, 9, 12, 15, 15, 18, 24, 9, 6, 15],
	fast: [9, 12, 15, 12, 15, 18, 18, 24, 36, 12, 9, 24]
};

T20$1.tableAbilities = {
	cat: ["Incapaz", "Incompetente", "Ineficaz", "Mediano", "Notável", "Excelente", "Extraordinário", "Excepcional"],
	val: ["1", "2-5", "6-9", "10-13", "14-17", "18-21", "22-25", "26+"]
};

T20$1.RoleMods = {
	special: { good: [], bad: [] },
	lackey: { good: ["attack", "damage"], bad: ["hp"] },
	boss: { good: ["hp"], bad: [] }
};

T20$1.NDparams = {
	labels: [
		"",
		"T20.AbbreviationCR",
		"T20.Attack",
		"T20.Damage",
		"T20.Defense",
		"T20.HP",
		"T20.Skills",
		"T20.NPCB_SaveGood",
		"T20.NPCB_SaveNormal",
		"T20.NPCB_SaveBad",
		"T20.AbbreviationDC"
	],
	pat: ["i", "i", "i", "i", "i", "i", "v", "v", "v", "v", "v", "v", "c", "c", "c", "c", "c", "c", "l", "l", "l", "l"],
	cr: [
		"1/4",
		"1/2",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20"
	],
	attack: [7, 7, 9, 11, 13, 15, 18, 20, 22, 24, 26, 29, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55],
	attackqty: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
	damage: [
		"1d6+3",
		"1d6+3",
		"1d8+6",
		"1d10+10",
		"1d12+12",
		"2d6+14",
		"1d12+11",
		"2d6+15",
		"2d8+19",
		"2d10+20",
		"2d12+21",
		"3d6+26",
		"3d8+24",
		"3d10+26",
		"3d12+28",
		"4d6+38",
		"4d8+40",
		"4d10+42",
		"4d12+35",
		"4d12+40",
		"4d12+45",
		"4d12+50"
	],
	defense: [15, 15, 16, 18, 21, 24, 28, 31, 34, 37, 40, 43, 46, 48, 50, 52, 54, 56, 59, 61, 63, 65],
	hp: [10, 10, 20, 40, 70, 110, 150, 190, 230, 270, 310, 350, 400, 450, 550, 600, 650, 700, 750, 800, 850, 900],
	topskill: [4, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35],
	botskill: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	topsave: [3, 6, 11, 13, 15, 16, 16, 18, 20, 21, 21, 22, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34],
	midsave: [0, 3, 5, 7, 9, 10, 10, 12, 14, 15, 15, 16, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28],
	botsave: [-2, -1, 0, 2, 4, 5, 5, 7, 9, 10, 10, 11, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23],
	dc: [14, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
};

T20$1.NPCParams = (cr) => {
	let idx = T20$1.NDparams.cr.indexOf(cr.toString());

	if (idx < 0) {
		// ui.notifications.warn(game.i18n.format("T20.CRInvalid", {cr: cr}));
		// console.warn(game.i18n.format("T20.CRInvalid", {cr: cr}));
		idx = 0;
	}

	let param = Object.entries(T20$1.NDparams).reduce((acc, p) => {
		acc[p[0]] = p[1][idx];
		return acc;
	}, {});
	return param;
};

T20$1.CHALLENGELEVEL = CHALLENGELEVEL;
T20$1.AMEACAS = AMEACATYPES;

T20$1.FoeParams = (type, cr) => {
	let params = T20$1.AMEACAS[type]?.[cr] ?? T20$1.AMEACAS.solo["1"];
	return params;
};

/**
 * Override the default Initiative formula to customize special behaviors of the system.
 * See Combat._getInitiativeFormula for more detail.
 */
const _getInitiativeFormula = function (combatant) {
	const actor = combatant.actor;
	if (!actor) return "1d20";
	let init = actor.system.pericias.inic.value;

	let nd = 1;
	let mods = "";

	const parts = [`${nd}d20${mods}`, init];

	return parts.filter((p) => p !== null).join(" + ");
};

/**
 * When the Combat encounter updates - re-render open Actor sheets for combatants in the encounter.
 */
Hooks.on("updateCombat", (combat, data, options, userId) => {
	const updateTurn = "turn" in data || "round" in data;
	if (!updateTurn) return;
	for (let t of combat.turns) {
		t.actor;
		if (t.actor) t.actor.sheet.render(false);
	}
});

/**
 * When the Combat apply on turn effects
 */
Hooks.on("updateCombat", (combat, data, options, userId) => {
	const updateTurn = (combat.round > 0 && "turn" in data) || "round" in data;
	if (!updateTurn) return;
	const combatantId = combat.current.combatantId;
	let combatant = combat.combatants.get(combatantId);
	let curActor = combatant?.actor;
	if (!curActor || game.userId != userId) return;
	// Check effects from each combatant
	for (let c of combat.combatants) {
		let actor = c?.actor;
		// Effects Applied to CurrentCombatant Activated on Own Turn
		if (curActor.id === actor.id) {
			let eff = actor.appliedEffects.filter(function (ae) {
				return !ae.flags.tormenta20.onuse && effectChanges(ae).find((c) => ["sustentado", "dano"].includes(c.key));
			});
			let e;
			for (let ef of eff) {
				if (effectChanges(ef).find((c) => c.key === "sustentado")) {
					ChatMessage.create({ content: "Sustentar Magia" });
				}
				if ((e = effectChanges(ef).find((c) => c.key === "dano"))) {
					new Roll(e.value, {}, { flavor: `${ef.name}` }).toMessage();
				}
			}
		}
		// Effects Applied to Others Combatant Activated on CurrentCombatant Turn
		/** TODOS
		 * Overwrite Origin when create effect
		 * Regex to Match NonLinked Tokens
		 * Get Effect From Area Template
		 */
		else {
			let eff = actor.appliedEffects.filter(function (ae) {
				return (
					!ae.flags.tormenta20.onuse
					&& ae.origin?.match(curActor.id)
					&& effectChanges(ae).find((c) => c.key === "@dano")
				);
			});
			let e;
			for (let ef of eff) {
				if ((e = effectChanges(ef).find((c) => c.key === "@dano"))) {
					new Roll(e.value).toMessage();
				}
			}
		}
	}
});

function registerHandlebarsHelpers() {
	Handlebars.registerHelper("fieldBonuses", function (path, options) {
		const { root: sheet } = options.data;
		const actor = game.actors.get(sheet.actor._id) || fromUuidSync(sheet.uuid);
		if (!actor) return "";
		const rollData = actor.getRollData();
		const modFields = actor.modifiedFields;
		if (typeof path === "object") path = path.string;
		const pathTerms = path.split(".").filter((t) => !["system", "attributes", "tracos"].includes(t));
		const [type, key] = pathTerms;
		let listEffects = [];
		let listItems = "";

		switch (type) {
			case "atributos": {
				// ['base', 'racial', 'bonus', ...efeitos]
				const abl = actor.system.atributos[key];
				listEffects = [
					{ label: "Base", value: abl.base },
					abl.racial ? { label: "Racial", value: abl.racial } : false,
					abl.bonus ? { label: "Bônus Temporário", value: abl.bonus } : false,
					...(modFields[path] ?? [])
				];
				break;
			}
			case "pv":
			case "pm": {
				const { substituirCon: con = "con" } = actor.flags.tormenta20 ?? {};
				const level = actor.system.attributes.nivel.value;
				const { nivel, nivelImpar, nivelPar } = actor.system.attributes[type].bonus;
				const manualOverride = Number(nivel[0]) + Number(nivelImpar[0]) + Number(nivelPar[0]);
				const bonusNivel = modFields[`system.attributes.${type}.bonus.nivel`]?.map(({ label, mode, value }) => ({
					label,
					mode,
					value,
					multiplier: level
				}));
				const bonusNivelPar = modFields[`system.attributes.${type}.bonus.nivelPar`]?.map(({ label, mode, value }) => ({
					label,
					mode,
					value,
					multiplier: Math.floor(level / 2)
				}));
				const bonusNivelImpar = modFields[`system.attributes.${type}.bonus.nivelImpar`]?.map(
					({ label, mode, value }) => ({
						label,
						mode,
						value,
						multiplier: Math.ceil(level / 2)
					})
				);
				const classes = actor.items
					.filter((i) => i.type === "classe")
					.map((c) => {
						const initialHP = type === "pv" && c.system.inicial ? c.system.pvPorNivel * 3 : 0;
						const levelCount = Number(c.system.niveis);
						const porNivel = Number(c.system[`${type}PorNivel`]);
						return {
							label: `${c.name} ${levelCount}`,
							[type]: initialHP + levelCount * porNivel
						};
					});

				const atr = Object.entries(actor.system.atributos)
					.filter(([key]) => actor.system.attributes[type].atributos[key])
					.map(([key, data]) => [CONFIG.T20.atributos[key], data.value - data.bonus]);
				let atrPV = 0;
				const atributoSemBonus = this.system.atributos[con].value - this.system.atributos[con].bonus;
				if (type === "pv" && atributoSemBonus) {
					let levelSum = 0;
					for (const classe of actor.items.filter((i) => i.type === "classe")) {
						const c = classe.system;
						for (let i = 1; i < c.niveis + 1; i++) {
							levelSum++;
							let soma = 0;
							if (c.inicial && i === 1) soma += 4 * Number(c[`${type}PorNivel`]);
							else soma += Number(c[`${type}PorNivel`]);
							soma += bonusNivel?.reduce((sum, data) => sum + Number(data.value), 0) ?? 0;
							soma +=
								(levelSum % 2 === 0
									? bonusNivelPar?.reduce((sum, data) => sum + Number(data.value), 0)
									: bonusNivelImpar?.reduce((sum, data) => sum + Number(data.value), 0)) ?? 0;
							if (soma + atributoSemBonus < 1) atrPV += 1 - soma;
							else atrPV += atributoSemBonus;
						}
					}
					if (atrPV) atr.unshift([CONFIG.T20.atributos[con], atrPV]);
				}

				listEffects = [
					...classes.map((c) => ({ label: c.label, value: c[type] })),
					...atr.map(([label, value]) => ({ label, value })),
					...(bonusNivel ?? []),
					...(bonusNivelPar ?? []),
					...(bonusNivelImpar ?? []),
					...(modFields[`system.attributes.${type}.bonus.total`] ?? []),
					manualOverride ? { label: game.i18n.localize("T20.ManualOverride"), value: manualOverride } : false
				];
				break;
			}
			case "pericias": {
				// ['meionivel', 'treino', 'atributo', 'outros', 'condi', 'tamanho', ...efeitos]
				const skill = actor.system.pericias[key];
				// Math.floor(actor.system.attributes.nivel.value/2);
				const meioNivel = rollData.meionivel;
				const treino = rollData.treino;
				listEffects = [
					meioNivel ? { label: "Metade do Nível", value: meioNivel } : false,
					skill.treinado ? { label: "Treino", value: treino } : false,
					{
						label: CONFIG.T20.atributos[skill.atributo],
						value: rollData[skill.atributo]
					},
					skill.outros ? { label: "Outros", value: skill.outros } : false,
					skill.size ? { label: "Tamanho", value: rollData.tamanho } : false,
					skill.condi ? { label: "Condição", value: skill.condi } : false,
					skill.pda && rollData.pda ? { label: "Penalidade de Armadura", value: rollData.pda } : false,

					...(modFields["system.modificadores.pericias.geral"] ?? []),
					...(["luta", "pont"].includes(key) ? (modFields["system.modificadores.pericias.ataque"] ?? []) : []),
					...(["fort", "refl", "vont"].includes(key)
						? (modFields["system.modificadores.pericias.resistencia"] ?? [])
						: []),
					...(!["luta", "pont"].includes(key) ? (modFields["system.modificadores.pericias.semataque"] ?? []) : []),

					...(modFields[`system.modificadores.pericias.atr.${skill.atributo}`] ?? []),

					...(modFields[path] ?? [])
				];
				break;
			}
			case "defesa": {
				// ['base', 'atributo', 'outros', 'condi', 'armadura', 'escudo', 'acessorio' ...efeitos]
				const defesa = actor.system.attributes.defesa;
				const equipmentSlots = game.settings.get("tormenta20", "equipmentSlots");
				const armaduras = actor.itemTypes.equipamento
					.filter((i) => i.system.armadura.value && (equipmentSlots ? i.system.equipado2.slot : i.system.equipado))
					.map((i) => ({
						label: i.name,
						value: i.system.armadura.value,
						tipo: i.system.tipo
					}));
				const armaduraPesada = armaduras.some((i) => i.tipo === "pesada");
				const meioNivel = actor.type === "character" && game.settings.get("tormenta20", "progressiveDefense");
				listEffects = [
					{ label: "Base", value: defesa.base },
					meioNivel ? { label: "Metade do Nível", value: rollData.meionivel } : false,
					defesa.atributo && !armaduraPesada
						? {
								label: CONFIG.T20.atributos[defesa.atributo],
								value: rollData[defesa.atributo]
							}
						: false,
					...armaduras,
					defesa.outros ? { label: "Outros", value: defesa.outros } : false,
					// (rollData.armadura ? { label: "Armadura", value: rollData.armadura } : false),
					// (rollData.escudo ? { label: "Escudo", value: rollData.escudo } : false),
					...(modFields[path] ?? [])
				];
				break;
			}
			case "rd":
				// ['base', ...efeitos]
				break;

			case "seguranca": {
				if (actor.type === "bases") {
					listEffects = [
						{ label: "Base", value: actor.system.seguranca.base },
						...(modFields[`system.seguranca.bonus`] ?? [])
					];
				}
				break;
			}
		}
		let total = 0;
		for (const item of listEffects.filter(Boolean)) {
			listItems += `<li class="flexrow"><label>${item.label}:</label><span>`;
			let value = item.value;
			if ((typeof value === "string" && value.includes("@")) || item.multiplier) {
				value = new Roll(`${value} * ${item.multiplier ?? 1}`, rollData).evaluateSync().total;
			}
			const numValue = Number(value);
			switch (item.mode) {
				case 1:
					listItems += `x${numValue < 0 ? `(${numValue})` : numValue}`;
					total *= numValue;
					break;
				case 5:
					listItems = `<li class="flexrow"><label>${item.label}:</label><span>=${numValue}`;
					total = numValue;
					break;
				case 2:
				default:
					listItems += value >= 0 ? `+${numValue}` : numValue;
					total += numValue;
			}
			listItems += "</span></li>";
		}
		if (total >= 0) total = `+${total}`;
		let tooltip = `
		<ul class="fieldBonuses">
			${listItems}
			<hr>
			<li class="flexrow"><label>Total:</label><span>${total}</span></li>
		</ul>
		`;
		return tooltip;
	});

	Handlebars.registerHelper("toLowerCase", function (str) {
		return str.toLowerCase();
	});

	Handlebars.registerHelper("toJSONString", function (str) {
		return JSON.stringify(str);
	});

	Handlebars.registerHelper("conditionTip", function (context, condition, options) {
		let ret = "";
		for (let prop in context) {
			if (condition === prop) {
				ret = `${ret} ${context[prop].tooltip}`;
			}
		}
		return ret;
	});
	Handlebars.registerHelper("stripTags", function (str) {
		return str.replace(/<[^>]*>?/gm, "");
	});

	Handlebars.registerHelper("stripTagsInline", function (str) {
		return str.replace(/<(?!\/?[a|i](?=>|\s.*>))\/?.*?>/gm, "");
	});

	Handlebars.registerHelper("add", (a, b) => {
		return a + b;
	});

	Handlebars.registerHelper("divide", (a, b) => {
		return a / b;
	});

	Handlebars.registerHelper("multiply", (a, b) => {
		return a * b;
	});

	Handlebars.registerHelper("find", function (arr, key, value, flat = false) {
		if (flat) return !!arr.find((i) => foundry.utils.flattenObject(i)[key] === value);
		return !!arr.find((i) => i[key] === value);
	});

	Handlebars.registerHelper("ift", function (v, rtrue, rfalse) {
		return v ? rtrue : rfalse;
	});

	Handlebars.registerHelper("includes", function (v, ...choices) {
		choices.pop();
		return choices.includes(v);
	});

	/**
	 * @param {object} items
	 * @returns {Handlebars.SafeString}
	 */
	Handlebars.registerHelper("t20-classes", function (items) {
		const classes = items
			.filter((i) => i.type === "classe")
			.sort((a, b) => (b.system.inicial || 0) - (a.system.inicial || 0))
			.map(function (i) {
				return {
					name: i.name,
					nivel: i.system.niveis,
					toString: function () {
						return `${this.name} ${this.nivel}`;
					}
				};
			});
		return classes.join(", ");
	});

	/**
	 * @param {string} string
	 * @returns {Handlebars.SafeString}
	 */
	Handlebars.registerHelper("t20-rollFlavor", function (label) {
		return new Handlebars.SafeString(CONFIG.T20.damageTypes[label] ?? T20.healingTypes[label] ?? label);
	});

	/**
	 * @param {Item} item
	 * @returns {Handlebars.SafeString}
	 */
	Handlebars.registerHelper("t20-itemDesc", function (item) {
		const desc = [];
		let separator = ", ";
		if (item.type === "arma") {
			const { toHit, dano, critico } = item.labels;
			desc.push(toHit, dano, critico);
		} else if (item.type === "equipamento") {
			const { penalidade, value } = item.system.armadura;
			separator = " / ";
			if (penalidade || value) {
				desc.push(`<i class="fa-solid fa-shield"></i> ${value >= 0 ? `+${value}` : value}`);
				desc.push(`<i class="fa-solid fa-person-hiking"></i> ${penalidade}`);
			}
		} else if (item.type === "consumivel") {
			desc.push(`${game.i18n.localize("T20.ItemQuantity")}: ${item.system.qtd}`);
		} else if (item.type === "magia" || item.type === "poder") {
			if (item.type === "magia") {
				desc.push(`${item.system.circulo}º ${game.i18n.localize("T20.SpellCircle")}`);
			}
			const { ativacao, custoPM } = item.labels;
			const sustentada = item.system.duracao.units === "sust";
			if (ativacao) {
				if (sustentada) {
					desc.push(`${ativacao} (${game.i18n.localize("T20.TimeSust")})`);
				} else desc.push(ativacao);
			} else if (sustentada) desc.push(game.i18n.localize("T20.TimeSust"));
			if (custoPM) desc.push(custoPM);
		}
		return new Handlebars.SafeString(desc.filterJoin(separator));
	});

	Handlebars.registerHelper("collapsible", function (states, id) {
		const currentlyOpen = Boolean(states[id]);
		return currentlyOpen ? "open" : "";
	});

	Handlebars.registerHelper("t20-itemLabels", function (item, options) {
		const { start = "", end = "" } = options.hash;
		const desc = [];
		let separator = ", ";
		const { ativacao, custoPM, toHit, dano, critico, tipo, subtipo } = item.labels;
		if (item.type === "arma") {
			// Filtra armas sem dano, como a Rede
			if (!dano) desc.push(toHit);
			else desc.push(`${toHit} (${dano}, ${critico})`);
		} else if (item.type === "magia") {
			desc.push(ativacao);
		} else {
			desc.push(ativacao, custoPM);
		}
		const str = desc.filterJoin(separator);
		if (str) return new Handlebars.SafeString(`${start}${str}${end}`.trim());
		return "";
	});
}

const { ApplicationV2: ApplicationV2$2, HandlebarsApplicationMixin: HandlebarsApplicationMixin$2 } = foundry.applications.api;
const { BooleanField, NumberField, StringField } = foundry.data.fields;

/* TODO REFACTOR THIS */
class Tormenta20BaseSettings extends HandlebarsApplicationMixin$2(ApplicationV2$2) {
	/** @override */
	static DEFAULT_OPTIONS = {
		tag: "form",
		position: {
			width: 500
		},
		form: {
			closeOnSubmit: true,
			handler: Tormenta20BaseSettings.#onCommitChanges
		},
		window: {
			title: "Configurações",
			contentClasses: ["standard-form"]
		}
	};

	/** @override */
	static PARTS = {
		config: {
			template: "systems/tormenta20/templates/apps/base-config.hbs"
		},
		footer: {
			template: "templates/generic/form-footer.hbs"
		}
	};

	/* -------------------------------------------- */
	/*  Rendering                                   */
	/* -------------------------------------------- */

	/** @inheritDoc */
	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		context.CONFIG = CONFIG.T20;
		context.inputs = { ...foundry.applications.fields };
		return context;
	}

	/** @inheritDoc */
	async _preparePartContext(partId, context, options) {
		context = await super._preparePartContext(partId, context, options);
		context.fields = [];
		context.buttons = [{ type: "submit", icon: "fas fa-save", label: "Save Changes" }];
		return context;
	}

	/* -------------------------------------------- */

	/**
	 * Create the field data for a specific setting.
	 * @param {string} name  Setting key within the tormenta20 namespace.
	 * @returns {object}
	 */
	createSettingField(name, config = {}) {
		const setting = game.settings.settings.get(`tormenta20.${name}`);
		if (!setting) throw new Error(`Setting \`tormenta20.${name}\` not registered.`);
		const Field = {
			[Boolean]: BooleanField,
			[Number]: NumberField,
			[String]: StringField
		}[setting.type];
		if (!Field) throw new Error("Automatic field generation only available for Boolean, Number, or String types");
		const data = {
			field: new Field({
				label: game.i18n.localize(setting.name),
				hint: game.i18n.localize(setting.hint)
			}),
			name,
			value: game.settings.get("tormenta20", name),
			...config
		};
		if (setting.choices)
			data.options = Object.entries(setting.choices).map(([value, label]) => ({
				value,
				label: game.i18n.localize(label)
			}));
		return data;
	}

	static async #onCommitChanges(event, form, formData) {
		let requiresClientReload = false;
		let requiresWorldReload = false;
		for (const [key, value] of Object.entries(foundry.utils.expandObject(formData.object))) {
			const setting = game.settings.settings.get(`tormenta20.${key}`);
			const current = game.settings.get("tormenta20", key, { document: true });
			const prior = current?._source?.value ?? current;
			const updated = await game.settings.set("tormenta20", key, value, {
				document: true
			});
			if (prior === (updated?._source?.value ?? updated)) continue;
			requiresClientReload ||= setting.scope !== CONST.SETTING_SCOPES.WORLD && setting.requiresReload;
			requiresWorldReload ||= setting.scope === CONST.SETTING_SCOPES.WORLD && setting.requiresReload;
		}
		if (requiresClientReload || requiresWorldReload) {
			return SettingsConfig.reloadConfirm({ world: requiresWorldReload });
		}
	}
}

class Tormenta20ActorSheetSettings extends Tormenta20BaseSettings {
	/** @override */
	static DEFAULT_OPTIONS = {
		id: "t20-actor-sheet-config",
		window: {
			title: "T20.SettingSheetSettings"
		}
	};

	/** @override */
	static PARTS = {
		config: {
			template: "systems/tormenta20/templates/apps/base-config.hbs"
		},
		weight: {
			template: "systems/tormenta20/templates/apps/base-config.hbs"
		},
		footer: {
			template: "templates/generic/form-footer.hbs"
		}
	};

	/** @inheritDoc */
	async _preparePartContext(partId, context, options) {
		context = await super._preparePartContext(partId, context, options);
		switch (partId) {
			case "config":
				context.fields = [
					this.createSettingField("disableExperience"),
					this.createSettingField("enableLanguages"),
					this.createSettingField("disableJournal")
				];
				break;
			case "weight":
				context.fields = [this.createSettingField("carryWeight"), this.createSettingField("currencyWeight")];
				context.legend = game.i18n.localize("T20.Encumbrance");
				break;
		}
		return context;
	}
}

class Tormenta20OptionalRulesSettings extends Tormenta20BaseSettings {
	/** @override */
	static DEFAULT_OPTIONS = {
		id: "t20-optional-rules-config",
		window: {
			title: "T20.SettingOptionalRulesSettings"
		}
	};

	/* -------------------------------------------- */
	/*  Rendering                                   */
	/* -------------------------------------------- */

	/** @inheritDoc */
	async _preparePartContext(partId, context, options) {
		context = await super._preparePartContext(partId, context, options);
		context.fields = [
			this.createSettingField("lightFinesseWeapons"),
			this.createSettingField("progressiveDefense"),
			this.createSettingField("lancinatingVersion"),
			this.createSettingField("openRaces")
		];
		return context;
	}
}

/* Classe para configurar opções do sistema*/
const SystemSettings = function () {
	/**
	 * Track the system version upon which point a migration was last applied
	 */
	game.settings.register("tormenta20", "systemMigrationVersion", {
		name: "System Migration Version",
		scope: "world",
		config: false,
		type: String,
		default: ""
	});

	game.settings.registerMenu("tormenta20", "sheetSettings", {
		name: "T20.SettingSheetSettings",
		label: "T20.SettingSheetSettings",
		icon: "fas fa-scroll",
		type: Tormenta20ActorSheetSettings,
		restricted: true
	});

	game.settings.registerMenu("tormenta20", "optionalRulesSettings", {
		name: "T20.SettingOptionalRulesSettings",
		label: "T20.SettingOptionalRulesSettings",
		icon: "fas fa-cog",
		type: Tormenta20OptionalRulesSettings,
		restricted: true
	});

	// game.settings.registerMenu('tormenta20', 'resourceSettings', {
	// 	name: "Configurar Recursos",
	// 	label: "Configurar Recursos",
	// 	icon: 'fas bars-progress',
	// 	type: Tormenta20ResourceColorsSettings,
	// 	restricted: true
	// });

	/**
	 * Option to define mechanics for Campaign Settings
	 */
	game.settings.register("tormenta20", "gameSystem", {
		name: "T20.SettingsCampaignSettingRule",
		hint: "T20.SettingsCampaignSettingHint",
		scope: "world",
		config: true,
		default: "Tormenta20",
		type: String,
		choices: {
			Tormenta20: "Tormenta20",
			Skyfall: "Skyfall RPG"
		},
		requiresReload: true
	});

	/**
	 * Option to define mechanics for Campaign Settings
	 */
	game.settings.register("tormenta20", "limitedSheet", {
		name: "T20.SettingsLimitedSheet",
		hint: "T20.SettingsLimitedSheetHint",
		scope: "world",
		config: true,
		default: "limited",
		type: String,
		choices: {
			default: "Padrão",
			limited: "Limitada"
		}
	});

	/**
	 * Option to disable XP bar for session-based or story-based advancement.
	 */
	game.settings.register("tormenta20", "disableExperience", {
		name: "T20.SettingDisableExperience",
		hint: "T20.SettingDisableExperienceHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
		requiresReload: true
	});

	/**
	 * Register languages rule (Homebrew)
	 */
	game.settings.register("tormenta20", "enableLanguages", {
		name: "T20.SettingEnableLanguages",
		hint: "T20.SettingEnableLanguagesHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});

	/**
	 * Option to disable sheet journals (TODO REMOVE?)
	 */
	game.settings.register("tormenta20", "disableJournal", {
		name: "T20.SettingDisableJournal",
		hint: "T20.SettingDisableJournalHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});

	/**
	 * Option to automatic spend mana on ability use
	 */
	game.settings.register("tormenta20", "automaticManaSpend", {
		name: "T20.SettingAutomaticManaSpend",
		hint: "T20.SettingAutomaticManaSpendHint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	/**
	 * Option to automatic spend mana on ability use
	 */
	game.settings.register("tormenta20", "foeSheetCompactSpell", {
		name: "T20.SettingFoeSheetCompactSpell",
		hint: "T20.SettingFoeSheetCompactSpellHint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	/**
	 * Option to automatically collapse Item Card descriptions
	 */
	game.settings.register("tormenta20", "autoCollapseItemCards", {
		name: "T20.SettingCollapseItemDescRule",
		hint: "T20.SettingCollapseItemDescHint",
		scope: "client",
		config: true,
		default: true,
		type: Boolean,
		requiresReload: true
	});

	/**
	 * Option to show creatureDC to all players.
	 */
	game.settings.register("tormenta20", "showFoeDc", {
		name: "T20.ShowDC",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		requiresReload: false
	});

	/**
	 * Option to show apply buttons inside chat
	 */
	game.settings.register("tormenta20", "showStatusCards", {
		name: "T20.SettingStatusCardRule",
		hint: "T20.SettingStatusCardHint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("tormenta20", "showDamageCards", {
		name: "T20.SettingDamageCardRule",
		hint: "T20.SettingDamageCardRuleHint",
		scope: "world",
		config: true,
		default: "none",
		type: String,
		choices: {
			none: "T20.None",
			players: "T20.SettingDamageCardPlayers",
			npcs: "T20.SettingDamageCardNPCS"
		}
	});

	/**
	 * Option to item slots instead of boolean equipped status.
	 */
	game.settings.register("tormenta20", "equipmentSlots", {
		name: "T20.SettingEquipmentSlots",
		hint: "T20.SettingEquipmentSlotsHint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		requiresReload: true
	});

	/**
	 * Option to show Usage Effects Menu on Shift Use or Always
	 */
	game.settings.register("tormenta20", "UsageConfig", {
		name: "T20.SettingUsageConfig",
		hint: "T20.SettingUsageConfigHint",
		scope: "client",
		config: true,
		default: "default",
		type: String,
		choices: {
			default: "T20.SettingUsageConfigDefault",
			shift: "T20.SettingUsageConfigShift"
		}
	});

	game.settings.register("tormenta20", "invertUsageConfig", {
		name: "T20.SettingInvertUsageConfig",
		hint: "T20.SettingInvertUsageConfigHint",
		scope: "client",
		config: true,
		default: false,
		type: Boolean
	});

	/**
	 * Define how Lancinante effect is applyed
	 */
	game.settings.register("tormenta20", "lancinatingVersion", {
		name: "T20.SettingLancinatingVersion",
		hint: "T20.SettingLancinatingVersionHint",
		scope: "world",
		config: false,
		default: "default",
		type: String,
		choices: {
			default: "T20.SettingLancinatingDefault",
			revised: "T20.SettingLancinatingRevised"
		}
	});

	game.settings.register("tormenta20", "progressiveDefense", {
		name: "T20.SettingProgressiveDefense",
		hint: "T20.SettingProgressiveDefenseHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
		requiresReload: true
	});

	game.settings.register("tormenta20", "lightFinesseWeapons", {
		name: "T20.SettingLightFinesseWeapons",
		hint: "T20.SettingLightFinesseWeaponsHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});

	game.settings.register("tormenta20", "openRaces", {
		name: "T20.SettingOpenRaces",
		hint: "T20.SettingOpenRacesHint",
		scope: "world",
		config: false,
		default: false,
		type: Boolean
	});

	game.settings.register("tormenta20", "carryWeight", {
		name: "T20.SettingCarryWeight",
		hint: "T20.SettingCarryWeightHint",
		scope: "world",
		config: false,
		default: true,
		type: Boolean
	});

	game.settings.register("tormenta20", "currencyWeight", {
		name: "T20.SettingCurrencyWeight",
		hint: "T20.SettingCurrencyWeightHint",
		scope: "world",
		config: false,
		default: true,
		type: Boolean
	});

	game.settings.register("tormenta20", "overrideMeasuredTemplates", {
		name: "T20.SettingsOverrideMeasuredTemplates",
		hint: "T20.SettingsOverrideMeasuredTemplatesHint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		requiresReload: true
	});

	game.settings.register("tormenta20", "drawRanges", {
		scope: "user",
		config: false,
		default: false,
		type: Boolean
	});
};

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
const preloadHandlebarsTemplates = async function () {
	const templatePaths = [
		// Shared Partials
		"systems/tormenta20/templates/partials/nav-bar.hbs",
		"systems/tormenta20/templates/partials/active-effects.hbs",
		"systems/tormenta20/templates/partials/fieldlist.hbs",

		// Actor Sheet Partials
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-base.hbs",
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-bases.hbs",
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-tabbed.hbs",
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-npc.hbs",
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-simple.hbs",
		"systems/tormenta20/templates/actor/parts/headers/sheet-header-summary.hbs",
		"systems/tormenta20/templates/actor/parts/statblock.hbs",
		"systems/tormenta20/templates/actor/parts/abilities.hbs",
		"systems/tormenta20/templates/actor/parts/defense.hbs",
		"systems/tormenta20/templates/actor/parts/resources.hbs",
		"systems/tormenta20/templates/actor/parts/resources-extra.hbs",
		"systems/tormenta20/templates/actor/parts/traits.hbs",
		"systems/tormenta20/templates/actor/parts/currency.hbs",
		"systems/tormenta20/templates/actor/parts/encumbrance.hbs",
		"systems/tormenta20/templates/actor/parts/journal.hbs",
		"systems/tormenta20/templates/actor/parts/modifiers.hbs",
		"systems/tormenta20/templates/actor/parts/bases-characteristics.hbs",
		"systems/tormenta20/templates/actor/parts/bases-rooms.hbs",
		// Lists
		"systems/tormenta20/templates/actor/parts/lists/list-general.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-inventory.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-weapon.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-equipment.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-consumable.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-loot.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-favorites.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-powers.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-powers-tabbed.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-spells.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-skills.hbs",
		"systems/tormenta20/templates/actor/parts/lists/list-header-element.hbs",
		"systems/tormenta20/templates/actor/parts/lists/actor-item-controls.hbs",

		// Actor Builder Partials

		// Item Sheet Partials
		"systems/tormenta20/templates/item/parts/item-header.hbs",
		"systems/tormenta20/templates/item/parts/item-rolls.hbs",
		"systems/tormenta20/templates/item/parts/item-ativacao.hbs",
		"systems/tormenta20/templates/item/parts/item-enhancements.hbs",
		"systems/tormenta20/templates/item/parts/item-description.hbs",
		"systems/tormenta20/templates/item/parts/item-modificacoes.hbs",
		"systems/tormenta20/templates/item/parts/item-resistencia.hbs",
		"systems/tormenta20/templates/item/parts/item-progression.hbs",
		"systems/tormenta20/templates/item/parts/item-grants.hbs",

		// Rolls
		"systems/tormenta20/templates/chat/roll-breakdown.hbs",

		// Active Effects
		"systems/tormenta20/templates/apps/active-effect/details.hbs",
		"systems/tormenta20/templates/apps/active-effect/duration.hbs",

		// Development Partials
		"systems/tormenta20/templates/actor/parts/teste.hbs"
	];
	foundry.applications.handlebars.loadTemplates(templatePaths);

	// TODO: REMOVE THE FOLLOWING
	const paths = {};
	for (const path of templatePaths) {
		const htmlPath = path.replace(".hbs", ".html");
		const baseName = path.split("/").pop().replace(".hbs", "");

		paths[htmlPath] = path;
		paths[`tormenta20.${baseName}`] = path;
	}
	return foundry.applications.handlebars.loadTemplates(paths);
};

/**
 * A class used to properly animate html `details` tags
 * @see https://css-tricks.com/how-to-animate-the-details-element/
 */
class Accordion {
	el;

	summary;

	content;

	isExpanding;

	isClosing;

	animation;

	options;

	#defaultOptions = {
		duration: 400,
		easing: "ease-in-out"
	};

	constructor(el, contentSelector = ".content", options) {
		this.options = { ...this.#defaultOptions, ...options };
		// Store the <details> element
		this.el = el;
		// Store the <summary> element
		this.summary = el.querySelector("summary");
		// Store the <div class="content"> element
		this.content = el.querySelector(contentSelector);

		// Store the animation object (so we can cancel it if needed)
		this.animation = null;
		// Store if the element is closing
		this.isClosing = false;
		// Store if the element is expanding
		this.isExpanding = false;
		// Detect user clicks on the summary element
		this.summary?.addEventListener("click", this.onClick.bind(this));
	}

	onClick(e) {
		// Stop default behavior from the browser
		e.preventDefault();

		// Stop early if we clicked on a button inside summary
		if (e.target instanceof HTMLButtonElement) return;
		if (e.target.parentElement instanceof HTMLButtonElement) {
			return;
		}

		// Add an overflow on the <details> to avoid content overflowing
		this.el.style.overflow = "hidden";
		// Check if the element is being closed or is already closed
		if (this.isClosing || !this.el.open) {
			this.open();
			this.options.onOpen?.(this.el);
			// Check if the element is being opened or is already open
		} else if (this.isExpanding || this.el.open) {
			this.shrink();
			this.options.onClose?.(this.el);
		}
	}

	shrink() {
		// Set the element as "being closed"
		this.isClosing = true;

		// Store the current height of the element
		const startHeight = `${this.el.offsetHeight}px`;
		// Calculate the height of the summary
		const endHeight = `${this.summary?.offsetHeight ?? 0}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the startHeight to endHeight
				height: [startHeight, endHeight]
			},
			{
				duration: this.options.duration,
				easing: this.options.easing
			}
		);

		// When the animation is complete, call onAnimationFinish()
		this.animation.onfinish = () => this.onAnimationFinish(false);
		// If the animation is cancelled, isClosing variable is set to false
		this.animation.oncancel = () => (this.isClosing = false);
	}

	open() {
		// Apply a fixed height on the element
		this.el.style.height = `${this.el.offsetHeight}px`;
		// Force the [open] attribute on the details element
		this.el.open = true;
		// Wait for the next frame to call the expand function
		window.requestAnimationFrame(() => this.expand());
	}

	expand() {
		// Set the element as "being expanding"
		this.isExpanding = true;
		// Get the current fixed height of the element
		const startHeight = `${this.el.offsetHeight}px`;
		// Calculate the open height of the element (summary height + content height)
		const endHeight = `${(this.summary?.offsetHeight ?? 0) + (this.content?.offsetHeight ?? 0)}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the startHeight to endHeight
				height: [startHeight, endHeight]
			},
			{
				duration: this.options.duration,
				easing: this.options.easing
			}
		);
		// When the animation is complete, call onAnimationFinish()
		this.animation.onfinish = () => this.onAnimationFinish(true);
		// If the animation is cancelled, isExpanding variable is set to false
		this.animation.oncancel = () => (this.isExpanding = false);
	}

	onAnimationFinish(open) {
		// Set the open attribute based on the parameter
		this.el.open = open;
		// Clear the stored animation
		this.animation = null;
		// Reset isClosing & isExpanding
		this.isClosing = false;
		this.isExpanding = false;
		// Remove the overflow hidden and the fixed height
		this.el.style.height = this.el.style.overflow = "";
	}
}

const { Coin, DiceTerm: DiceTerm$1, Die: Die$1, FunctionTerm, NumericTerm: NumericTerm$1, OperatorTerm: OperatorTerm$1, ParentheticalTerm, RollTerm } =
	foundry.dice.terms;

async function d20Roll({
	parts = [],
	data = {},
	event = {},
	advantage = null,
	disadvantage = null,
	critical = 20,
	fumble = 1,
	targetValue = null,
	...options
} = {}) {
	parts = parts.concat(["@bonus"]);
	let adv = 0;
	if (options.rollKeep === "khd20" || event.altKey || parts[0].includes("kh")) adv = 1;
	else if (options.rollKeep === "kld20" || event.ctrlKey || parts[0].includes("kl")) adv = -1;

	// Define the inner roll function
	const _roll = async (parts, adv, form) => {
		// Determine the d20 roll and modifiers
		let nd = 1;
		let mods = "";

		// Handle advantage
		if (adv === 1) {
			nd = 2;
			mods += "kh";
		}
		// Handle disadvantage
		else if (adv === -1) {
			nd = 2;
			mods += "kl";
		}

		// Prepend the d20 roll
		if (parts[0].match(/d20/)) {
			let formula = `${nd}d20${mods}`;
			parts[0] = formula;
		}

		simplifyRollFormula(
			parts.map((p) => p.toString().replace(/^\+|\s/g, "")).filterJoin("+"),
			data
		);

		// Execute the roll
		let roll = new Roll(parts.join("+"), data);

		try {
			await roll.roll();
		} catch (err) {
			console.error(err);
			ui.notifications.error(`Avaliação de rolagem falhou: ${err.message}`);
			return null;
		}
		// Flag d20 options for any 20-sided dice in the roll
		for (let d of roll.dice) {
			if (d.faces === 20) {
				d.options.critical = critical;
				d.options.fumble = fumble;
				if (targetValue) d.options.target = targetValue;
			}
		}
		roll.options.type = "attack";
		// roll.options.title = options.title;
		return roll;
	};
	// Create the Roll instance
	const roll = await _roll(parts, adv);
	return roll;
}

async function damageRoll({
	parts,
	actor,
	data = {},
	event = {},
	critical = false,
	lancinante = false,
	criticalMultiplier = 2,
	minmax = false,
	rd = 0
}) {
	parts = parts.concat(["@bonus"]);

	// Define inner roll function
	const _roll = async function (parts, crit) {
		if (!data.bonus) parts.pop();
		parts = parts
			.flatMap(([formula, key]) =>
				String(formula)
					.split("+")
					.map((part) => [part.trim(), key])
			)
			.map(([formula, key]) => {
				const label = formula && key ? `${formula}[${key}]` : formula;
				return label.toString().replace(/^\+|\s/g, "");
			})
			.filterJoin("+");
		// Create the damage roll
		// const rollFormula = simplifyRollFormula(parts, data, { preserveFlavor: true });
		const roll = new Roll(parts, data, { type: "damage", rd });

		// Modify the damage formula for critical hits
		if (crit === true) {
			if (roll.terms[0] instanceof Die$1) {
				roll.terms[0].alter(criticalMultiplier, 0);
				roll._formula = roll.formula;
			}
			for (const term of roll.terms) {
				if (term instanceof Die$1 && term.options.flavor === "danoMultiplicavel") {
					term.alter(criticalMultiplier, 0);
					term.options.flavor = "";
					roll._formula = roll.formula;
				}
			}
			if (lancinante) {
				switch (game.settings.get("tormenta20", "lancinatingVersion")) {
					case "revised":
						roll.terms.forEach(function (term, index) {
							if (term instanceof NumericTerm$1 && term.options.flavor === "danoCritico") {
								roll.terms[index].number = term.number * criticalMultiplier;
								roll.terms[index].options.flavor = "";
							}
						});
						break;
					default:
						roll.terms.forEach(function (term, index) {
							if (term instanceof NumericTerm$1) {
								roll.terms[index].number = term.number * criticalMultiplier;
							}
						});
						break;
				}
				roll._formula = roll.formula;
			}
		} else {
			let _fterms = [];
			roll.terms.forEach((term, i) => {
				if (term.options.flavor === "danoCritico") {
					if (_fterms[_fterms.length - 1] instanceof foundry.dice.terms.OperatorTerm) {
						_fterms.pop();
					}
				} else {
					_fterms.push(term);
				}
			});
			roll.terms = _fterms;
			roll.resetFormula();
		}
		// minMax
		const min = !!(minmax && minmax === "min");
		const max = !!(minmax && minmax === "max");
		// Execute the roll
		try {
			let l = await roll.evaluate({ maximize: max, minimize: min });
			l._formula = l._formula.replaceAll(/(\[\w*\])/g, "");
			return l;
		} catch (err) {
			console.error(err);
			ui.notifications.error(`Avaliação de rolagem falhou: ${err.message}`);
			return null;
		}
	};

	const roll = _roll(parts, critical);
	// Return roll
	return roll;
}

/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula
 *
 * @param {string} formula                 The original Roll formula
 * @param {Object} data                    Actor or item data against which to parse the roll
 * @param {Object} options                 Formatting options
 * @param {boolean} options.constantFirst   Puts the constants before the dice terms in the resulting formula
 *
 * @return {string}                        The resulting simplified formula
 */
function simplifyRollFormula2(formula, data, { constantFirst = false } = {}) {
	const roll = new Roll(formula, data); // Parses the formula and replaces any @properties
	const terms = roll.terms;
	// Some terms are "too complicated" for this algorithm to simplify
	// In this case, the original formula is returned.
	if (terms.some(_isUnsupportedTerm)) return roll.formula;

	const rollableTerms = []; // Terms that are non-constant, and their associated operators
	const constantTerms = []; // Terms that are constant, and their associated operators
	let operators = []; // Temporary storage for operators before they are moved to one of the above

	for (let term of terms) {
		// For each term
		if (term instanceof OperatorTerm$1)
			operators.push(term); // If the term is an addition/subtraction operator, push the term into the operators array
		else {
			// Otherwise the term is not an operator
			if (term instanceof DiceTerm$1) {
				// If the term is something rollable
				rollableTerms.push(...operators); // Place all the operators into the rollableTerms array
				rollableTerms.push(term); // Then place this rollable term into it as well
			} //
			else if (term instanceof ParentheticalTerm) {
				const numTerm = new NumericTerm$1({
					number: Roll.safeEval(term.term)
				});
				constantTerms.push(...operators);
				constantTerms.push(numTerm);
			} else {
				// Otherwise, this must be a constant
				constantTerms.push(...operators); // Place the operators into the constantTerms array
				constantTerms.push(term); // Then also add this constant term to that array.
			} //
			operators = []; // Finally, the operators have now all been assigend to one of the arrays, so empty this before the next iteration.
		}
	}

	const constantFormula = Roll.getFormula(constantTerms) || 0; // Cleans up the constant terms and produces a new formula string
	const rollableFormula = Roll.getFormula(rollableTerms); // Cleans up the non-constant terms and produces a new formula string
	const constantPart = Roll.safeEval(constantFormula); // Mathematically evaluate the constant formula to produce a single constant term
	const parts = constantFirst // Order the rollable and constant terms, either constant first or second depending on the optional argumen
		? [constantPart, rollableFormula]
		: [rollableFormula, constantPart];

	// Join the parts with a + sign, pass them to `Roll` once again to clean up the formula
	return new Roll(parts.filterJoin(" + ")).formula;
}

/* -------------------------------------------- */

/**
 * Only some terms are supported by simplifyRollFormula, this method returns true when the term is not supported.
 * @param {*} term - A single Dice term to check support on
 * @return {Boolean} True when unsupported, false if supported
 */
function _isUnsupportedTerm(term) {
	const diceTerm = term instanceof DiceTerm$1;
	const operator = term instanceof OperatorTerm$1 && ["+", "-", "*"].includes(term.operator);
	const number = term instanceof NumericTerm$1;
	const parents = term instanceof ParentheticalTerm && Roll.safeEval(term.term);

	return !(diceTerm || operator || number || parents);
}

/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula.
 *	SOURCE dnd5e
 * @param {string} formula                          The original roll formula.
 * @param {object} [options]                        Formatting options.
 * @param {boolean} [options.preserveFlavor=false]  Preserve flavor text in the simplified formula.
 *
 * @returns {string}  The resulting simplified formula.
 */
function simplifyRollFormula(formula, data = {}, { preserveFlavor = false, deterministic = false } = {}) {
	if (!formula) return "";
	// Create a new roll and verify that the formula is valid before attempting simplification.
	let roll;
	try {
		roll = new Roll(formula, data);
	} catch (err) {
		console.warn(`Unable to simplify formula '${formula}': ${err}`);
	}
	Roll.validate(roll.formula);

	// Optionally strip flavor annotations.
	if (!preserveFlavor) roll.terms = Roll.parse(roll.formula.replace(RollTerm.FLAVOR_REGEXP, ""));

	// Perform arithmetic simplification on the existing roll terms.
	roll.terms = _simplifyOperatorTerms(roll.terms);

	if (/[*/]/.test(roll.formula)) {
		if (roll.isDeterministic && !/d\(/.test(roll.formula) && (!/\[/.test(roll.formula) || !preserveFlavor)) {
			return String(new Roll(roll.formula).evaluateSync().total);
		}
		return roll.constructor.getFormula(roll.terms);
	}

	// Flatten the roll formula and eliminate string terms.
	roll.terms = _expandParentheticalTerms(roll.terms);
	roll.terms = Roll.simplifyTerms(roll.terms);

	// Group terms by type and perform simplifications on various types of roll term.
	let { poolTerms, diceTerms, mathTerms, numericTerms } = _groupTermsByType(roll.terms);
	numericTerms = _simplifyNumericTerms(numericTerms ?? []);
	diceTerms = _simplifyDiceTerms(diceTerms ?? []);

	// Recombine the terms into a single term array and remove an initial + operator if present.
	const simplifiedTerms = [diceTerms, poolTerms, mathTerms, numericTerms].flat().filter(Boolean);
	if (simplifiedTerms[0]?.operator === "+") simplifiedTerms.shift();
	return roll.constructor.getFormula(simplifiedTerms);
}

/* -------------------------------------------- */

/**
 * A helper function to perform arithmetic simplification and remove redundant operator terms.
 * @param {RollTerm[]} terms  An array of roll terms.
 * @returns {RollTerm[]}      A new array of roll terms with redundant operators removed.
 */
function _simplifyOperatorTerms(terms) {
	return terms.reduce((acc, term) => {
		const prior = acc[acc.length - 1];
		const ops = new Set([prior?.operator, term.operator]);

		// If one of the terms is not an operator, add the current term as is.
		if (ops.has(undefined)) acc.push(term);
		// Replace consecutive "+ -" operators with a "-" operator.
		else if (ops.has("+") && ops.has("-")) acc.splice(-1, 1, new OperatorTerm$1({ operator: "-" }));
		// Replace double "-" operators with a "+" operator.
		else if (ops.has("-") && ops.size === 1) acc.splice(-1, 1, new OperatorTerm$1({ operator: "+" }));
		// Don't include "+" operators that directly follow "+", "*", or "/". Otherwise, add the term as is.
		else if (!ops.has("+")) acc.push(term);

		return acc;
	}, []);
}

/* -------------------------------------------- */

/**
 * A helper function for combining unannotated numeric terms in an array into a single numeric term.
 * @param {object[]} terms  An array of roll terms.
 * @returns {object[]}      A new array of terms with unannotated numeric terms combined into one.
 */
function _simplifyNumericTerms(terms) {
	const simplified = [];
	const { annotated, unannotated } = _separateAnnotatedTerms(terms);

	// Combine the unannotated numerical bonuses into a single new NumericTerm.
	if (unannotated.length) {
		const staticBonus = Roll.safeEval(Roll.getFormula(unannotated));
		if (staticBonus === 0) return [...annotated];

		// If the staticBonus is greater than 0, add a "+" operator so the formula remains valid.
		if (staticBonus > 0) simplified.push(new OperatorTerm$1({ operator: "+" }));
		simplified.push(new NumericTerm$1({ number: staticBonus }));
	}
	return [...simplified, ...annotated];
}

/* -------------------------------------------- */

/**
 * A helper function to group dice of the same size and sign into single dice terms.
 * @param {object[]} terms  An array of DiceTerms and associated OperatorTerms.
 * @returns {object[]}      A new array of simplified dice terms.
 */
function _simplifyDiceTerms(terms) {
	const { annotated, unannotated } = _separateAnnotatedTerms(terms);

	// Split the unannotated terms into different die sizes and signs
	const diceQuantities = unannotated.reduce((obj, curr, i) => {
		if (curr instanceof OperatorTerm$1) return obj;
		const isCoin = curr.constructor?.name === "Coin";
		const face = isCoin ? "c" : curr.faces;
		const modifiers = isCoin ? "" : curr.modifiers.filterJoin("");
		const key = `${unannotated[i - 1].operator}${face}${modifiers}`;
		obj[key] ??= {};
		if (curr._number instanceof Roll && curr._number.isDeterministic) curr._number.evaluateSync();
		obj[key].number = (obj[key].number ?? 0) + curr.number;
		if (!isCoin) obj[key].modifiers = (obj[key].modifiers ?? []).concat(curr.modifiers);
		return obj;
	}, {});

	// Add new die and operator terms to simplified for each die size and sign
	const simplified = Object.entries(diceQuantities).flatMap(([key, { number, modifiers }]) => [
		new OperatorTerm$1({ operator: key.charAt(0) }),
		key.slice(1) === "c"
			? new Coin({ number: number })
			: new Die$1({ number, faces: parseInt(key.slice(1)), modifiers: [...new Set(modifiers)] })
	]);
	return [...simplified, ...annotated];
}

/* -------------------------------------------- */

/**
 * A helper function to extract the contents of parenthetical terms into their own terms.
 * @param {object[]} terms  An array of roll terms.
 * @returns {object[]}      A new array of terms with no parenthetical terms.
 */
function _expandParentheticalTerms(terms) {
	terms = terms.reduce((acc, term) => {
		if (term instanceof ParentheticalTerm) {
			if (term.isDeterministic)
				term = new NumericTerm$1({
					number: Roll.safeEval(term.term)
				});
			else {
				const subterms = new Roll(term.term).terms;
				term = _expandParentheticalTerms(subterms);
			}
		}
		acc.push(term);
		return acc;
	}, []);
	return _simplifyOperatorTerms(terms.flat());
}

/* -------------------------------------------- */

/**
 * A helper function to group terms into PoolTerms, DiceTerms, MathTerms, and NumericTerms.
 * MathTerms are included as NumericTerms if they are deterministic.
 * @param {RollTerm[]} terms  An array of roll terms.
 * @returns {object}          An object mapping term types to arrays containing roll terms of that type.
 */
function _groupTermsByType(terms) {
	// Add an initial operator so that terms can be rearranged arbitrarily.
	if (!(terms[0] instanceof OperatorTerm$1)) terms.unshift(new OperatorTerm$1({ operator: "+" }));

	return terms.reduce((obj, term, i) => {
		let type;
		if (term instanceof DiceTerm$1) type = DiceTerm$1;
		else if (term instanceof FunctionTerm && term.isDeterministic) type = NumericTerm$1;
		else type = term.constructor;
		const key = `${type.name.charAt(0).toLowerCase()}${type.name.substring(1)}s`;

		// Push the term and the preceding OperatorTerm.
		(obj[key] = obj[key] ?? []).push(terms[i - 1], term);
		return obj;
	}, {});
}

/* -------------------------------------------- */

/**
 * A helper function to separate annotated terms from unannotated terms.
 * @param {object[]} terms     An array of DiceTerms and associated OperatorTerms.
 * @returns {Array | Array[]}  A pair of term arrays, one containing annotated terms.
 */
function _separateAnnotatedTerms(terms) {
	return terms.reduce(
		(obj, curr, i) => {
			if (curr instanceof OperatorTerm$1) return obj;
			obj[curr.flavor ? "annotated" : "unannotated"].push(terms[i - 1], curr);
			return obj;
		},
		{ annotated: [], unannotated: [] }
	);
}

var dice = /*#__PURE__*/Object.freeze({
	__proto__: null,
	d20Roll: d20Roll,
	damageRoll: damageRoll,
	simplifyRollFormula: simplifyRollFormula,
	simplifyRollFormula2: simplifyRollFormula2
});

const C = T20$1;
// Valores numéricos do mode antigo (v13). No v14 os changes usam `type` string, mas a lógica
// interna deste arquivo continua comparando numericamente; a entrada é normalizada para `mode`
// numérico via changeMode() e a saída convertida para system.changes/type na criação do efeito.
const CHANGEMODES = { CUSTOM: 0, MULTIPLY: 1, ADD: 2, DOWNGRADE: 3, UPGRADE: 4, OVERRIDE: 5 };
/* -------------------------------------------- */
/*  Helpers                                     */
/* -------------------------------------------- */

/**
 * /(?<die>(?<qty>\d+)(d)(?<faces>\d+)(?<bonus>[\+|\-]\d+)?(?<dmgType>\[\w+\]))|(?<perDie>(d)(\*)(?<pdbonus>\d+))/
 * */

/**
 * Regular Expressions to find roll Modifiers
 */
const re = {
	faces: /^d\d+$/,
	die: /\d+d\d+[+-]?[\d+]?/,
	split: /(d)|([+-])|(\d+)|(@\w+)|\[(\w+)\]/g,
	perd: /d\*\d+/,
	dieGroup: /(?<die>(?<qty>\d+)(d)(?<faces>\d+)(?<bonus>[+-]\d+)?(?<dmgType>\[\w+\]))?/,
	dmgType: /(?<die>\d+d\d+[+-]?[\d+]?)\s?\[?(?<dtype>\w+)?\]?/
};

/**
 * Search a value by its translation;
 * @param {String} value       Object Key or Text Translated
 * @param {Object} configKey   Object CONFIG.T20
 */
const itemKey = (value, configKey) => {
	const lang = game.i18n.translations.T20;
	value = value.toLowerCase().capitalize();
	let temp = Object.entries(lang).find((t) => t[1] == value);
	let valueUnlocalized = temp ? `T20.${temp[0]}` : value;

	if (Object.entries(configKey).find((t) => t[1] == value)) {
		return Object.entries(configKey).find((t) => t[1] == value)[0];
	} else if (configKey[value.toLowerCase()]) {
		return configKey[value.toLowerCase()];
	} else if (Object.entries(configKey).find((t) => t[1] == valueUnlocalized)) {
		return Object.entries(configKey).find((t) => t[1] == valueUnlocalized)[0];
	}
	return null;
};
/**
 * Regular Expressions to find
 * @param {Object} rollMods   Objeto com os valores a serem modificados;
 */
const applyRollChanges = (ch, qty, ef, item, id, rollMods, options) => {
	// ROLLS ARRAY
	const _chkey = ch.key;
	const _campos = {};
	let rolls = [];
	let damageTypeTarget;
	if (["atributo", "pericia"].includes(item.type)) {
		item.key = "roll"; // item.id;
		rolls = [item];
	} else {
		if (ch.key.match(/dano\:\w+/)) {
			[ch.key, damageTypeTarget] = ch.key.split(":");
		}
		const atributosEspeciais = [
			"pericia",
			"atributoAtq",
			"atributoDano",
			"tipoDano",
			"passos",
			"danoCritico",
			"critico",
			"ignoraRD",
			"danoMultiplicavel"
		];
		rolls = id.rolls.filter((r) => {
			return (
				(ch.key === "roll" && item.type !== "arma")
				|| r.key === ch.key
				|| r.key.match(new RegExp(ch.key))
				|| atributosEspeciais.includes(ch.key)
				|| /@([^#]+)#/.test(ch.key)
			);
		});
	}
	ch.key = ch.key.toString();
	if (ch.value.toString().match(/^:/)) {
		ch.value = ch.value.replace(":", ";").split(";")[qty];
		ef.flags.tormenta20.aumenta = false;
	}
	for (let r of rolls) {
		let sourceName = ef.sourceName;
		// Target another onUseEffect ie.: @some#roll
		if (ch.key.match(/\@([^\#]+)\#/)) {
			let m = ch.key.match(/@(.*)#(.*)/);
			if (m[1] && m[2]) {
				sourceName = m[1];
				if (m[2] != r.type) continue;
				ch.key = m[2];
			}
		}
		let p = 0;
		if (rollMods && sourceName) {
			p = Math.max(
				rollMods[r.key].findIndex((i) => i.src == sourceName),
				0
			);
			// p-=1;
		} else if (damageTypeTarget) {
			// p = Math.max( rollMods[r.key].findIndex( part => part.dmgType == damageTypeTarget ), 0);
			p = rollMods[r.key].findIndex((part) => part.dmgType == damageTypeTarget);
			if (p == -1) continue;
		}
		// CUSTOM CHANGES
		if (ch.mode == CHANGEMODES.CUSTOM) {
			// To Change die => d12 (d#NUMBEROFFACES)
			if (ch.value.match(re.faces)) {
				rollMods[r.key][p].die = ch.value;
			}
			// To add Roll Modifiers => kh
			else if (
				!ch.value.match(re.die)
				&& foundry.dice.terms.Die.MODIFIERS[ch.value.replace(/\d+|\>|\<|\+|\-|\=/g, "")]
				&& !["min", "max"].includes(ch.value)
			) {
				if (ch.value.match(/k|kh|kl/)) {
					if (r.parts[p][0] == "1d20") {
						r.parts[p][0] = r.parts[p][0].replace("1d", "2d") + ch.value;
					} else if (r.parts[0][0] == "1d20") {
						r.parts[0][0] = r.parts[0][0].replace("1d", "2d") + ch.value;
					} else if (r.parts[0] == "1d20") {
						r.parts[0] = r.parts[0].replace("1d", "2d") + ch.value;
					}
				} else r.parts[p][0] = r.parts[p][0] + ch.value;
			}
			// To add more dice => 1d8+1
			else if (ch.value.match(re.die) && r.parts[p][0].toString().match(re.die)) {
				// match at object? || rollMods[r.key][p].match(re.die)
				let tempAp = [];
				ch.value.match(re.split).forEach((rt) => tempAp.push(Number(rt) * qty || rt));
				if (tempAp[0]) rollMods[r.key][p].addDie += tempAp[0];
				if (tempAp[4]) rollMods[r.key][p].addNum += tempAp[4];
			}
			// To add per dice => d*1 ie.: 2d8+2 => 2d8+2+2
			else if (ch.value.match(re.perd)) {
				rollMods[r.key][p].perDie += Number(ch.value.match(/\d+/)[0]) || 0;
			}
			// To Maximize/Minimize a roll => max/min
			else if (["max", "min"].includes(ch.value)) {
				options.minmax = ch.value;
			}
			// To modify a weapon damage step => passos 1
			else if (r.type == "dano" && ch.key == "passos") {
				if (Number(ch.value)) {
					rollMods[r.key][p].dmgStep += Number(ch.value) * qty;
				} else {
					try {
						ch.value = simplifyRollFormula(ch.value, item.getRollData());
						rollMods[r.key][p].dmgStep += Number(ch.value) * qty;
					} catch (error) {
						console.warn(error);
					}
				}
			}
		}
		// MULTIPLY CHANGES
		else if (ch.mode == 1) {
			// Only multiply from the same src
			if (rollMods[r.key].find((m) => m.src == sourceName)) {
				let temp = r.parts.pop();
				r.parts.push([temp[0] * (Number(ch.value) + qty - 1), ""]);
			}
		}
		// ADD CHANGES
		else if (ch.mode == 2) {
			// ADD ROLL FROM ITEM
			if (ch.value == "roll") {
				const itr = item.actor.items.get(ef.origin.split(".")[3]).system.rolls.find((r) => r.type == "dano");
				r.parts.push(itr.parts[0]);
			} else if (["pericia", "atributo"].includes(item.type)) {
				r.parts.push(Number(ch.value * qty) || ch.value);
				continue;
			} // To add one extra dice from source 1d => 2d6 + 1d6
			else if (ch.key === "dano" && ch.value.match(/^\dd$/)) {
				let n = parseInt(ch.value) ?? 0;
				if (n) rollMods[r.key][p].extraDie = n;
				continue;
			} // To ignore part of Damage Reduction
			else if (ch.key === "ignoraRD") {
				if (r.type === "dano") {
					r.rd ??= 0;
					r.rd += Math.abs(Number(ch.value * qty)) * -1;
				}
				continue;
			} else {
				let { die, dtype } = ch.value.match(re.dmgType)?.groups ?? {};
				if (r.type === "dano" && !dtype) {
					dtype = r.parts.find((p) => p[1] in CONFIG.T20.damageTypes || p[1] in CONFIG.T20.healingTypes)?.[1] ?? "";
				}
				// To add term multipliable when critical
				if (["danoCritico", "danoMultiplicavel"].includes(ch.key)) {
					if (r.type !== "dano") continue;
					const value = Number(ch.value * qty) || ch.value.replace(/^\d+/, ($0) => $0 * qty);
					r.parts.push([value, ch.key]);
				} else {
					let value = Number(ch.value * qty) || ch.value;
					if (die) {
						// "1d6[damage]" -> ["1", "6[damage]"]
						const [diceQty, size] = die.split(/d(.*)/i);
						value = `${diceQty * qty}d${size}`;
					}
					r.parts.push([value, dtype]);
				}
				rollMods[r.key].push({
					die: null,
					dmgStep: 0,
					override: null,
					addDie: 0,
					addNum: 0,
					perDie: 0,
					extraDie: 0,
					dmgType: dtype ?? "",
					src: sourceName ?? ""
				});
				continue;
			}

			if (rollMods && sourceName) {
				rollMods[r.key].push({
					die: null,
					dmgStep: 0,
					override: null,
					addDie: 0,
					addNum: 0,
					perDie: 0,
					extraDie: 0,
					src: sourceName
				});
			}
		}
		// OVERRIDE CHANGES
		else if (ch.mode == 5) {
			if (r.type == "dano") {
				if (item.type == "arma" && ch.key == "atributoDano") {
					r.parts[1][0] = ch.value.charAt(0) == "@" ? ch.value : `@${ch.value}`;
				} else if (item.type == "arma" && ch.key == "tipoDano") {
					r.parts[0][1] = ch.value;
				} else if (ch.key == "tipoDano") {
					r.parts[p][1] = ch.value;
				} else if (["", "-"].includes(ch.value)) {
					r.parts = [];
				} else if (Number(ch.value) || ch.value.charAt(0) == "@" || ch.value.match(re.die)) {
					rollMods[r.key][p].override = ch.value;
				}
			} else if (r.type == "ataque") {
				if (item.type == "arma" && ch.key == "pericia") {
					r.parts[1][0] = ch.value;
				} else if (item.type == "arma" && ch.key == "atributoAtq") {
					r.parts[1][1] = ch.value;
				}
			}
		}
	}
	if (["atributo", "pericia"].includes(item.type)) {
		foundry.utils.mergeObject(item, _campos);
	}
	ch.key = _chkey;
};

const itemFields = {
	// ARMA
	// pericia:			["rolls.0.parts.1.0", null ],//C.pericias
	// atributoAtq:	["rolls.0.parts.1.1", C.atributos ],
	// atributoDano:	["rolls.1.parts.1.0", C.atributos ],
	// tipoDano:			["rolls.1.parts.1.1", C.damageTypes ],
	criticoM: ["criticoM", null],
	criticoX: ["criticoX", null],
	// ARMA / MAGIA / PODER / CONSUMIVEL
	alcance: ["alcance", C.distanceUnits],
	// MAGIA / PODER / CONSUMIVEL
	alvo: ["alvo", null],
	area: ["area", null],
	execucao: ["ativacao.execucao", C.abilityActivationTypes],
	duracao: ["duracao.units", C.timePeriods],
	resistencia: ["resistencia.txt", null],
	atributoCD: ["resistencia.atributo", C.atributos],
	cd: ["resistencia.bonus", null],
	CD: ["resistencia.bonus", null] // Redundância para evitar problema entre maiúscula/minúsculas

	// efeito: 			["efeito", null ],
	// PERICIA
	// atributo:			["atributo", null],
	// treino:				["treino", null],
	// treinado:			["treinado", null]
};

/**
 * Modify data from item
 * @param {Object} ch             ActiveEffect change object
 * @param {Array} optEffectList   List of ActiveEffect from Item
 * @param {Array} effectList      List of ActiveEffect that will go to be applied
 */
const applyItemChanges = (ch, qty, ef, item, id) => {
	const campos = itemFields;
	const _campos = {};
	// CUSTOM CHANGES
	if (ch.mode == 0) ;
	// MULTIPLY CHANGES
	else if (ch.mode == 1) {
		if (Number(ch.value)) {
			const temp = foundry.utils.getProperty(id, campos[ch.key][0]);
			if (Number.isNumeric(temp)) _campos[campos[ch.key][0]] = Number(temp) * (Number(ch.value) * qty);
		}
	}
	// ADD CHANGES
	else if (ch.mode == 2) {
		re.float = /[\d+]?[.|,]?\d+/;
		if (ch.value.match(re.float) && ch.key == "area") {
			let n1 = id.area.match(re.float)[0].replace(",", ".");
			let n2 = ch.value.toString().match(re.float)[0].replace(",", ".");
			let n3 = `${Number(n1) + Number(n2) * qty}`;
			_campos[ch.key] = id.area.replace(n1.replace(".", ","), n3);
		} else if (Number(ch.value)) {
			const temp = foundry.utils.getProperty(id, campos[ch.key][0]);
			if (Number.isNumeric(temp)) {
				_campos[campos[ch.key][0]] = Number(temp) + Number(ch.value) * qty;
			}
		}
	}
	// OVERRIDE CHANGES
	else if (ch.mode == 5) {
		if (campos[ch.key][1]) {
			if (ch.key == "duracao") {
				let str = ch.value.match(/[A-z]+/);
				let num = ch.value.match(/\d+/);
				_campos[campos[ch.key][0]] = str ? itemKey(str[0], campos[ch.key][1]) : "";
				_campos["duracao.value"] = num ? num[0] : "";
			} else {
				_campos[campos[ch.key][0]] = itemKey(ch.value, campos[ch.key][1]);
			}
		} else if (ch.key.match(/consume.target/)) {
			item.actor.items.find((i) => i.name == ch.value);
			_campos[campos[ch.key][0]] = ch.value;
		} else _campos[campos[ch.key][0]] = ch.value;
	}

	foundry.utils.mergeObject(id, foundry.utils.expandObject(_campos));
};

const actorFields = {
	atributo: ["atributo", null],
	treinado: ["treinado", null],
	treino: ["treino", null]
};
/**
 * Modify data from actor
 * @param {Object} ch             ActiveEffect change object
 * @param {Array} optEffectList   List of ActiveEffect from Item
 * @param {Array} effectList      List of ActiveEffect that will go to be applied
 */
const applyActorChanges = (ch, qty, ef, item, id, ad) => {
	const campos = actorFields;
	const _campos = {};
	// CUSTOM CHANGES
	if (ch.mode == 0) ;
	// MULTIPLY CHANGES
	else if (ch.mode == 1) {
		if (Number(ch.value)) {
			const temp = foundry.utils.getProperty(id, campos[ch.key][0]);
			if (Number(temp)) _campos[campos[ch.key][0]] = Number(temp) * (Number(ch.value) * qty);
		}
	}
	// ADD CHANGES
	else if (ch.mode == 2) {
		if (Number(ch.value)) {
			const temp = foundry.utils.getProperty(id, campos[ch.key][0]);
			if (Number(temp)) _campos[campos[ch.key][0]] = Number(temp) + Number(ch.value) * qty;
		}
	}
	// OVERRIDE CHANGES
	else if (ch.mode == 5) {
		if (ch.key == "treinado") {
			_campos.treino = !ch.value ? 0 : ad.attributes.treino;
		} else if (campos[ch.key]) _campos[campos[ch.key][0]] = ch.value;
	}

	foundry.utils.mergeObject(item, foundry.utils.expandObject(_campos));
};

const effectFields = (key) => {
	if (["efeito", "condicao", "treino"].includes(key)) return true;
	else if (key.startsWith("$")) return true;
	return false;
};
/**
 * Retrieve Active Effects from the Item or from System Status
 * @param {Object} ch             ActiveEffect change object
 * @param {Array} optEffectList   List of ActiveEffect from Item
 * @param {Array} effectList      List of ActiveEffect that will go to be applied
 */
const applyEffectChanges = (ch, qty, ef, optEffectList, effectList, effectChanges) => {
	if (ch.key === "efeito") {
		let tef = optEffectList.find((e) => e.name === ch.value);
		// include effect from the item
		if (!tef && ef.origin.match(/Item.[A-Za-z0-9]+/)) {
			let itemId = ef.origin.match(/Item.[A-Za-z0-9]+/)[0].split(".")[1] ?? false;
			let it = ef.parent?.items?.find((i) => i.id == itemId);
			if (it) tef = it.effects.find((e) => e.name == ch.value);
		}
		if (tef) effectList.push(tef);
	}
	// include condition
	else if (ch.key === "condicao") {
		let tef = game.tormenta20.conditions[ch.value.toLowerCase().trim()];
		if (tef) effectList.push(new ActiveEffect(tef));
	}
	// Modify effect
	// else if (false && ch.key.match(/\$([^\#]+)\#/)) {
	// 	if (qty && !ch.value.startsWith("@")) {
	// 		ch.value = new Roll(ch.value).alter(qty, 0, {
	// 			multiplyNumeric: true
	// 		}).formula;
	// 	}
	// 	effectChanges.push(ch);
	// 	return;
	// 	let m = ch.key.match(/\$(.*)#(.*)/);
	// 	console.warn(m, optEffectList, effectList);
	// 	let _ef = effectList.find((eff) => eff.name == m[1]);
	// 	let index = effectList.map((eff) => eff.name).indexOf(m[1]);
	// 	// for (const iterator of Object.entries( effectList ) ) {

	// 	// }
	// 	for (const _ch of _ef.changes) {
	// 		if (_ch.key != m[2]) continue;
	// 		if (ch.mode == CHANGEMODES.CUSTOM) {
	// 		} else if (ch.mode == CHANGEMODES.MULTIPLY) {
	// 		} else if (ch.mode == CHANGEMODES.ADD) {
	// 		} else if (ch.mode == CHANGEMODES.DOWNGRADE) {
	// 		} else if (ch.mode == CHANGEMODES.UPGRADE) {
	// 		} else if (ch.mode == CHANGEMODES.OVERRIDE) {
	// 			_ch.value = ch.value;
	// 			console.log(ch.value);
	// 		}
	// 	}
	// 	// effectList = effectList.filter(eff => eff.name != m[1]);
	// 	effectList.pop();
	// 	effectList.push(_ef);

	// 	// effectList[index] = _ef;
	// 	console.log(effectList.find((ef) => ef.name == m[1]));
	// }
};

/**
 * TODO
 * @param {Object} item      TODO
 * @param {Array} rollMods   TODO
 */
function applyRollModifiers(item, rollMods) {
	let rolls = item.system.rolls;
	let roll;
	for (let r of rolls) {
		for (let [i, p] of r.parts.entries()) {
			let dano = p[0]; // r.parts[rollMods][0];
			if (rollMods[r.key][i]?.override == "") {
				r.parts[i] = [];
				continue;
			} else if (rollMods[r.key][i]?.override) {
				dano = rollMods[r.key][i].override;
			}
			if (rollMods[r.key][i]?.multiplicavel) {
				r.parts[i][3] = true;
			}

			if (typeof dano === "string" && typeof rollMods[r.key][i]?.die === "string") {
				dano = dano.replace(/d\d+/, rollMods[r.key][i].die);
			}

			if (dano.toString().match(re.die) && rollMods[r.key][i]?.dmgStep) {
				let danoBase = dano.match(/^\d+d\d+/)[0];
				if (item.type === "magia") {
					const conversoes = { 4: 6, 6: 8, 8: 10, 10: 12 };
					const { qtd, dado } = danoBase.match(/^(?<qtd>\d+)d(?<dado>\d+)$/).groups;
					if (conversoes[dado]) dano = dano.replace(/^\d+d\d+/, `${qtd}d${conversoes[dado]}`);
				} else {
					const conversoes = { "2d4": "1d8", "2d6": "1d12", "3d4": "1d12" };
					danoBase = conversoes[danoBase] || danoBase;

					const passosIndx = C.passosDano.findIndex((passos) => passos.includes(danoBase));

					if (passosIndx !== -1) {
						const passos = C.passosDano[passosIndx];
						const index = passos.indexOf(danoBase);
						const step = rollMods[r.key][i].dmgStep;

						const newIndex = Math.max(0, Math.min(index + step, passos.length - 1));
						rollMods[r.key][i].dmgStep = newIndex - index;

						dano = dano.replace(/^\d+d\d+/, passos[newIndex]);
					}
				}
			}

			if (rollMods[r.key][i]?.addDie) {
				dano = new Roll(dano).alter(1, rollMods[r.key][i].addDie).formula;
			}

			if (rollMods[r.key][i]?.addNum) {
				roll = new Roll(dano);
				if (roll.terms[2]) roll.terms[2].number += rollMods[r.key][i].addNum;
				else roll = new Roll(`${dano}+${rollMods[r.key][i].addNum}`);
				dano = roll.formula;
			}

			if (dano.toString().match(re.die) && rollMods[r.key][i]?.perDie) {
				let pd = parseInt(dano.match(/\d+d/)[0]) * Number(rollMods[r.key][i].perDie) || 0;
				if (pd) dano = `${dano}+${pd}`;
			}

			if (dano.toString().match(re.die) && rollMods[r.key][i]?.extraDie) {
				let danoBase = dano.match(/^\d+d\d+/)[0];
				let ed = danoBase.replace(/\d+/, Number(rollMods[r.key][i].extraDie));
				if (ed.match(re.die)) dano = `${dano}+${ed}`;
			}
			r.parts[i][0] = dano;
		}
	}
	return rolls;
}

/* -------------------------------------------- */
/*  Apply                                       */
/* -------------------------------------------- */

/**
 * Perform modifications to the Roll and its cloned Item/Actor
 * @param {Object} rolledItem     Item being used;
 * @param {Object} configuration  Submited data from Ability Use Dialog.
 */
function applyOnUseEffects(rolledItem, configuration = {}) {
	const item = rolledItem;
	const id = item.system;
	const actor = item.actor;
	const ad = actor.system;
	const hasMPCost = id.ativacao?.custo > 0;

	const options = {};
	options.onUseEffects = [];
	options.effects = [];

	let rollMods;
	if (item.type != "pericia" && item.type != "atributo") {
		rollMods = id.rolls.reduce(function (acc, r) {
			acc[r.key] = r.parts.map((i) => ({
				die: null,
				dmgStep: 0,
				override: null,
				addDie: 0,
				addNum: 0,
				extraDie: 0,
				perDie: 0,
				dmgType: i[1],
				src: i[2]
			}));
			return acc;
		}, {});
	} else {
		item.validOnUseEffects = item.validOnUseEffects ?? [];
		item.effects = [];
	}

	// Get Applied On Use Effects
	const applied = foundry.utils.expandObject(configuration).aprs ?? {};
	const onUseEffects = item.validOnUseEffects.filter((ef) => applied[ef.id]?.aplica);
	// Get Active Effects From Item
	const effectList = item.effects.filter(
		(ef) =>
			(ef.flags.tormenta20.onuse && ef.flags.tormenta20.durationScene && !ef.disabled)
			|| (!ef.flags.tormenta20.onuse && !ef.disabled)
	);
	const optEffectList = item.effects.filter(
		(ef) =>
			(ef.flags.tormenta20.onuse && ef.flags.tormenta20.durationScene && ef.disabled)
			|| (!ef.flags.tormenta20.onuse && ef.disabled)
	);

	//
	const effectChanges$1 = [];
	const changes = [];
	[effectList, optEffectList].forEach(function (list) {
		list.forEach(function (ef, index) {
			changes.push([]);
			effectChanges(ef).forEach(function (ch) {
				changes[index].push({
					key: ch.key,
					value: Number(ch.value) || ch.value,
					mode: changeMode(ch),
					priority: ch.priority
				});
			});
		});
	});

	// SORT
	onUseEffects.sort((a, b) =>
		effectChanges(a).some((ch) => changeMode(ch) === 5) && !effectChanges(b).some((ch) => changeMode(ch) === 5)
			? -1
			: effectChanges(b).some((ch) => changeMode(ch) === 5) && !effectChanges(a).some((ch) => changeMode(ch) === 5)
				? 1
				: 0
	);

	// Prepare chatData and rollModifiers for onUseEffects
	for (let ef of onUseEffects) {
		// Prepare onUseEffects chat content;
		let ouEff = {};
		ouEff.description =
			item.type !== "arma" ? ef.name : item.id == ef.parent.id ? `${ef.parent.name} - ${ef.name}` : ef.sourceName;
		if ([game.i18n.localize("Unknown"), actor.name].includes(ouEff.description)) ouEff.description = ef.name;
		ouEff.cost = Number(applied[ef.id]?.custo) * applied[ef.id]?.aplica || applied[ef.id]?.custo;
		// Number(aplicados[ef.id]?.custo) * aplicados[ef.id]?.aplica || aplicados[ef.id]?.custo;
		ouEff.qty = Number(applied[ef.id]?.aplica) || 1;

		// If an onUseEffects from the same source was applied before, sum its cost and quantity
		if (options.onUseEffects.find((i) => i.description == ouEff.description)) {
			let apl = options.onUseEffects.find((i) => i.description == ouEff.description);
			apl.qty += ouEff.qty - 1 || 0;
			// apl.cost = Number(apl.cost) + Number(ouEff.cost) ?? Number(apl.cost) + Number(0);
			apl.cost = apl.cost == "" ? apl.cost : Number(apl.cost);
			if (ouEff.cost != "" && Number(ouEff.cost)) apl.cost += Number(ouEff.cost);
		} else {
			options.onUseEffects.push(ouEff);
		}

		id.ativacao.custo += Number(ouEff.cost) || 0;
		if (!Number(applied[ef.id]?.custo + 1) && item.type == "magia") options.truque = true;

		const temBonusTeste = effectChanges(ef).filter((ch) => ["roll", "ataque"].includes(ch.key)).length > 1;
		// Prepare onUseEffects rollModifiers. Normaliza cada change para `mode` numérico (v13)
		// para a lógica abaixo; a criação do efeito converte de volta para type (v14).
		for (let ch of effectChanges(ef).map((c) => ({ ...c, mode: changeMode(c) }))) {
			if (ch.key == "custo") {
				if (ch.value == "/2") options.halfCost = true;
			}
			if (item.type == "pericia" && temBonusTeste && ch.key == "ataque") {
				continue;
			}

			if (ch.key.match(/^\?/)) continue;
			if (itemFields[ch.key]) applyItemChanges(ch, ouEff.qty, ef, item, id);
			else if (actorFields[ch.key]) applyActorChanges(ch, ouEff.qty, ef, item, id, ad);
			else if (effectFields(ch.key)) applyEffectChanges(ch, ouEff.qty, ef, optEffectList, effectList);
			else applyRollChanges(ch, ouEff.qty, ef, item, id, rollMods, options);

			changes.forEach(function (efch) {
				if (!ef.flags.tormenta20.aumenta || (ef.flags.tormenta20.aumenta && efch.map((i) => i.key).includes(ch.key))) {
					if (ch.key == "system.tamanho" && efch.findIndex((i) => i.key == "system.tamanho")) {
						efch.splice(
							efch.findIndex((i) => i.key == "system.tamanho"),
							1
						);
					}
					// Push the change to the changes list
					efch.push({
						key: ch.key,
						value: Number(ch.value * ouEff.qty) || ch.value,
						mode: ch.mode,
						priority: ch.priority
					});
				}
			});
			// if( ch.key.match(/^(data|system|?)./) ){
			// }
		}
	}

	// Prepare data from the item to update labels
	if (item.type != "pericia" && item.type != "atributo") {
		item.prepareDerivedData();
		item.prepareFinalAttributes();
		// Apply the modifications to the rolls data
		id.rolls = applyRollModifiers(item, rollMods);
	} else if (item.type == "pericia") {
		if (configuration.bonus) item.parts.push(configuration.bonus);
	}

	if (hasMPCost) Math.min(id.ativacao?.custo || 1);

	// Generate a list of effects that will appear in the chat-card
	let rollData = actor.getRollData();
	effectList.forEach(function (ef, index) {
		let tempEffect = ef.toObject();
		let duration = {};
		let children = [];
		let durValue = Number(id.duracao?.value) || 1;
		let flags = { temp: true, tormenta20: { durationScene: false } };
		if (id.duracao?.units == "scene" || ef.flags.tormenta20.durationScene) {
			flags.tormenta20.durationScene = ef.flags.tormenta20.durationScene ?? true;
			duration.rounds = 99;
		}
		if (id.duracao?.units == "turn") duration.turns = durValue;
		if (id.duracao?.units == "round") duration.rounds = durValue;
		if (id.duracao?.units == "minute") duration.seconds = durValue * 60;
		if (id.duracao?.units == "hour") duration.seconds = durValue * 60 * 60;
		if (id.duracao?.units == "day") duration.seconds = durValue * 60 * 60 * 24;
		if (id.duracao?.units == "month") duration.seconds = durValue * 60 * 60 * 24 * 30;
		let statusName = ef.name.slugify().replace("-", "");
		if (T20$1.conditions[statusName]) {
			tempEffect = foundry.utils.deepClone(T20$1.conditions[statusName]);
		} else {
			tempEffect.name ??= ef?.parent?.name ?? "Efeito";
			tempEffect.img ??= ef?.parent?.img ?? "icons/svg/aura.svg";

			tempEffect.flags = foundry.utils.mergeObject(ef.flags, flags);
			tempEffect.duration = !foundry.utils.isEmpty(duration) ? duration : ef.duration;
			// tempEffect.duration ??= undefined; foundry.utils.mergeObject(ef.duration, duration);
			tempEffect.disabled = false;
			tempEffect.changes = changes[index] ?? effectChanges(ef).map((c) => ({ ...c, mode: changeMode(c) }));
			for (const efch of effectChanges$1) {
				let m = efch.key.match(/\$(.*)#(.*)/);
				for (const _ch of tempEffect.changes) {
					if (_ch.key != m[2]) continue;
					if (efch.mode == CHANGEMODES.CUSTOM) ; else if (efch.mode == CHANGEMODES.MULTIPLY) ; else if (efch.mode == CHANGEMODES.ADD) ; else if (efch.mode == CHANGEMODES.DOWNGRADE) ; else if (efch.mode == CHANGEMODES.UPGRADE) ; else if (efch.mode == CHANGEMODES.OVERRIDE) {
						_ch.value = efch.value;
					}
				}
			}

			if (tempEffect.changes) {
				tempEffect.changes.sort((c, d) => (!Number(c.value) || c.key.match(/efeito.\w+/) ? 1 : -1));
				tempEffect.changes = tempEffect.changes.reduce((object, ch) => {
					let key = ch.key.match(/efeito.\w+/) ? ch.key.toString().split(".")[1] : ch.key;
					let idx = object.map((ob) => ob.key).indexOf(key);
					if (ch.mode == 2 && idx == -1 && ch.key.match(/efeito.\w+/)) {
						ch.key = key;
					}
					if (ch.value.toString().match(/^@[^\s|+|-]+/)) {
						ch.value = simplifyRollFormula(ch.value, rollData);
					}

					if (idx >= 0) {
						try {
							if (ch.mode == 5) {
								if (ch.key.match(/efeito.\w+/)) {
									object[idx].value = ch.value;
								}
							} else if (ch.mode == 1) {
								if (ch.key.match(/efeito.\w+/)) {
									if (Number(object[idx].value)) {
										object[idx].value = Number(object[idx].value) * Number(ch.value);
									} else if (object[idx].value.match(re.die)) {
										object[idx].value = object[idx].value.replace(/\d+/, (m) => Number(m * ch.value));
									}
								} else {
									object[idx].value = Number(object[idx].value) + Number(ch.value);
								}
							} else if (ch.mode == 2) {
								if (ch.key.match(/efeito.\w+/)) {
									object[idx].value = Number(object[idx].value) + Number(ch.value);
								} else {
									object[idx].value = Number(object[idx].value) + Number(ch.value);
								}
							} else if (ch.mode == 0 && ch.value.toString().match(/\*\d+/)) {
								if (ch.key.match(/efeito.\w+/)) {
									object[idx].value = ch.value;
								} else {
									let value = ch.value.toString().match(/\d+/)[0];
									object[idx].value = Number(object[idx].value) * Number(value);
								}
							}
						} catch (error) {
							if (ch.mode == 2) {
								if (ch.key.match(/efeito.\w+/)) {
									object[idx].value = ch.value;
								} else {
									object[idx].value += `+${ch.value}`;
								}
							} else if (ch.mode == 0 && ch.value.toString().match(/\*\d+/)) {
								if (ch.key.match(/efeito.\w+/)) {
									object[idx].value = ch.value;
								} else {
									object[idx].value = `(${object[idx].value}) ${ch.value}`;
								}
							}
						}
					} else {
						object.push({
							key: ch.key,
							mode: ch.mode,
							value: ch.value,
							priority: ch.priority
						});
					}
					return object;
				}, []);
				tempEffect.changes.forEach((m) => (m.key = m.key.replace(/\&\w+$/, "")));
			}
		}
		// Set Origin as the Actor who caused the effects
		// Determine which turn it will be proc an effect over time
		// tempEffect.origin = ef.uuid ?? item.uuid ?? actor.uuid;
		tempEffect.origin = item.uuid ?? actor.uuid;
		tempEffect.origin = tempEffect.origin?.replace(/.?ActiveEffect.\w+/, "");
		// v14: os changes moram em system.changes com `type` (string). Converte tanto o ramo de
		// condição (formato antigo herdado de conditions.mjs) quanto o construído acima, para
		// evitar perda de dados na criação do ActiveEffect.
		if (tempEffect.changes) {
			tempEffect.system = {
				...(tempEffect.system ?? {}),
				changes: tempEffect.changes.map((c) => ({
					key: c.key,
					type: changeType(c),
					value: c.value,
					priority: c.priority
				}))
			};
			delete tempEffect.changes;
		}
		options.effects.push([tempEffect, ...children]);
	});

	// Brew Potion
	if (configuration.brew) options.brew = configuration.brew;
	// Logs
	// console.log(item, rollMods, changes, options);
	return options;
}

/**
 * A specialized Dialog subclass for ability usage
 * @type {Dialog}
 */
class AbilityUseDialog extends Dialog {
	constructor(item, dialogData = {}, options = {}) {
		super(dialogData, options);
		this.options.classes.push(...["tormenta20", "ability-use-form"]);

		/**
		 * Store a reference to the Item document being used
		 * @type {ItemT20}
		 */
		this.item = item;
	}

	/** @override */
	activateListeners(html) {
		super.activateListeners(html);

		// Add controles para números
		html.find(".numCtrl").click(this.numberControl.bind(this));
		html.find(".item-cost input").on("click", () => {
			this._onInputChange(html);
		});
	}

	numberControl(ev) {
		ev.preventDefault();
		let target;
		if (ev.target.tagName == "I") {
			target = $(ev.target).parent(".numCtrl");
		} else {
			target = ev.target;
		}
		let campo = $(target).siblings(".numInp")[0];
		if ($(target).val() === "+") {
			campo.value = parseInt(campo.value) + parseInt($(campo).prop("step"));
		} else if ($(target).val() === "-" && campo.value > 0) {
			campo.value = parseInt(campo.value) - parseInt($(campo).prop("step"));
		}

		this._onInputChange(this.element);
	}

	_onInputChange(html) {
		html = html[0];
		const effects = html.querySelectorAll(".aprimoramentos-list li input:not([type=hidden])");
		let totalCost = 0;
		let hasCost = false;
		for (const input of effects) {
			const cost = input.closest("div").querySelector("input[type=hidden]");
			if (!cost) continue;
			if (input.type == "checkbox") {
				if (!input.checked) continue;
				if (Number(cost.value)) {
					totalCost += Number(cost.value);
					hasCost = true;
				}
			} else {
				if (input.value == 0) continue;
				if (Number(cost.value)) {
					totalCost += Number(cost.value) * input.value;
					hasCost = true;
				}
			}
		}
		const span = html.querySelector(".total-cost .cost");
		const { initialCost } = span.dataset;
		totalCost += Number(initialCost);
		const bonusCost = html.querySelector("input[name=ajustecusto]");
		if (bonusCost) {
			totalCost += Number(bonusCost.value);
		}

		span.value = hasCost ? Math.max(totalCost, 1) : 0;
	}

	/* -------------------------------------------- */
	/*  Rendering                                   */
	/* -------------------------------------------- */

	/**
	 * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
	 * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
	 * @param {ItemT20} item
	 * @return {Promise}
	 */
	static async create(item) {
		if (!item.isOwned) ui.notifications.error(game.i18n.localize("T20.ActionWarningItemNotOwned"));
		// Prepare data
		const itemData = item.system;
		const pmCost = itemData?.custo > 0;
		let aprimoramentos = [];

		function filterAE(ae, keys = [], tags = []) {
			const name = item.name;
			let items = ae.getFlag("tormenta20", "items");
			items = items ? items.split(";").map((i) => i.trim()) : [];
			if (!foundry.utils.isEmpty(items) && !items.includes(name)) return false;
			for (let k of keys) {
				if (!ae.flags?.tormenta20 || !ae.flags?.tormenta20[k]) return false;
			}
			return true;
		}

		const relate = {
			atributo: "ability",
			pericia: "skill",
			arma: "attack",
			magia: "spell",
			poder: "power",
			consumivel: "consumable",
			equipamento: "equipment"
		};
		let utype = "";
		switch (item.type) {
			case "atributo":
			case "pericia":
				utype = relate[item.type];
				aprimoramentos = [...item.actor.effects.filter((ae) => filterAE(ae, ["onuse", utype]))];
				item.validOnUseEffects = aprimoramentos;
				break;
			case "arma":
			case "magia":
			case "poder":
			case "equipamento":
			case "consumivel":
				utype = relate[item.type];
				aprimoramentos = [
					...item.effects.filter((ae) => filterAE(ae, ["onuse", "self"])),
					...item.actor.effects.filter((ae) => filterAE(ae, ["onuse", utype]))
				];
				break;
		}

		if (!["atributo", "pericia"].includes(item.type) && !itemData.rolls?.length && !aprimoramentos.length) {
			return applyOnUseEffects(item, {});
		}
		let initialCost = 0;
		initialCost += pmCost ? Number(itemData?.custo) : 0;
		for (const ef of aprimoramentos) {
			if (ef.disabled) continue;
			const cost = ef.getFlag("tormenta20", "custo");
			initialCost += Number.isNumeric(cost) ? Number(cost) : 0;
		}

		// TODO Check if Actor have sufficient MP
		// TODO Include consume os Ammunition, Itens, Money?
		// TODO Include measured templates placement
		// Prepare dialog form data
		const data = {
			item: itemData,
			title: game.i18n.format("T20.AbilityUseHint", item),
			note: "",
			custo: itemData?.custo ?? null,
			initialCost,
			formula:
				["atributo", "pericia"].includes(item.type)
				|| !!itemData.rolls?.find((r) => ["ataque", "formula"].includes(r.type)),
			formuladano: !!itemData.rolls?.find((r) => r.type === "dano"),
			itype: item.type,
			consumeMP: pmCost,
			aprimoramentos: aprimoramentos,
			rollMode: game.settings.get("core", "rollMode"),
			rollModes: CONFIG.Dice.rollModes,
			rollKeeping: event?.altKey ? "khd20" : event?.ctrlKey ? "kld20" : "",
			rollKeep: { khd20: "Melhor de 2d20", kld20: "Pior de 2d20" },
			errors: []
		};

		// Render the ability usage template
		const html = await foundry.applications.handlebars.renderTemplate(
			"systems/tormenta20/templates/apps/ability-use.hbs",
			data
		);

		// Create the Dialog and return data as a Promise
		const icon = item.type === "magia" ? "fas fa-magic" : "fa-fist-raised";
		const label =
			item.type === "magia" ? game.i18n.localize("T20.AbilityUseCast") : game.i18n.localize("T20.AbilityUseUse");

		return await new Promise((resolve) => {
			const dlg = new this(item, {
				title: game.i18n.format("T20.AbilityUseHint", {
					name: item.name,
					type: item.type
				}),
				content: html,
				buttons: {
					use: {
						icon: `<i class="fas ${icon}"></i>`,
						label: label,
						callback: (html) => {
							const fd = new foundry.applications.ux.FormDataExtended(html[0].querySelector("form"));
							let op = applyOnUseEffects(item, fd.object);
							resolve(foundry.utils.mergeObject(fd.object, op));
						}
					}
				},
				default: "use",
				close: () => resolve(null)
			});
			if (item.type === "magia" && (item.actor.getFlag("tormenta20", "createPotion") || game.user.isGM)) {
				dlg.data.buttons.brew = {
					icon: '<i class="fas fa-flask"></i>',
					label: game.i18n.localize("T20.BrewPotion"),
					callback: (html) => {
						const fd = new foundry.applications.ux.FormDataExtended(html[0].querySelector("form"));
						fd.object.brew = true;
						let op = applyOnUseEffects(item, fd.object);
						resolve(foundry.utils.mergeObject(fd.object, op));
					}
				};
			}
			dlg.options.width = 600;
			dlg.position.width = 600;
			dlg.render(true);
		});
	}
}

// import { T20 } from '../config.mjs';

/**
 * Override and extend the basic :class:`Item` implementation
 */
class ItemT20 extends Item {
	static getDefaultArtwork(itemData) {
		if (itemData.type === "arma") {
			return { img: "icons/svg/sword.svg" };
		} else if (itemData.type === "classe") {
			return { img: "systems/tormenta20/icons/svg/strong.svg" };
		} else if (itemData.type === "comodo") {
			return { img: "systems/tormenta20/icons/svg/door.svg" };
		} else if (itemData.type === "consumivel") {
			return { img: "systems/tormenta20/icons/svg/potion-ball.svg" };
		} else if (itemData.type === "equipamento") {
			return { img: "systems/tormenta20/icons/svg/armor-vest.svg" };
		} else if (itemData.type === "magia") {
			return { img: "systems/tormenta20/icons/svg/scroll-unfurled.svg" };
		} else if (itemData.type === "mobilia") {
			return { img: "systems/tormenta20/icons/svg/armchair.svg" };
		} else if (itemData.type === "poder") {
			return { img: "systems/tormenta20/icons/svg/skills.svg" };
		} else if (itemData.type === "race") {
			return { img: "icons/svg/ice-aura.svg" };
		}
		return { img: this.DEFAULT_ICON };
	}

	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/**
	 * Does the Item implement a attack roll as part of its usage
	 * @type {boolean}
	 */
	get hasAttack() {
		return this.system.rolls?.some((r) => r.type === "ataque") ?? false;
	}

	/* -------------------------------------------- */

	/**
	 * Does the Item implement a damage roll as part of its usage
	 * @type {boolean}
	 */
	get hasDamage() {
		return this.system.rolls?.some((r) => r.type === "dano") ?? false;
	}

	/* -------------------------------------------- */

	/**
	 * Does the Item implement an adaptable damage roll as part of its usage
	 * @type {boolean}
	 */
	get isAdaptable() {
		return !!(this.hasDamage && this.system.propriedades.ada);
	}

	/* -------------------------------------------- */

	/**
	 * Does the Item implement a saving throw as part of its usage
	 * @type {boolean}
	 */
	get hasSave() {
		const resistencia = this.system?.resistencia || {};
		return !!((resistencia.atributo || this.parent?.type === "npc") && resistencia.txt);
	}

	/* -------------------------------------------- */

	/**
	 * Does the Item have an area of effect target
	 * @type {boolean}
	 */
	get hasAreaTarget() {
		const target = this.system.area;
		return !!target;
	}

	/* -------------------------------------------- */

	/**
	 * Provide an object which organizes all augmenting ActiveEffects by their type
	 * @type {Object<documents.ActiveEffect[]>}
	 */
	get validOnUseEffects() {
		if (!this.isOwned) return [];
		const type = this.type;
		const name = this.name;
		let effects = [];

		const types = {
			magia: "spell",
			arma: "attack",
			pericia: "skill",
			atributo: "ability",
			consumivel: "consumable",
			poder: "power",
			equipamento: "equipment"
		};

		for (let i of this.effects.values()) {
			if (!i.getFlag("tormenta20", "onuse")) continue;
			if (i.getFlag("tormenta20", "self")) effects.push(i);
		}

		for (let i of this.actor.effects.values()) {
			if (!i.getFlag("tormenta20", "onuse")) continue;
			let items = i.getFlag("tormenta20", "items");
			if (i.getFlag("tormenta20", types[type])) {
				effects.push(i);
			} else if (items && items.match(name) >= 0) effects.push(i);
		}

		return effects;
	}

	/**
	 * Should this item's active effects be suppressed.
	 * @type {boolean}
	 */
	get areEffectsSuppressed() {
		const requireEquipped = ["arma", "equipamento"].includes(this.type);
		const equipmentSlots = game.settings.get("tormenta20", "equipmentSlots");
		if (!requireEquipped) return false;
		if (equipmentSlots && this.system.equipado2.slot === 0) return true;
		else if (!equipmentSlots && (this.system.equipado === false || this.system.equipado === 0)) return true;
		return false;
	}

	/**
	 * Should duplication of this item be allowed? Doesn't prevent programatic duplication, but affects UI controls.
	 * @type {boolean}
	 */
	get canDuplicate() {
		// Basicamente qualquer item de identidade cujo personagem não pode ter mais de um
		return !["background", "classe", "devotion", "identity", "race"].includes(this.type);
	}

	/* -------------------------------------------- */
	/*  Data Initialization                         */
	/* -------------------------------------------- */

	clone(data = {}, options = {}) {
		const item = super.clone(data, options);
		if (item.parent) {
			item.prepareFinalAttributes();
		}
		return item;
	}

	/* -------------------------------------------- */
	/*  DataPreparation                             */
	/* -------------------------------------------- */

	prepareBaseData() {
		// v14: super reseta o set de fases de ActiveEffect (_completedActiveEffectPhases);
		// sem isso o item quebra na segunda preparação/atualização.
		super.prepareBaseData();
		this.labels = {};
	}

	prepareDerivedData() {
		this.labels ??= {};
		super.prepareDerivedData();
		// Un-owned items can have their final preparation done here, otherwise this needs to happen in the owning Actor
		if (!this.isOwned) this.prepareFinalAttributes();
	}

	prepareFinalAttributes() {
		this.system.prepareFinalAttributes?.();
		this._prepareLabels();
	}

	/* -------------------------------------------- */
	/*  Data Preparation Helpers                    */
	/* -------------------------------------------- */

	/* -------------------------------------------- */

	/**
	 * Update a label to the Item detailing its total to hit bonus.
	 * Sources:
	 * - item entity's innate attack bonus
	 * - item's actor's proficiency bonus if applicable
	 * - item's actor's global bonuses to the given item type
	 * - item's ammunition if applicable
	 *
	 * @returns {Object} returns `rollData` and `parts` to be used in the item's Attack roll
	 */
	getAttackToHit() {
		const itemData = this.system;
		const rollData = this.getRollData();
		const roll = itemData.rolls.find((r) => r.type === "ataque");
		if (!this.hasAttack || !itemData || roll.parts.length < 2) return;
		// Define Roll bonuses
		const parts = roll.parts.map((p) => p[0] ?? p); // ;

		// Take no further action for un-owned items
		if (!this.isOwned) return { rollData, parts };
		const actorData = this.actor.system;
		const flags = this.actor.flags.tormenta20 || {};

		// Add skill bonus
		if (roll.parts[1][0]) {
			parts[1] = "@skill";
			if (!foundry.utils.isEmpty(actorData.pericias)) {
				rollData.skill = actorData.pericias[roll.parts[1][0]].value || 0;
			}
			// Change Skill Ability modifier
			let atributo = roll.parts[1][1];
			if (!atributo) {
				const { empunhadura, proposito } = this.system;
				const { for: forca, des } = actorData.atributos;
				const usarAcuidade =
					(game.settings.get("tormenta20", "lightFinesseWeapons") || flags?.acuidade) && des.value > forca.value;
				switch (proposito) {
					case "arremesso":
						if (flags?.arremessoPotente) atributo = "for";
						break;
					case "disparo":
						break;
					case "corpo-a-corpo":
					case "corpo-a-corpo-arremesso":
					default: {
						if (usarAcuidade && empunhadura === "leve") atributo = "des";
					}
				}
			}
			if (atributo) {
				const skill = actorData.pericias[roll.parts[1][0]];
				const abls = actorData.atributos;
				rollData.skill = skill.value - abls[skill.atributo].value + abls[atributo].value;
			}
		}

		// Item modifications and enchantments TODO
		// const mods = itemData.modificacoes;
		// if( mods?.pungente ) parts.push(2);
		// else if( mods?.certeira ) parts.push(1);
		// const enchants = itemData.encantos;
		// if( enchants?.magnifica || enchants.energetica ) parts.push(4);
		// else if( enchants?.formidavel ) parts.push(2);

		// Actor-level global bonus to attack rolls
		const bonuses = this.actor.system.modificadores?.ataque || {};
		if (bonuses.geral) parts.push(...bonuses.geral);
		if (bonuses.cac && roll.parts[1][0] !== "pont") {
			parts.push(...bonuses.cac);
		}
		if (bonuses.ad && roll.parts[1][0] === "pont") {
			parts.push(...bonuses.ad);
		}

		// One-time bonus provided by consumed ammunition
		if (itemData.consume?.type === "ammo" && this.actor.items) {
			const ammoItemData = this.actor.items.get(itemData.consume.target)?.system;

			if (ammoItemData) {
				const ammoItemQuantity = ammoItemData.qtd;
				const ammoCanBeConsumed = ammoItemQuantity && ammoItemQuantity - (itemData.consume.amount ?? 0) >= 0;
				const ammoAtqBns = ammoItemData.atqBns;
				const ammoIsTypeConsumable = ammoItemData.type === "consumivel" && ammoItemData.subtipo === "ammo";
				if (ammoCanBeConsumed && ammoAtqBns && ammoIsTypeConsumable) {
					parts.push("@ammo");
					rollData.ammo = ammoAtqBns;
				}
			}
		}

		// Condense the resulting attack bonus formula into a simplified label
		parts.shift();
		// Update labels and return the prepared roll data
		return { rollData, parts };
	}

	/* -------------------------------------------- */
	/*  Methods                                     */
	/* -------------------------------------------- */

	/**
	 * Prepare a data object which is passed to any Roll formulas which are created related to this Item
	 * @private
	 */
	getRollData() {
		if (!this.actor) return null;
		const rollData = this.actor.getRollData();
		rollData.item = foundry.utils.deepClone(this.system);
		if (this.system.rolled) {
			if (!rollData.roll) rollData.roll = {};
			for (let [key, r] of Object.entries(this.system.rolled)) {
				rollData.roll[key] = r.total;
			}
		}

		if (this.actor.system.pericias) {
			for (let [key, skl] of Object.entries(this.actor.system.pericias)) {
				rollData[key] = skl.value;
			}
		}
		return rollData;
	}

	/* -------------------------------------------- */
	/*  Event Handlers                              */
	/* -------------------------------------------- */

	/** @inheritdoc */
	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);
		if (!this.isEmbedded || this.parent.type === "vehicle") return;
		const actorData = this.parent.system;
		const isNPC = this.parent.type === "npc";
		let updates = {};
		if (!isNPC || !options.statblockParsing) {
			switch (data.type) {
				case "classe":
					/* TODO */
					break;
				case "equipamento":
					updates = this._onCreateOwnedEquipment(data, actorData, isNPC);
					break;
				case "arma":
					updates = this._onCreateOwnedWeapon(data, actorData, isNPC);
					break;
				case "magia":
					updates = this._onCreateOwnedSpell(data, actorData, isNPC);
					break;
				case "poder":
					updates = this._onCreateOwnedPower(data, actorData, isNPC);
					break;
				case "race":
					updates = await this._onCreateOwnedRace(data, actorData, isNPC);
					break;
			}
		}
		updates["flags.tormenta20.-=favorito"] = null;
		if (updates) return this.updateSource(updates);
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_onUpdate(changed, options, userId) {
		super._onUpdate(changed, options, userId);
		if (game.userId !== userId) return;
		// Set Initial Class
		if (this.parent && this.type === "classe") {
			if (foundry.utils.hasProperty(changed.system, "inicial")) {
				const classes = this.actor.items.filter((i) => i.type === "classe" && i.id != this.id);
				let updateItems;
				// When set as initial, unset other classes
				if (changed.system.inicial) {
					updateItems = classes.map((i) => {
						return { _id: i.id, "system.inicial": false };
					});
				}
				// If unseted initial, find first class and set it as initial
				else if (this.actor.items.find((i) => i.type === "classe" && !i.system.inicial)) {
					let newInicial = this.actor.items.find((i) => i.type === "classe" && i.id != this.id);
					updateItems = [{ _id: newInicial.id, "system.inicial": true }];
				}
				if (updateItems) this.actor.updateEmbeddedDocuments("Item", updateItems);
			}
			if (foundry.utils.hasProperty(changed.system, "niveis")) {
				this.actor.update({
					"system.attributes.nivel.value": this.actor.nivel
				});
			}
		}
		if (this.actor && game.userId === userId) this.actor._checkEncumbered();
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_onDelete(options, userId) {
		super._onDelete(options, userId);
		if (game.userId !== userId) return;
		// Assign a new primary class
		if (this.parent) {
			if (this.type === "classe") {
				if (this.actor.items.find((i) => i.type === "classe" && !i.system.inicial)) {
					let newInicial = this.actor.items.find((i) => i.type === "classe");
					const updateItems = [{ _id: newInicial.id, "system.inicial": true }];
					if (updateItems) this.actor.updateEmbeddedDocuments("Item", updateItems);
				}
				this.actor.update({
					"system.attributes.nivel.value": this.actor.nivel
				});
			} else if (this.type === "race") {
				const grantedItems = this.getFlag("tormenta20", "grantedItems") ?? [];
				const updates = Object.fromEntries(
					Object.keys(this.system.atributos).map((key) => [`system.atributos.${key}.racial`, 0])
				);
				this.actor.update(updates);
				const granted = [...new Set(grantedItems.filter((grant) => this.parent?.items.has(grant)))];
				this.parent.deleteEmbeddedDocuments("Item", granted);
			}
		}
	}

	/* -------------------------------------------- */

	/**
	 * Pre-creation logic for the automatic configuration of owned equipment type Items
	 * @private
	 */
	_onCreateOwnedEquipment(data, actorData, isNPC) {
		const updates = {
			"system.equipado": 0
		};
		return updates;
	}

	/* -------------------------------------------- */

	/**
	 * Pre-creation logic for the automatic configuration of owned spell type Items
	 * @private
	 */
	_onCreateOwnedSpell(data, actorData, isNPC) {
		const updates = {
			"system.preparada": false
		};
		if (isNPC) {
			try {
				if (data.system.resistencia) {
					updates["system.resistencia.atributo"] = "";
					updates["system.resistencia.bonus"] = "";
				}
			} catch (error) {
				console.error(error);
			}
		}
		return updates;
	}

	/* -------------------------------------------- */

	/**
	 * Pre-creation logic for the automatic configuration of owned powers type Items
	 * @private
	 */
	_onCreateOwnedPower(data, actorData, isNPC) {
		const updates = {};
		if (isNPC) {
			try {
				if (data.system.resistencia) {
					updates["system.resistencia.atributo"] = "";
					updates["system.resistencia.bonus"] = "";
				}
			} catch (error) {
				console.error(error);
			}
		}
		return updates;
	}
	/* -------------------------------------------- */

	/**
	 * Pre-creation logic for the automatic configuration of owned weapon type Items
	 * @private
	 */
	_onCreateOwnedWeapon(data, actorData, isNPC) {
		const updates = {
			"system.equipado": false
		};

		if (isNPC) {
			if (data?.system?.rolls) {
				updates["system.ataques"] = 1;
				let attackRoll = data.system.rolls.find((r) => r.type === "ataque");
				let damageRoll = data.system.rolls.find((r) => r.type === "dano");
				if (attackRoll && damageRoll) {
					attackRoll.parts[0][1] = "";
					attackRoll.parts[1][0] = "";
					damageRoll.parts[1][0] = "";
					updates["system.rolls"] = [attackRoll, damageRoll];
				}
			}
		}
		// else {
		// 	try {
		// 		let attack = actorData.builder.attributes?.attack?.value ?? 0;
		// 		let damage = actorData.builder.attributes?.damage?.value ?? 0;
		// 		if (data.system.rolls) {
		// 			let attackRoll = data.system.rolls.find((r) => r.type === "ataque");
		// 			let damageRoll = data.system.rolls.find((r) => r.type === "dano");
		// 			if (attackRoll && damageRoll) {
		// 				attackRoll.parts = [["1d20", "", ""], ["", "", ""], [attack, "", ""]];
		// 				let wroll = damageRoll.parts[0][0];
		// 				damageRoll.parts = [[`${wroll}+${damage}`, "", ""], ["", "", ""]];
		// 				updates["system.rolls"] = [attackRoll, damageRoll];
		// 			}
		// 		}
		// 	} catch(error) {
		// 		console.error(error);
		// 	}
		// }
		return updates;
	}

	/* -------------------------------------------- */

	async _onCreateOwnedRace(data, actorData, isNPC) {
		const updates = {};
		const changes = Object.fromEntries(
			Object.entries(this.system.atributos).map(([key, data]) => [`system.atributos.${key}.racial`, data])
		);
		const items = [];
		const grantedItems = [];

		const openRaces = game.settings.get("tormenta20", "openRaces");
		const { atributosDinamicos, grants } = this.system;
		if (atributosDinamicos.value.size || openRaces) {
			const description = openRaces ? "Distribua os atributos da sua raça" : atributosDinamicos.description;
			const atributosList = openRaces ? Object.keys(CONFIG.T20.atributos) : atributosDinamicos.value;
			await foundry.applications.api.DialogV2.wait({
				window: {
					contentClasses: ["standard-form", "attribute-config"],
					title: "Atributos Dinâmicos"
				},
				position: { width: 400 },
				content: await foundry.applications.handlebars.renderTemplate(
					"systems/tormenta20/templates/apps/dynamic-attributes-dialog.hbs",
					{
						config: CONFIG.T20,
						description,
						atributosList
					}
				),
				buttons: [
					{
						action: "apply",
						label: game.i18n.localize("T20.Apply"),
						callback: (event, button) => {
							const fd = new foundry.applications.ux.FormDataExtended(button.form);
							const atributos = fd.object;
							for (const [key, value] of Object.entries(atributos)) {
								const base = openRaces ? 0 : this.system.atributos[key];
								changes[`system.atributos.${key}.racial`] = base + (value ?? 0);
							}
						}
					}
				]
			});
		}
		this.actor.update(changes);

		// Importa poderes raciais
		for (const grant of grants) {
			for (const choice of grant.choices) {
				const item = await fromUuid(choice.uuid);
				if (!item) continue;
				items.push(item.toObject());
				grantedItems.push(item.id);
			}
		}
		if (items.length) {
			await ItemT20.createDocuments(items, { keepId: true, parent: this.parent, pack: this.actor.pack });
			updates["flags.tormenta20.grantedItems"] = grantedItems;
		}
		return updates;
	}

	/* -------------------------------------------- */

	static async createDialog(data = {}, createOptions = {}, options = {}) {
		options.classes = [...(options.classes ?? []), "dialog-item-create"];
		return super.createDialog(data, createOptions, options);
	}

	/* -------------------------------------------- */
	/*  Gameplay Mechanics                          */
	/* -------------------------------------------- */

	/**
	 * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
	 * @param {boolean} [configureDialog]     Display a configuration dialog for the item roll, if applicable?
	 * @param {string} [rollMode]             The roll display mode with which to display (or not) the card
	 * @param {boolean} [createMessage]       Whether to automatically create a chat message (if true) or simply return
	 *                                        the prepared chat message data (if false).
	 * @return {Promise<ChatMessage|object|void>}
	 */
	async roll({ configureDialog = true, rollMode, createMessage = true, extra = {} } = {}) {
		const item = this.clone({ keepId: true });
		rollMode = game.settings.get("core", "rollMode");
		const equipmentSlots = game.settings.get("tormenta20", "equipmentSlots");
		const id = this.system; // Item system data
		const actor = this.actor;

		let createMeasuredTemplate;
		const resource = id.consume || {}; // Resource consumption

		if (
			item.type === "arma"
			&& item.system.propriedades.ada
			&& (equipmentSlots ? parseInt(id.equipado2.slot) === 12 : id.equipado === 2)
		) {
			item.system.rolls.forEach((r) => {
				if (r.type === "dano" && r.adaptavel) r.parts[0][0] = r.adaptavel;
			});
		}

		// Consume a linked (non-ammo) resource
		let consumeResource = !!resource.target && resource.type === "attribute";
		// Consume item quantity
		let consumeSelf = this.type === "consumivel";
		let consumeQuantity = ["ammo", "material"].includes(resource.type) && resource.target;
		// Consume mana
		let consumeMana = id.ativacao?.custo > 0;
		let hasManaCost = id.ativacao?.custo > 0;
		let options = {};
		let configuration = {};
		if (configureDialog) {
			configuration = await AbilityUseDialog.create(item);
			// configuration = await new AbilityUseDialog(item).render(true);
			if (!configuration) return;

			options = configuration;
			// Determine consumption preferences
			// createMeasuredTemplate = Boolean(configuration.placeTemplate);
			// consumeSelf = Boolean(configuration.consumeSelf);
			// consumeQuantity = Boolean(configuration.consumeUse);
			// consumeResource = Boolean(configuration.consumeResource);
			// consumeMana = Boolean(configuration.consumeMana);
			rollMode = configuration.rollMode ?? rollMode;
		} else {
			let itActive = this.actor.effects.filter((ef) => ef.getFlag("tormenta20", "onuse") && !ef.disabled);
			let acActive = this.effects.filter((ef) => ef.getFlag("tormenta20", "onuse") && !ef.disabled);
			let active = itActive.concat(acActive);
			const relate = {
				atributo: "ability",
				pericia: "skill",
				arma: "attack",
				magia: "spell",
				poder: "power",
				consumivel: "consumable",
				equipamento: "equipment"
			};
			let efType = relate[item.type];
			active = active.filter((ef) => ef.flags.tormenta20[efType] || ef.flags.tormenta20.self);
			configuration.aprs = active.reduce((o, ef) => {
				o[ef.id] = { aplica: 1, custo: ef.flags.tormenta20.custo || "0" };
				return o;
			}, {});
			options = applyOnUseEffects(item, configuration);
		}
		consumeMana = consumeMana ? consumeMana : consumeMana != item.system.ativacao?.custo > 0;
		hasManaCost = hasManaCost ? hasManaCost : hasManaCost != item.system.ativacao?.custo > 0;

		if (!foundry.utils.isEmpty(extra) || configuration.bonus || configuration.bonusdano) {
			item.system.rolls.forEach((r) => {
				if (r.type === "ataque") {
					if (!["", "0", undefined].includes(configuration.bonus)) r.parts.push([configuration.bonus, ""]);
					if (!["", "0", undefined].includes(extra.pericia)) r.parts[1][0] = extra.pericia;
					if (!["", "0", undefined].includes(extra.atributoAtq)) r.parts[1][1] = extra.atributoAtq;
					if (extra?.atq?.match(/^=/))
						r.parts = [
							["1d20", ""],
							[extra.atq.replace("=", ""), ""]
						];
					else if (!["", "0", undefined].includes(extra.atq)) r.parts.push([extra.atq, ""]);
				} else if (r.type === "dano") {
					const danoBase = r.parts[0][1] ?? "";
					if (!["", "0", undefined].includes(configuration.bonusdano)) {
						r.parts.push([configuration.bonusdano, danoBase]);
					}
					if (!["", "0", undefined].includes(extra.dadoDano)) r.parts[0][0] = extra.dadoDano;
					if (!["", "0", undefined].includes(extra.atributoDano)) r.parts[1][0] = `@${extra.atributoDano}`;
					if (extra?.dano?.match(/^=/)) r.parts = [[extra.dano.replace("=", ""), ""]];
					else if (!["", "0", undefined].includes(extra.dano)) r.parts.push([extra.dano, ""]);
				}
			});

			if (extra?.multCritico?.match(/^=/)) item.system.criticoX = Number(extra.multCritico.replace("=", ""));
			else if (Number(extra.multCritico)) item.system.criticoX += Number(extra.multCritico);
			if (extra?.margemCritico?.match(/^=/)) item.system.criticoM = extra.margemCritico.replace("=", "");
			else if (Number(extra.margemCritico)) item.system.criticoM += Number(extra.margemCritico);
		}

		// Execute Rolls
		options.rolls = [];
		item.system.rolled = {};
		if (item.system.rolls.some((r) => r.type === "ataque" && r.parts?.[0]?.[0])) {
			await item.rollAttack({ options: options });
		}
		if (item.system.rolls.some((r) => r.type === "formula" && r.parts?.[0]?.[0])) {
			await item.rollFormula({ options: options });
		}
		if (item.system.rolls.some((r) => r.type === "dano" && r.parts?.[0]?.[0])) {
			await item.rollDamage({ options: options });
		}

		options.hasManaCost = hasManaCost;
		// Determine whether the item can be used by testing for resource consumption
		if (!options.truque && consumeMana) {
			consumeMana = Math.max(item.system.ativacao.custo, 1);
		} else consumeMana = false;

		const consumeSettings = consumeResource || consumeMana || consumeQuantity || consumeSelf;
		if (consumeSettings) {
			const usage = item._getUsageUpdates({
				consumeResource,
				consumeMana,
				consumeQuantity,
				consumeSelf
			});
			if (!usage) return;
			const { actorUpdates, itemsUpdate, itemUpdates, resourceUpdates, manaUpdate } = usage;

			// Commit pending data updates
			if (!foundry.utils.isEmpty(itemsUpdate)) {
				this.actor.updateEmbeddedDocuments("Item", itemsUpdate);
			}
			if (!foundry.utils.isEmpty(itemUpdates)) {
				itemUpdates._id = this.id;
				this.actor.updateEmbeddedDocuments("Item", [itemUpdates]);
			}
			if (!foundry.utils.isEmpty(manaUpdate)) {
				this.actor.spendMana(manaUpdate.value, 0, false);
			}
			if (!foundry.utils.isEmpty(resourceUpdates)) {
				this.actor.update(resourceUpdates);
			}
		}

		// Create or return the Chat Message data
		if (configuration.brew) {
			let potion = "T20.ConsumableSubtypePotion";
			let icon = "pocao";
			if (item.system.area) {
				potion = "T20.ConsumableSubtypeGranade";
				icon = "pocao-granada";
			}
			if (item.system.alvo.match(/objeto/)) {
				potion = "T20.ConsumableSubtypeOil";
				icon = "pocao-oleo";
			}
			let potionData = { ...item.system };
			potionData.tipo = "potion";
			potionData.qtd = 1;
			potionData.espacos = 0.5;
			potionData.rolls = item.system.rolls.map((m) => m.toObject(false));
			potionData.preco = 30 * item.system.ativacao.custo ** 2;
			potionData.ativacao.custo = 0;

			const itemData = {
				name: game.i18n.format("T20.ConsumableSpellName", {
					item: game.i18n.localize(potion),
					name: item.name
				}),
				type: "consumivel",
				img: `systems/tormenta20/icons/itens/itens-magicos/${icon}.webp`,
				system: potionData
			};
			itemData.system.rolled = [];
			itemData.effects = options.effects.map((efs) => efs[0]);
			await actor.createEmbeddedDocuments("Item", [itemData]);
			let msg = game.i18n.format("T20.ConsumableCreated", {
				actor: item.actor.name,
				name: itemData.name
			});
			return ChatMessage.create({ content: msg });
		}

		// Reference aspects of the item data necessary for usage
		const hasArea = item.hasAreaTarget; // Is the ability usage an AoE?
		// Define follow-up actions resulting from the item usage
		createMeasuredTemplate = hasArea; // Trigger a template creation
		// Initiate measured template creation
		if (canvas.scene && createMeasuredTemplate) {
			const template = game.tormenta20.canvas.AbilityTemplate.fromItem(item);
			if (template) {
				template.drawPreview();
				options.template = {
					area: item.system.area,
					alcance: item.system.alcance
				};
			}
		}

		options.itemId = this.id;
		return item.displayCard({ options, rollMode, createMessage });
	}

	/**
	 * Verify that the consumed resources used by an Item are available.
	 * Otherwise display an error and return false.
	 * @param {boolean} consumeQuantity     Consume quantity of the item if other consumption modes are not available?
	 * @param {boolean} consumeRecharge     Whether the item consumes the recharge mechanic
	 * @param {boolean} consumeResource     Whether the item consumes a limited resource
	 * @param {string|null} consumeSpellLevel The category of spell slot to consume, or null
	 * @param {boolean} consumeUsage        Whether the item consumes a limited usage
	 * @returns {object|boolean}            A set of data changes to apply when the item is used, or false
	 * @private
	 */
	_getUsageUpdates({ consumeQuantity, consumeResource, consumeMana, consumeSelf }) {
		// Reference item data
		const id = this.system;
		const actorUpdates = {};
		const itemUpdates = {};
		const resourceUpdates = {};
		const manaUpdate = {};
		const itemsUpdate = [];

		// Consume Limited Resource
		// consumeResource = false;
		if (consumeResource) {
			let resourceAttr = this.actor?.system.resources[id.consume.target] ?? {};
			if (!foundry.utils.isEmpty(resourceAttr) && resourceAttr.value >= id.consume.amount) {
				let remaining = resourceAttr.value - id.consume.amount;
				let key = `system.resources.${id.consume.target}.value`;
				resourceUpdates[key] = remaining;
			}
			// if ( canConsume === false ) return false;
		}

		// Consume Mana Points
		const autoSpendMana = game.settings.get("tormenta20", "automaticManaSpend");
		if (autoSpendMana && consumeMana && Number.isNumeric(consumeMana)) {
			if (consumeMana && this.actor.system.modificadores.custoPM) {
				consumeMana += Number(this.actor.system.modificadores.custoPM);
			}
			const mana = this.actor.system.attributes.pm;
			const currentMana = mana.value + mana.temp;
			if (currentMana >= consumeMana) {
				manaUpdate.value = consumeMana;
			} else {
				ui.notifications.warn(game.i18n.format("T20.InsufficientMana", { name: this.name }));
				return false;
			}
		}

		// Reduce quantity
		if (consumeQuantity && id.consume.target.length) {
			let resourceItem = this.actor.items.get(id.consume.target);
			let amount = id.consume.amount * (id.consume.mpMultiplier && consumeMana ? consumeMana : 1);
			if (resourceItem.system.qtd >= amount) {
				let remaining = resourceItem.system.qtd - amount;
				itemsUpdate.push({ _id: resourceItem.id, "system.qtd": remaining });
			} else {
				ui.notifications.warn(game.i18n.format("T20.ItemNoUses", { name: resourceItem.name }));
				return false;
			}
		}

		// Reduce self quantity
		if (consumeSelf) {
			const q = Number(id.qtd ?? 1);
			if (q >= 1) {
				// itemsUpdate.push({_id: this.id, "system.qtd": Math.max(q - 1, 0)});
				itemUpdates["system.qtd"] = Math.max(q - 1, 0);
			} else {
				ui.notifications.warn(game.i18n.format("T20.ItemNoUses", { name: this.name }));
				return false;
			}
		}

		// Return the configured usage
		return {
			itemUpdates,
			itemsUpdate,
			actorUpdates,
			resourceUpdates,
			manaUpdate
		};
	}

	/* -------------------------------------------- */

	_prepareLabels() {
		const system = this.system;
		// Activation
		if (foundry.utils.hasProperty(system, "ativacao")) {
			const act = system.ativacao || {};
			if (["minute", "hour", "day"].includes(act.execucao)) {
				this.labels.ativacao = [act.qtd, T20.abilityActivationTypes[act.execucao]].join(" ");
			} else if (["special"].includes(act.execucao)) {
				this.labels.ativacao = act.special;
			} else {
				this.labels.ativacao = T20.abilityActivationTypes[act.execucao];
			}

			if (act && act.custo > 0) this.labels.custoPM = `${act.custo} PM`;

			// Target
			this.labels.alvo = system.alvo;
			this.labels.area = system.area;

			// Range
			this.labels.range = T20.distanceUnits[system.alcance];
			// PRELOCALIZED
			// labels.range = game.i18n.localize(T20.distanceUnits[system.alcance]);
			if (["m", "km"].includes(system.alcance)) {
				this.labels.range = `${system.range.value}${system.alcance}`;
			}

			// Effect
			this.labels.effect = system.efeito;

			// Duration
			const dur = system.duracao || {};
			if (dur.value) {
				this.labels.duration = [dur.value, T20.timePeriods[dur.units]].filterJoin(" ");
			} else {
				this.labels.duration = T20.timePeriods[dur.units];
			}
			if (["special"].includes(dur.units)) {
				this.labels.duration = system.duracao.special;
			}
		}

		// Saving Throw
		if (foundry.utils.hasProperty(system, "resistencia")) {
			const save = system.resistencia || {};
			if (save.txt && save.cd) this.labels.save = `${save.txt} (CD ${save.cd})`;
			else this.labels.save = save.txt;
		}

		if (this.hasAttack) {
			const { rollData, parts } = this.getAttackToHit();
			let toHitLabel = simplifyRollFormula(parts.filterJoin("+"), rollData).trim() || "0";
			if (toHitLabel.charAt(0) !== "-") {
				toHitLabel = `+${toHitLabel}`;
			}
			this.labels.toHit = toHitLabel;
		}

		// Damage Types
		if (this.hasDamage) {
			const rollData = this.getRollData();
			let dano = system.rolls.find((r) => r.type === "dano") || {};
			if (dano.parts) {
				const formula = dano.parts
					.filter(([p]) => p !== "")
					.map(([d]) => d)
					.join(" + ")
					.replace(/\+ -/g, "- ");
				this.labels.dano = simplifyRollFormula(formula, rollData, { });
				this.labels.damageTypes = dano.parts.map((d) => T20.damageTypes[d[1]]).join(", ");
			}
		}

		// Weapons
		if (this.type === "arma") {
			if (system.criticoX === 2) this.labels.critico = system.criticoM;
			else this.labels.critico = `${system.criticoM}/${system.criticoX}x`;
		}
		// Spells and Abilities
		else if (this.type === "magia" || this.type === "poder") {
			const hTags = {
				ativacao: "T20.ActivationCost",
				range: "T20.Range",
				target: "T20.Target",
				area: "T20.Area",
				effect: "T20.Effect",
				duracao: "T20.Duration",
				save: "T20.Resistance"
			};

			for (let [h, tag] of Object.entries(hTags)) {
				hTags[h] = game.i18n.localize(tag);
			}
			this.labels.header = "";
			this.labels.header += this.labels.ativacao ? `<b>${hTags.ativacao}:</b> ${this.labels.ativacao}; ` : "";
			this.labels.header += this.labels.range ? `<b>${hTags.range}:</b> ${this.labels.range}; ` : "";
			this.labels.header += this.labels.alvo ? `<b>${hTags.target}:</b> ${this.labels.alvo}; ` : "";
			this.labels.header += this.labels.area ? `<b>${hTags.area}:</b> ${this.labels.area}; ` : "";
			this.labels.header += this.labels.effect ? `<b>${hTags.effect}:</b> ${this.labels.effect}; ` : "";
			this.labels.header += this.labels.duration ? `<b>${hTags.duracao}:</b> ${this.labels.duration}; ` : "";
			this.labels.header += this.labels.save ? `<b>${hTags.save}:</b> ${this.labels.save}; ` : "";
			if (this.type === "magia") {
				this.labels.tipo = T20.spellType[system.tipo];
				this.labels.nivel = game.i18n.format("T20.SpellLevel", { lvl: system.circulo });
				this.labels.escola = T20.spellSchools[system.escola];
				this.labels.materiais = system.meteriais?.value ?? null;
			} else if (this.type === "poder") {
				this.labels.tipo = T20.powerType[system.tipo];
				this.labels.subtipo = system.subtipo;
			}
		}
		// Equipment
		else if (this.type === "equipamento") {
			this.labels.armadura = system.armadura.valor
				? `${system.armadura.valor} ${game.i18n.localize("T20.Defesa")}`
				: "";
		}
	}

	/* -------------------------------------------- */

	/**
	 * Display the chat card for an Item as a Chat Message
	 * @param {object} options          Options which configure the display of the item chat card
	 * @param {string} rollMode         The message visibility mode to apply to the created card
	 * @param {boolean} createMessage   Whether to automatically create a ChatMessage entity (if true), or only return
	 *                                  the prepared message data (if false)
	 */
	async displayCard({ options, rollMode, createMessage = true } = {}) {
		// Basic template rendering data
		const token = this.actor.token;
		let rolls = [];

		let manaCost = Math.max(this.system.ativacao?.custo, 0) || (options.hasManaCost ? 1 : null);
		if (this.parent) {
			const extraCost = this.parent.system.modificadores.custoPM;
			manaCost += extraCost;
		}
		if (options.truque) manaCost = 0;
		else if (options.halfCost) manaCost = Math.floor(manaCost / 2);

		const templateData = {
			actor: this.actor,
			tokenId: token?.uuid || null,
			itemId: options.itemId,
			item: this,
			custo: manaCost,
			system: await this.getChatData(),
			labels: this.labels,
			truque: options.truque,
			onUseEffects: options.onUseEffects,
			effects: options.effects,
			placeTemplate: options.template,
			rolls: []
		};

		if (this.system.rolled) {
			for (let [key, roll] of Object.entries(this.system.rolled)) {
				roll.tipo = roll.options.type === "damage" || roll.dice[0]?.faces !== 20 ? "roll--dano" : "";
				roll.options.title = key || "";
				await roll.render().then((r) => {
					templateData.rolls.push({ template: r, roll: roll });
				});
			}
			rolls = Object.values(this.system.rolled);
		}

		// Render the chat card template
		let template = "systems/tormenta20/templates/chat/chat-card.hbs";
		const html = await foundry.applications.handlebars.renderTemplate(template, templateData);

		// Create the ChatMessage data object
		const chatData = {
			user: game.user.id,
			rolls,
			content: html,
			flavor: options.chatFlavor || this.system.chatFlavor || "",
			speaker: ChatMessage.getSpeaker({ actor: this.actor }),
			flags: {
				"core.canPopout": true,
				"tormenta20.onUseEffects": options.onUseEffects,
				"tormenta20.effects": options.effects,
				"tormenta20.itemData": this.system,
				"tormenta20.template": options.template
			}
		};

		// Apply the roll mode to adjust message visibility
		ChatMessage.applyRollMode(chatData, rollMode || game.settings.get("core", "rollMode"));

		// Create the Chat Message or return its data
		return createMessage ? ChatMessage.create(chatData) : chatData;
	}

	/* -------------------------------------------- */

	async getChatData(htmlOptions = { async: true }) {
		const system = foundry.utils.deepClone(this.system);
		// Rich text description
		system.description = system.description || {
			value: "",
			chat: "",
			unidentified: ""
		};
		system.description.value = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
			system.description.value,
			htmlOptions
		);

		if (this.type === "magia" || (this.type === "consumivel" && ["scroll", "potion"].includes(system.subtipo))) {
			const headerTags = {
				ativacao: "T20.ActivationCost",
				range: "T20.Range",
				target: "T20.Target",
				duracao: "T20.Duration",
				save: "T20.Resistance"
			};
			system.spellHeader = Object.entries(this.labels)
				.reduce((acc, [key, value]) => {
					if (value && foundry.utils.hasProperty(headerTags, key)) {
						const tag = game.i18n.localize(headerTags[key]);
						acc.push(`<b>${tag}:</b> ${value};`);
					}
					return acc;
				}, [])
				.join(" ");
		}
		return system;
	}

	/* -------------------------------------------- */
	/*  Item Rolls - Attack, Damage, Saves, Checks  */
	/* -------------------------------------------- */

	/**
	 * Place an attack roll using an item (weapon, feat, spell, or equipment)
	 * Rely upon the d20Roll logic for the core implementation
	 *
	 * @param {object} options        Roll options which are configured and provided to the d20Roll function
	 * @return {Promise<Roll|null>}   A Promise which resolves to the created Roll instance
	 */
	async rollAttack({ options = {} }) {
		const itemData = this.system;
		this.actor.flags.tormenta20 || {};
		options.type = "attack";
		// get the parts and rollData for this item's attack
		for (let r of itemData.rolls.filter((i) => i.type === "ataque")) {
			// Get roll data
			const { parts, rollData } = this.getAttackToHit();
			const title = this.name;
			// r.parts = r.parts.map(p=> [p[0] || p])[0].concat(parts);
			parts.unshift(r.parts[0][0]);

			// Handle ammunition consumption
			// TODO

			// Compose roll options
			const rollConfig = foundry.utils.mergeObject(
				{
					parts: parts,
					actor: this.actor,
					data: rollData,
					title: title,
					flavor: title,
					event: event
				},
				options
			);

			// Expanded critical hit thresholds
			rollConfig.critical = itemData.criticoM;

			// Invoke the d20 roll helper
			const roll = await d20Roll(rollConfig);
			if (roll === false) return null;
			roll._critical = roll.terms[0].total >= itemData.criticoM;
			roll._fumble = roll.terms[0].total === 1;

			itemData.rolled[r.name] = roll;
		}
	}

	/* -------------------------------------------- */

	/**
	 * Place an attack roll using an item (weapon, feat, spell, or equipment)
	 * Rely upon the d20Roll logic for the core implementation
	 *
	 * @return {Promise<Roll>}   A Promise which resolves to the created Roll instance
	 */
	async rollDamage({ critical = false, event = null, options = {} } = {}) {
		const itemData = this.system;
		const actorData = this.actor.system;
		const flags = this.actor.flags.tormenta20 || {};
		let pericia;
		let lancinante = false;
		options.type = "damage";
		if (this.type === "arma") {
			critical = itemData.rolled?.Ataque?._critical || false;
			pericia = itemData.rolls.find((i) => i.type === "ataque")?.parts[1][0];
			lancinante = Object.values(itemData.upgrades)?.includes("lancinating");
		}
		for (let r of itemData.rolls.filter((i) => i.type === "dano")) {
			const isHealing = r.parts.some((p) => p[1] === "curapv");
			const perda = r.parts.some((p) => p[1] === "perda");
			const isSpell = this.type === "magia";
			const isAlchemical = this.type === "consumivel" && this.system.tipo === "alchemy";
			const parts = r.parts.map(([dano, tipo, extra]) => {
				if (["curatpv", "curapm", "curatpm", "perda"].includes(tipo)) {
					return [dano, tipo, extra];
				}
				if (dano === "padrao") {
					const { empunhadura, proposito } = this.system;
					const { for: forca, des } = actorData.atributos;
					const usarAcuidade =
						(game.settings.get("tormenta20", "lightFinesseWeapons") || flags?.acuidade) && des.value > forca.value;
					switch (proposito) {
						case "disparo":
							dano = flags?.estiloDisparo ? "@des" : "";
							break;
						case "arremesso":
							dano = usarAcuidade ? "@des" : "@for";
							break;
						case "corpo-a-corpo":
						case "corpo-a-corpo-arremesso":
						default:
							dano = usarAcuidade && empunhadura === "leve" ? "@des" : "@for";
					}
				}
				return [dano, tipo, extra];
			});
			if (isHealing) {
				const bonuses = foundry.utils.getProperty(actorData, "modificadores.cura") || {};
				if (bonuses.geral?.filter(Boolean).length) parts.push(["@curaGeral", "", ""]);
				if (isSpell && bonuses.mag?.filter(Boolean).length) parts.push(["@curaMagica", "", ""]);
				else if (isAlchemical && bonuses.alq?.filter(Boolean).length) parts.push(["@danoALQ", "", ""]);
			} else if (!perda) {
				const bonuses = foundry.utils.getProperty(actorData, "modificadores.dano") || {};
				if (bonuses.geral?.filter(Boolean).length) parts.push(["@dano", "", ""]);

				if (pericia === "luta" && bonuses.cac?.filter(Boolean).length) parts.push(["@danoCAC", "", ""]);
				else if (pericia === "pont" && bonuses.ad?.filter(Boolean).length) parts.push(["@danoAD", "", ""]);

				if (isSpell && bonuses.mag?.filter(Boolean).length) parts.push(["@danoMagico", "", ""]);
				else if (isAlchemical && bonuses.mag?.filter(Boolean).length) parts.push(["@danoALQ", "", ""]);
			}

			itemData.rolled[r.name] = await damageRoll({
				rd: r.rd,
				actor: this.actor,
				critical: critical ?? false,
				criticalMultiplier: itemData.criticoX,
				lancinante,
				data: this.getRollData(),
				event,
				parts,
				title: this.name,
				flavor: this.name,
				...options
			});
		}
		// return result;
	}

	/* -------------------------------------------- */

	/**
	 * Place an attack roll using an item (weapon, feat, spell, or equipment)
	 * Rely upon the d20Roll logic for the core implementation
	 *
	 * @return {Promise<Roll>}   A Promise which resolves to the created Roll instance
	 */
	async rollFormula(options = {}) {
		const itemData = this.system;
		this.actor.system;
		const rollData = this.getRollData();
		// Invoke the roll and submit it to chat
		for (let r of itemData.rolls.filter((i) => i.type === "formula")) {
			// rolls[r.name] =
			let temp = new Roll(r.parts[0][0], rollData);
			itemData.rolled[r.name] = await temp.roll();
		}
	}
}

class ChoicesDialog extends Dialog {
	constructor(item, dialogData = {}, options = {}) {
		super(dialogData, options);
		this.options.classes.push(...["tormenta20", "choices-form"]);
	}

	static async create(list = [], source, somefing) {
		/* HELPERS */
		function getInputType(key) {
			switch (key) {
				case "items":
					return "select";
				case "x":
					return "checkbox";
				case "w":
					return "radiobox";
				default:
					return "input";
			}
		}

		function getOptions(key, type, source) {
			switch (key) {
				case "items":
					return source.items.filter((i) => i.type == type).map((i) => ({ label: i.name, value: i.name }));
				case "x":
					return "checkbox";
				case "w":
					return "radiobox";
				default:
					return [];
			}
		}

		// Prepare data
		let choices = [];
		for (let c of list) {
			choices.push({
				type: getInputType(c.key[1]),
				label: c.label,
				name: `${c.id}.${c.value[0]}`, // aeId.{{key}}
				options: getOptions(c.key[1], c.key[2], source)
			});
		}

		// Prepare dialog form data
		const data = {
			parent: source,
			choices: choices,
			errors: []
		};

		// Render the ability usage template
		const html = await foundry.applications.handlebars.renderTemplate(
			"systems/tormenta20/templates/apps/choices-dialog.hbs",
			data
		);

		return await new Promise((resolve) => {
			const dlg = new this(source, {
				title: game.i18n.localize("T20.Choices"),
				content: html,
				buttons: {
					ok: {
						label: "OK",
						callback: (html) => {
							const fd = new foundry.applications.ux.FormDataExtended(html[0].querySelector("form"));
							resolve(fd.object);
						}
					}
				},
				default: "ok",
				close: () => resolve(null)
			});

			// dlg.options.width = 600;
			// dlg.position.width = 600;
			dlg.render(true);
		});
	}
}

/**
 * Extend the base Actor class to implement additional system-specific logic.
 */
class ActorT20 extends Actor {
	static getDefaultArtwork(itemData) {
		let img = this.DEFAULT_ICON;
		if (itemData.type === "npc") {
			img = "systems/tormenta20/icons/svg/orc-head.svg";
		} else if (itemData.type === "simple") {
			img = "systems/tormenta20/icons/svg/portrait.svg";
		} else if (itemData.type === "bases") {
			img = "systems/tormenta20/icons/svg/castle.svg";
		} else if (itemData.type === "hazard") {
			img = "icons/svg/hazard.svg";
		}
		return { img, texture: { src: img } };
	}

	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/**
	 * Provide an object which organizes all augmenting ActiveEffects by their type
	 * @type {Object<documents.ActiveEffect[]>}
	 */
	get aprimoramentosTypes() {
		const tipos = ["arma", "atributo", "consumivel", "magia", "pericia", "poder"];
		const types = Object.fromEntries(game.system.documentTypes.Item.map((t) => [t, []]));
		for (let i of this.effects.values()) {
			if (!i.getFlag("tormenta20", "onuse")) continue;
			for (let j of tipos) {
				if (i.getFlag("tormenta20", j)) types[i.type].push(i);
			}
		}
		return types;
	}

	get modifiedFields() {
		// appliedEffects: efeitos ativos do próprio ator + dos itens (substitui o antigo
		// comportamento de legacyTransferral, que copiava os efeitos de item para o ator).
		return this.appliedEffects.reduce((acc, ef) => {
			if (ef.modifiesActor) {
				for (let ch of effectChanges(ef)) {
					if ([3, 4].includes(ch.value)) continue;
					if (!acc[ch.key]) acc[ch.key] = [];
					acc[ch.key].push({ label: ef.name, value: ch.value, mode: changeMode(ch) });
				}
			}
			return acc;
		}, {});
	}

	/* -------------------------------------------- */

	/**
	 * Coleta os efeitos deste ator incluindo os efeitos transferíveis dos itens.
	 * No v14, sem CONFIG.ActiveEffect.legacyTransferral, os efeitos de item não são mais
	 * copiados para actor.effects; esta função reproduz aquela coleção para a lógica que
	 * ainda depende de "todos os efeitos do ator" (ex.: efeitos onuse de poderes).
	 * NOTA: validar em runtime (personagem com poder que concede bônus condicional/onuse).
	 * @returns {ActiveEffect[]}
	 */
	_allActorEffects() {
		const effects = [...this.effects];
		for (const item of this.items) {
			for (const effect of item.effects) {
				if (effect.transfer) effects.push(effect);
			}
		}
		return effects;
	}

	/* -------------------------------------------- */

	get defenseFormula() {
		// later ...@bonus
		if (this.type === "character") {
			return ["@base", "@atributo", "@armadura", "@escudo", "@outros", "@condi"];
		}
		return ["@base", "@outros", "@condi"];
	}

	/* -------------------------------------------- */

	get dcFormula() {
		// later ...@bonus
		if (this.type === "character") {
			return ["@base", "@meionivel", "@atributo", "@outros"];
		} else if (this.type === "npc") {
			return ["@base", "@outros"];
		}
		return ["@base", "@outros"];
	}

	/* -------------------------------------------- */

	get encumbranceFormula() {
		// later ...@bonus
		if (this.type === "character") {
			return ["@base", "@atributo"];
		} else if (this.type === "npc") {
			return ["@base"];
		}
		return ["@base"];
	}

	/* -------------------------------------------- */

	get nivel() {
		return this.items.reduce((acc, item) => {
			if (item.type === "classe") {
				const classLevels = parseInt(item.system.niveis) || 1;
				acc += classLevels;
			}
			return acc;
		}, 0);
	}

	/* -------------------------------------------- */

	get pda() {
		return this.itemTypes.equipamento.reduce((acc, item) => {
			if (item.system.equipado) {
				acc += parseInt(item.system.armadura.penalidade);
			}
			return acc;
		}, 0);
	}

	get treino() {
		return this.system.attributes?.treino;
	}

	/* -------------------------------------------- */
	/*  Data Preparation                            */
	/* -------------------------------------------- */

	/** @override */
	prepareData() {
		super.prepareData();

		// Iterate over owned items and recompute attributes that depend on prepared actor data
		this.items.forEach((item) => item.prepareFinalAttributes());
	}

	/* -------------------------------------------- */

	/**
	 * Calculate HP and MP recovery by rest.
	 * @private
	 */
	async descanso(modificador = 1, modPV = 0, modPM = 0, curaCP = false, curaAC = false, toChat = true) {
		let descricao = "";
		const nivel = this.system.attributes.nivel.value;
		let rec = {
			pv: 0,
			pm: 0
		};

		let cp = curaCP ? 2 : 1;
		let ac = curaAC ? 2 : 1;
		let recuperarPV = Math.floor(nivel * (modificador + modPV) * cp);
		rec.pv = recuperarPV;
		await this.modifyTokenAttribute("attributes.pv", recuperarPV, true, true);

		let recuperarPM = Math.floor(nivel * (modificador + modPM) * ac);
		rec.pm = recuperarPM;
		await this.modifyTokenAttribute("attributes.pm", recuperarPM, true, true);

		descricao = `${this.name} recuperou ${rec.pv} PV e ${rec.pm} PM.`;

		if (!toChat) return descricao;

		let content = {
			item: {
				name: game.i18n.localize("T20.Rest"),
				img: "icons/svg/regen.svg"
			},
			system: {
				description: {
					value: `<p>${descricao}</p>`
				}
			}
		};
		let template = "systems/tormenta20/templates/chat/chat-card.hbs";
		const html = await foundry.applications.handlebars.renderTemplate(template, content);
		const chatData = {
			user: game.user.id,
			type: CONST.CHAT_MESSAGE_STYLES.OTHER,
			content: html
		};
		ChatMessage.create(chatData);
	}

	/* -------------------------------------------- */
	/*  Methods                                     */
	/* -------------------------------------------- */

	/** @inheritdoc */
	getRollData() {
		// const data = foundry.utils.deepClone(super.getRollData());
		const data = { ...this.system };
		// super.getRollData();
		// Set abilities abbreviation
		for (let abl in data.atributos) {
			data[abl] = data.atributos[abl].value;
		}

		// Set level abbreviation
		data.nivel = Number(this.system.attributes?.nivel?.value || 1);
		data.patamar = CONFIG.T20.patamares.findIndex((nivel) => data.nivel <= nivel) + 1;
		data.meionivel = Math.floor(data.nivel / 2) || 0;
		if (this.type === "npc") {
			let nd = data.attributes.nd;
			const crData = T20.NPCParams(nd);
			data.ndtreinado = crData.topskill || 0;
			data.ndsemtreino = crData.botskill || 0;
		}
		// Set class level
		data.nvl = this.items.reduce(function (cn, it) {
			if (it.type === "classe") cn[it.name.slugify()] = it.system.niveis;
			return cn;
		}, {});
		// Set power type modifiers (ie.: tormenta, distinction)
		const powers = {};
		for (const item of this.items.values()) {
			const tags = item.system?.rolltags ?? [];
			for (const tag of tags) {
				const key = tag.capitalize();
				powers[key] = (powers[key] ?? 0) + 1;
			}
		}

		for (const [key, v] of Object.entries(powers)) {
			for (const divisor of [2, 3, 4]) {
				const val = Math.floor((v - 1) / divisor);
				// THE CONVENTION FOR TAGS IS PASCAL CASE `ChapeuPreto`.
				powers[`${key}${divisor}`] = val;
			}
		}
		foundry.utils.mergeObject(data, powers);

		data.circulo = this.items.filter((i) => i.type === "magia").reduce((max, m) => Math.max(max, m.system.circulo), 0);

		// Set casting ability
		/* TODO CLASS SPELLBOOK */
		const atbchave = this.system.attributes.conjuracao;
		if (atbchave) data.atributoChave = this.system.atributos[atbchave]?.value ?? 0;

		// Set defense bonuses modifiers
		if (this.system.defesa) {
			let defMods = this.system.modificadores?.defesa || {};
			data.armadura = defMods.armadura || 0;
			data.armaduraLeve = defMods.armaduraLeve || 0;
			data.armaduraPesada = defMods.armaduraPesada || 0;
			data.escudo = defMods.escudo || 0;
		}

		// Set skill bonuses modifiers
		if (this.system.pericias) {
			let skillMods = this.system.modificadores?.pericias || {};
			const size = this.system.tracos.tamanho;

			data.treino = this.system.attributes?.treino || 0;
			data.tamanho = CONFIG.T20.sizeModifiers[size];
			data.pda = this.system.attributes?.defesa.pda || 0;

			data.pericia = simplifyRollFormula(skillMods.geral?.filter(Boolean).join(" + "), data) || 0;
			data.semataque = simplifyRollFormula(skillMods.semataque?.filter(Boolean).join(" + "), data) || 0;
			data.ataque = simplifyRollFormula(skillMods.ataque?.filter(Boolean).join(" + "), data) || 0;
			data.resistencia = simplifyRollFormula(skillMods.resistencia?.filter(Boolean).join(" + "), data) || 0;

			// Set ability bonuses modifiers
			let ablMods = this.system.modificadores?.atributos || {};
			data.atributo = simplifyRollFormula(ablMods.geral?.filter(Boolean).join(" + "), data) || 0;
			data.fisicos = simplifyRollFormula(ablMods.fisicos?.filter(Boolean).join(" + "), data) || 0;
			data.mentais = simplifyRollFormula(ablMods.mentais?.filter(Boolean).join(" + "), data) || 0;

			// Set damage bonuses modifiers
			let dmgMods = this.system.modificadores?.dano || {};
			data.dano = simplifyRollFormula(dmgMods.geral?.filter(Boolean).join(" + "), data) || 0;
			data.danoMagico = simplifyRollFormula(dmgMods.mag?.filter(Boolean).join(" + "), data) || 0;
			data.danoCAC = simplifyRollFormula(dmgMods.cac?.filter(Boolean).join(" + "), data) || 0;
			data.danoAD = simplifyRollFormula(dmgMods.ad?.filter(Boolean).join(" + "), data) || 0;
			data.danoALQ = simplifyRollFormula(dmgMods.alq?.filter(Boolean).join(" + "), data) || 0;

			let healMods = this.system.modificadores?.cura || {};
			data.curaGeral = simplifyRollFormula(healMods.geral?.filter(Boolean).join(" + "), data) || 0;
			data.curaMagica = simplifyRollFormula(healMods.mag?.filter(Boolean).join(" + "), data) || 0;
		}

		return data;
	}

	/**
	 * Return the amount of experience required to gain a certain character level.
	 * @param level {Number}	The desired level
	 * @return {Number}			 The XP required
	 */
	getLevelExp(nivel) {
		const niveis = T20.xpPorNivel;
		return niveis[Math.min(nivel, niveis.length - 1)];
	}

	/* -------------------------------------------- */

	/**
	 * Add a list of itens to the actor
	 * TODO at Advancement
	 * @param {Array.<ItemT20>} itens - The itens being added to the Actor;
	 * @returns {Promise<ItemT20[]>}
	 **/
	async addEmbeddedItems(items) {
		let itemsToAdd = items;
		if (itemsToAdd.length === 0) return;
		// create the selected items with this actor as parent
		return ItemT20.createDocuments(
			itemsToAdd.map((i) => i.toJSON()),
			{ parent: this }
		);
	}

	/**
	 * Update Actor Attributes following NPC builder guide
	 * @param {String} cr    - The Challenge Rating to get values from;
	 * @param {String} attr  - The attribute being changed;
	 */
	// _setCRAttrs(cr, attr) {
	// 	if (this.type != "npc") return;
	// 	let updateData = {};
	// 	const crData = CONFIG.T20.NPCParams(cr);
	// 	let skills = {};
	// 	skills.fort = this.system.builder.attributes.fort ?? {};
	// 	skills.refl = this.system.builder.attributes.refl ?? {};
	// 	skills.vont = this.system.builder.attributes.vont ?? {};
	// 	const ranks = ["botsave", "midsave", "topsave"];
	// 	const attrs = ["attack", "damage", "defense", "hp", "dc", "topsave", "midsave", "botsave", "skills"];

	// 	if (attr === "all") {
	// 		for (let att of attrs) {
	// 			updateData[`system.builder.attributes.${att}.value`] = crData[att];
	// 			updateData[`system.builder.attributes.${att}.cr`] = cr;
	// 		}
	// 	} else if (attr === "skills") {
	// 		updateData[`system.builder.attributes.${attr}.value`] = crData.topskill;
	// 		updateData[`system.builder.attributes.${attr}.cr`] = cr;
	// 	} else {
	// 		updateData[`system.builder.attributes.${attr}.value`] = crData[attr];
	// 		updateData[`system.builder.attributes.${attr}.cr`] = cr;
	// 	}
	// 	if (["all", "topsave", "midsave", "botsave"].includes(attr)) {
	// 		for (let [key, skill] of Object.entries(skills)) {
	// 			let r = skill.rank ?? 0;
	// 			if (attr === "all" || attr === ranks[r]) {
	// 				updateData[`system.builder.attributes.${key}.value`] = crData[ranks[r]];
	// 				updateData[`system.builder.attributes.${key}.cr`] = cr;
	// 			}
	// 		}
	// 	}
	// 	this.update(updateData);
	// }

	/* -------------------------------------------- */
	/*  Event Handlers                              */
	/* -------------------------------------------- */

	/** @inheritdoc */
	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);
		// console.error("_preCreate");
		// SkillSet
		const system = game.settings.get("tormenta20", "gameSystem");
		const updateData = {};
		switch (system) {
			case "Skyfall":
				// const skills = foundry.utils.mergeObject(this.system.pericias, {
				// 	defe: { value: 0, atributo: "des" },
				// 	ocul: { value: 0, atributo: "int" },
				// });
				// delete skills.mist;

				// this.update({ "system.pericias": skills });
				break;
			default:
				if (!this._stats || this._stats.systemVersion < "1.4.100") {
					// UPDATE ABILITIES TO GOTY
					for (let [key, ability] of Object.entries(this._source.system.atributos)) {
						updateData[`system.atributos.${key}.base`] = Math.floor((ability.value - 10) / 2);
						if (ability.bonus !== 0) updateData[`system.atributos.${key}.bonus`] = ability.bonus / 2;
					}
					// UPDATE NPC DEFENSE TO GOTY
					if (this.type === "npc") {
						updateData["system.attributes.defesa.base"] = 10 + this._source.system.attributes.defesa.outros;
						updateData["system.attributes.defesa.outros"] = 0;
					}
				}
				this.updateSource(updateData);
				break;
		}
		const sourceId = this._stats?.compendiumSource;
		if (!sourceId?.startsWith("Compendium.")) {
			if (["character", "bases"].includes(this.type)) {
				updateData.prototypeToken = { actorLink: true };
			}
		}
		this.updateSource(updateData);
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	async _preUpdate(changed, options, user) {
		await super._preUpdate(changed, options, user);
		if ("pv" in (this.system.attributes || {})) {
			foundry.utils.setProperty(options, "tormenta20.pv", {
				...this.system.attributes.pv
			});
		}
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_onUpdate(changed, options, userId) {
		super._onUpdate(changed, options, userId);
		/* Check Encumbered Status and Add/Remove its ActiveEffect */
		if (game.userId === userId) this._checkEncumbered();

		const { pv } = options?.tormenta20 || {};
		if (pv) {
			const curr = this.system.attributes.pv;
			const changes = {
				pv: curr.value - pv.value,
				temp: curr.temp - pv.temp
			};
			changes.total = changes.pv + changes.temp;
			if (Number.isInteger(changes.total) && changes.total !== 0) this._displayTokenEffect(changes);
		}
	}

	async _checkEncumbered() {
		if (this.type == "character") {
			const ef = this.effects.find((ef) => ef.statuses.has("sobrecarregado"));
			const wasEncumbered = Boolean(ef);
			const isEncumbered = this.system.attributes?.carga?.encumbered;
			if (isEncumbered != wasEncumbered) {
				const effect = await ActiveEffect.fromStatusEffect("sobrecarregado");
				if (isEncumbered && !ef) {
					this.createEmbeddedDocuments("ActiveEffect", [effect.toObject()]);
				} else if (!isEncumbered && ef) {
					this.deleteEmbeddedDocuments("ActiveEffect", [ef._id]);
				}
			}
		}
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_onCreate(data, options, userId) {
		super._onCreate(data, options, userId);
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	async _preCreateDescendantDocuments(parent, collection, data, options, userId) {
		await super._preCreateDescendantDocuments(parent, collection, data, options, userId);
		if (game.userId !== userId) return;
		// Show chat message if condition;
		options.toChat = options.toChat === undefined ? true : options.toChat;
		if (collection === "effects" && options.toChat) {
			const showCard = game.settings.get("tormenta20", "showStatusCards");
			const effect = data.find((doc) => doc.statuses.length);
			if (showCard && effect) {
				game.tormenta20.macros.msgFromJournal(effect.name, "tormenta20.basico", "Condições");
			}
		}
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	async _onCreateDescendantDocuments(parent, collection, documents, data, options, userId) {
		await super._onCreateDescendantDocuments(parent, collection, documents, data, options, userId);

		if (collection === "effect") {
			let effs = documents.filter((ef) => effectChanges(ef).find((ch) => ch.key.match(/^\?/)));
			let choices = [];
			for (let ef of effs) {
				let changes = effectChanges(ef).filter((ch) => ch.key.match(/^\?/));
				let choice = {};
				for (let ch of changes) {
					choice.id = ef.id;
					choice.label = ef.name;
					choice.key = ch.key.split(".");
					choice.value = ch.value.split(".");
					choices.push(choice);
				}
			}
			if (!foundry.utils.isEmpty(choices) && userId === game.userId) {
				let chosen = await ChoicesDialog.create(choices, this);
				chosen = foundry.utils.expandObject(chosen);
				for (let [id, c] of Object.entries(chosen)) {
					let ef = this.effects.find((e) => e.id === id);
					for (let [key, value] of Object.entries(c)) {
						ef.setFlag("tormenta20", key, value);
					}
				}
			}
		}
	}

	/* -------------------------------------------- */
	/*  Gameplay Mechanics                          */
	/* -------------------------------------------- */

	/** @override */
	async modifyTokenAttribute(attribute, value, isDelta, isBar) {
		if (attribute === "attributes.pv" || attribute === "attributes.pm") {
			const hp = foundry.utils.getProperty(this.system, attribute);
			const delta = isDelta ? -1 * value : hp.value + hp.temp - value;
			if (attribute === "attributes.pm") {
				return this.spendMana(delta);
			}
			return this.applyDamage(delta);
		}
		return super.modifyTokenAttribute(attribute, value, isDelta, isBar);
	}

	/* -------------------------------------------- */

	/**
	 * Apply a certain amount of damage or healing to the health pool for Actor
	 * @param {number} amount			 An amount of damage (positive) or healing (negative) to sustain
	 * @param {number} multiplier	 A multiplier which allows for resistance, vulnerability, or healing
	 * @return {Promise<Actor>}		 A Promise which resolves once the damage has been applied
	 */
	async applyDamageV2(roll, multiplier = 1, type = "dano") {
		const { pv, pm } = this.system.attributes;
		const rds = this.system.tracos?.resistencias;
		const rdsEx = Object.entries(rds).reduce((acc, [key, value]) => {
			if (value.excecao) acc[key] = value.excecao;
			return acc;
		}, {});
		const final = {
			damage: 0,
			loss: 0,
			heal: 0,
			tempHP: 0,
			mana: 0,
			manaGain: 0,
			tempMP: 0
		};

		const damage = {};
		let lastOperator = "+";
		for (const { operator, total, options, faces, number } of roll.terms) {
			if (!operator) {
				const flavor = options?.flavor ?? roll.terms[0]?.options.flavor ?? type;
				damage[flavor] ??= {
					value: 0,
					porDado: 0,
					rd: Number(rds[flavor]?.value) || 0
				};
				damage[flavor].value += lastOperator == "+" ? total : total * -1;
				if (faces) damage[flavor].porDado += number;
			} else lastOperator = operator;
		}

		const map = { curapv: "heal", curatpv: "tempHP", curapm: "manaGain", curatpm: "tempMP" };
		Object.entries(map).forEach(([key, value]) => {
			if (damage[key]) {
				final[value] += damage[key].value * -multiplier;
				delete damage[key];
			}
		});
		if (damage.perda) {
			if (multiplier > 0) final.loss += damage.perda.value * multiplier;
			else final.heal += damage.perda.value;
			delete damage.perda;
		}

		let rdIgnorada = Math.abs(roll.options.rd ?? 0);
		function ignoraRD(damageType) {
			const rd = Number(rds[damageType].value);
			rds[damageType].value = Math.max(rd - rdIgnorada, 0);
			rdIgnorada = Math.max(rdIgnorada - rd, 0);
		}

		if (rdIgnorada) ignoraRD("dano");
		if (rds.dano?.value) final.damage -= rds.dano.value;
		for (let [type, dmg] of Object.entries(damage)) {
			let rd = 0;
			// Apply Damage Reduction for each type of damage
			if (type !== "dano") {
				if (rdIgnorada) ignoraRD(type);
				rd = Number(rds[type]?.value ?? 0);
			}

			if (!foundry.utils.isEmpty(rdsEx) && !rdsEx[type]) {
				rd += Number(Object.values(rdsEx)[0]);
			}

			if (multiplier > 0) {
				if (rds[type]?.imunidade) dmg.value = 0;
				else if (rds[type]?.vulnerabilidade) dmg.value = Math.floor(dmg.value * 1.5);
				else if (rds[type]?.danoPorDado) dmg.value += dmg.porDado;
				final.damage += Math.max(dmg.value * multiplier - rd, 0);
			} else final.heal += dmg.value;
		}
		final.damage = Math.max(final.damage, 0);
		// Deduct value from temp attr first
		const hpt = Math.min(pv.temp, final.damage + final.loss);
		const mpt = Math.min(pm.temp, final.mana);
		// Remaining goes to attr
		const dhp = Math.clamp(pv.value + final.heal - (final.damage + final.loss - hpt), pv.min, pv.max);
		const dmp = Math.clamp(pm.value + final.manaGain - (final.mana - mpt), pm.min, pm.max);

		// Update the Actor
		const updates = {
			"system.attributes.pv.temp": pv.temp - hpt + final.tempHP,
			"system.attributes.pv.value": dhp,
			"system.attributes.pm.temp": pm.temp - mpt + final.tempMP,
			"system.attributes.pm.value": dmp
		};

		await this.update(updates);
		await this.displayDamageCard(damage, final, multiplier);
	}

	async displayDamageCard(dmgParts, final, multiplier = 1) {
		const show = game.settings.get("tormenta20", "showDamageCards");
		if (show === "none") return;
		multiplier = Math.sign(multiplier);
		const label = {
			damage: "T20.HP",
			mana: "T20.MP",
			tempHP: "T20.HealingTemp",
			tempMP: "T20.ManaTemp"
		};
		const chatDamage = {};
		for (const [type, value] of Object.entries(final)) {
			if (type === "total") chatDamage.total = value * multiplier;
			else if (value) {
				chatDamage.label = label[type];
				chatDamage.type = type;
				chatDamage.value = value * multiplier;
				if (["heal", "damage"].includes(type)) chatDamage.value *= -1;
			}
		}

		let color = "red";
		if (chatDamage.type === "damage" && chatDamage.value <= 0) color = "health";
		else if (["heal", "damage"].includes(chatDamage.type) && chatDamage.value > 0) color = "heal";
		else if (chatDamage.type === "mana" && chatDamage.value != 0) color = "mana";
		else if (chatDamage.type === "tempHP" && chatDamage.value != 0) color = "hptemp";
		else if (chatDamage.type === "tempMP" && chatDamage.value != 0) color = "mptemp";

		const templateData = {
			actor: this,
			damage: dmgParts,
			chatDMG: chatDamage,
			setting: game.settings.get("tormenta20", "showDamageCards")
		};
		const template = "systems/tormenta20/templates/chat/chat-card-damage.hbs";
		const html = await foundry.applications.handlebars.renderTemplate(template, templateData);

		const chatData = {
			user: game.user.id,
			content: html,
			speaker: ChatMessage.getSpeaker({ actor: this }),
			type: CONST.CHAT_MESSAGE_STYLES.OTHER,
			flags: {
				tormenta20: {
					minimal: true,
					cssClass: `tormenta20 damage-card damage-${color}`
				}
			}
		};

		let rollMode = "publicroll";
		if (this.type === "npc" && show !== "npcs") rollMode = "selfroll";
		ChatMessage.applyRollMode(chatData, rollMode);
		ChatMessage.create(chatData, {});
	}

	async applyDamage(amount = 0, multiplier = 1, applyRD = false) {
		amount = Math.floor(parseInt(amount) * multiplier);
		const pv = this.system.attributes.pv;

		// Prepare Damage Reduction if damage
		const rd = applyRD ? this.system.tracos?.resistencias?.dano?.value || 0 : 0;
		amount = amount > 0 ? Math.max(amount - rd, 0) : amount;

		// Deduct damage from temp HP first
		const tmp = parseInt(pv.temp) || 0;
		const dt = amount > 0 ? Math.min(tmp, amount) : 0;

		// Remaining goes to health
		const dh = Math.clamp(pv.value - (amount - dt), pv.min, pv.max);

		// Update the Actor
		const updates = {
			"system.attributes.pv.temp": tmp - dt,
			"system.attributes.pv.value": dh
		};

		// Delegate damage application to a hook
		// TODO replace this in the future with a better modifyTokenAttribute function in the core
		const allowed = Hooks.call(
			"modifyTokenAttribute",
			{
				attribute: "attributes.pv",
				value: amount,
				isDelta: false,
				isBar: true
			},
			updates
		);

		return allowed !== false ? this.update(updates) : this;
	}

	/* -------------------------------------------- */

	/**
	 * Spend or recover mana points for Actor
	 * @param {number} amount			 An amount of spent (positive) or recover (negative) mana points
	 * @param {number} adjust			 A adjust for the value due to specific conditions
	 * @return {Promise<Actor>}		 A Promise which resolves once the damage has been applied
	 */
	async spendMana(amount = 0, adjust = 0, recover) {
		let spendMana = 0;
		let tmpPMspend;
		let newSptAmount = amount;

		const pm = this.system.attributes.pm;
		const tmpPM = parseInt(pm.temp) || 0;
		if (recover) {
			tmpPMspend = 0;
			newSptAmount = amount;
			spendMana = Math.clamp(pm.value + newSptAmount, 0, pm.max);
		} else {
			amount = Math.floor(parseInt(amount) + adjust);
			newSptAmount = amount;
			// Deduct damage from temp Mana first
			tmpPMspend = newSptAmount > 0 ? Math.min(tmpPM, newSptAmount) : 0;
			// Remove Mana
			spendMana = Math.clamp(pm.value - (newSptAmount - tmpPMspend), 0, pm.max);
		}
		// Update the Actor
		await this.update({
			"system.attributes.pm.temp": tmpPM - tmpPMspend,
			"system.attributes.pm.value": spendMana
		});

		await this.displayDamageCard({}, { mana: amount }, -1);
	}

	/* -------------------------------------------- */

	/**
	 * Roll Teste de Perícia
	 * @param {String} key  The skill ID (e.g. "cura")
	 * @param {Object} options    Options which configure how skill tests are rolled
	 * @return {Promise<Roll>}    A Promise which resolves to the created Roll instance
	 */
	async rollPericia(key, options = {}) {
		options.message ??= true;
		const pericia = this.system.pericias[key];
		const event = options.event;
		let consumeMana = 0;
		let rollMode = game.settings.get("core", "rollMode");

		let rConfig = {};
		const itemData = {
			name: pericia.label,
			type: "pericia",
			parts: ["1d20", String(pericia.value)],
			id: key,
			actor: this,
			system: { ativacao: { custo: 0 } },
			isOwned: true,
			...pericia
		};
		let needsConfiguration;

		const UsageConfig = game.settings.get("tormenta20", "UsageConfig");
		if (UsageConfig === "default") needsConfiguration = !(options.event?.shiftKey ?? false);
		else needsConfiguration = options.event?.shiftKey ?? false;

		let configuration = {};
		if (needsConfiguration) {
			configuration = await AbilityUseDialog.create(itemData);
			if (!configuration) return;
			rConfig = foundry.utils.mergeObject(rConfig, configuration);

			rollMode = configuration.rollMode;
		} else {
			let active = this._allActorEffects().filter(
				(ef) => ef.getFlag("tormenta20", "onuse") && ef.getFlag("tormenta20", "pericia") && !ef.disabled
			);
			configuration.aprs = active.reduce((o, ef) => {
				o[ef.id] = { aplica: 1, custo: ef.flags.tormenta20.custo };
				return o;
			}, {});
			rConfig = applyOnUseEffects(itemData, configuration);
		}

		rConfig.itemData = itemData;

		// Compose roll options
		const rollConfig = foundry.utils.mergeObject(
			{
				parts: itemData.parts,
				actor: this,
				event: event,
				data: this.getRollData(),
				title: itemData.label,
				flavor: itemData.label
			},
			rConfig
		);

		let toInitiative = function (actor) {
			try {
				let combate = game.combats.active;
				if (pericia.label === "Iniciativa" && combate) {
					let roll = rConfig.itemData.rolled;
					let combatente = combate.combatants.find((combatant) => combatant.actor.id === actor.id);
					if (combatente && combatente.initiative === null) {
						combate.setInitiative(combatente.id, roll.total);
						console.log(`Foundry VTT | Iniciativa Atualizada para ${combatente._id} (${combatente.actor.name})`);
					}
				}
			} catch (error) {
				console.error(error);
				console.warn(`Foundry VTT | Erro ao adicionar a Iniciativa, ${actor._id} (${actor.name})`);
			}
		};

		const autoSpendMana = game.settings.get("tormenta20", "automaticManaSpend");
		if (autoSpendMana && rConfig.itemData?.system?.ativacao?.custo) {
			consumeMana = rConfig.itemData.system.ativacao.custo;
		} else consumeMana = false;

		if (consumeMana) {
			const manaUpdate = rConfig.itemData.system.ativacao.custo;
			if (!foundry.utils.isEmpty(manaUpdate)) {
				this.spendMana(manaUpdate, 0, false);
			}
		}
		// LOGS
		if (options.message) {
			options = rConfig;
			options.itemData.rolled = await d20Roll(rollConfig);
			options.effects = configuration.effects ?? [];
			toInitiative(this);
			return this.displayCard({ options, rollMode });
		}
		return await d20Roll(rollConfig);
	}

	/* -------------------------------------------- */

	/**
	 * Roll Teste de Atributo
	 * @param {String} abilityId  The ability ID (e.g. "for")
	 * @param {Object} options    Options which configure how ability tests are rolled
	 * @return {Promise<Roll>}    A Promise which resolves to the created Roll instance
	 */
	async rollAtributo(key, options = {}) {
		options.message ??= true;
		const label = CONFIG.T20.atributos[key];
		const abl = this.system.atributos[key];
		const actor = this;
		const event = options.event ?? {};
		let rollMode = game.settings.get("core", "rollMode");

		// Construct parts
		const parts = ["1d20", `@${key}`];

		// Add global actor bonus GERAL | FISICOS | MENTAIS | KEY
		const bonuses = foundry.utils.getProperty(this.system, "modificadores.atributos") || {};
		if (bonuses.geral?.filter(Boolean).length) parts.push("@atributo");
		if (["for", "des", "con"].includes(key) && bonuses.fisicos?.filter(Boolean).length) parts.push("@fisicos");
		if (["int", "sab", "car"].includes(key) && bonuses.mentais?.filter(Boolean).length) parts.push("@mentais");
		if (bonuses[key]?.filter(Boolean).length) parts.push(...bonuses[key]);

		// Add provided extra roll parts
		if (options.parts?.length > 0) {
			parts.push(...options.parts);
		}
		abl.parts = parts;

		let itemData = {
			name: abl.name,
			type: "atributo",
			parts: parts,
			id: key,
			actor: actor,
			system: { ativacao: { custo: 0 } },
			isOwned: true,
			rollData: abl,
			custo: 0
		};

		let rConfig = {};
		let needsConfiguration;
		const UsageConfig = game.settings.get("tormenta20", "UsageConfig");
		if (UsageConfig === "default") {
			needsConfiguration = !(options.event?.shiftKey ?? false);
		} else {
			needsConfiguration = options.event?.shiftKey ?? false;
		}
		let configuration = {};
		if (needsConfiguration) {
			configuration = await AbilityUseDialog.create(itemData);
			if (!configuration) return;
			rConfig = foundry.utils.mergeObject(rConfig, configuration);

			if (configuration.bonus) parts.push(configuration.bonus);
			rollMode = configuration.rollMode;
		}
		// Aways Active Effect
		else {
			let active = this._allActorEffects().filter(
				(ef) => ef.getFlag("tormenta20", "onuse") && ef.getFlag("tormenta20", "atributo") && !ef.disabled
			);
			configuration.aprs = active.reduce((o, ef) => {
				o[ef.id] = { aplica: 1, custo: ef.flags.tormenta20.custo };
				return o;
			}, {});
			rConfig = applyOnUseEffects(itemData, configuration);
		}
		rConfig.itemData = itemData;
		// rollData
		const rollConfig = foundry.utils.mergeObject(
			{
				parts: parts.filter(Boolean),
				data: this.getRollData(),
				event: event,
				title: game.i18n.format("T20.AbilityPromptTitle", { atributo: label }),
				flavor: game.i18n.localize("T20.AbilityCheck"),
				messageData: { "flags.tormenta20.roll": { type: "ability", key } }
			},
			rConfig
		);

		const autoSpendMana = game.settings.get("tormenta20", "automaticManaSpend");
		let consumeMana = 0;
		if (autoSpendMana && rConfig.itemData?.system?.ativacao?.custo) {
			consumeMana = rConfig.itemData.system.ativacao.custo;
		} else consumeMana = false;

		if (consumeMana) {
			const manaUpdate = rConfig.itemData.system.ativacao.custo;
			if (!foundry.utils.isEmpty(manaUpdate)) {
				this.spendMana(manaUpdate, 0, false);
			}
		}

		if (options.message) {
			options = rConfig;
			options.itemData.rolled = await d20Roll(rollConfig);
			return this.displayCard({ options, rollMode });
		}
		return await d20Roll(rollConfig);
	}

	/* -------------------------------------------- */

	/**
	 * Display the chat card for an Item as a Chat Message
	 * @param {object} options          Options which configure the display of the item chat card
	 * @param {string} rollMode         The message visibility mode to apply to the created card
	 * @param {boolean} createMessage   Whether to automatically create a ChatMessage entity (if true), or only return
	 *                                  the prepared message data (if false)
	 */
	async displayCard({ options, rollMode, createMessage = true } = {}) {
		// Basic template rendering data
		const token = this.getActiveTokens()[0] ?? null;

		let manaCost = Math.max(options.itemData?.system?.ativacao?.custo, 0) || null;
		if (manaCost > 0) {
			const extraCost = this.system.modificadores.custoPM;
			manaCost += extraCost;
		}
		if (options.truque) manaCost = 0;
		else if (options.halfCost) manaCost = Math.floor(manaCost / 2);

		const templateData = {
			actor: this,
			tokenId: token?.uuid || null,
			item: options.itemData,
			custo: manaCost || null,
			onUseEffects: options.onUseEffects,
			effects: options.effects,
			rolls: []
		};

		// Other Template Data
		if (options.itemData.rolled) {
			let roll = options.itemData.rolled;
			await roll.render().then((r) => {
				templateData.rolls.push({ template: r, roll: roll });
			});
		}

		// Render the chat card template
		let template = "systems/tormenta20/templates/chat/chat-card.hbs";
		const html = await foundry.applications.handlebars.renderTemplate(template, templateData);

		// Create the ChatMessage data object
		const chatData = {
			user: game.user.id,
			// type: CONST.CHAT_MESSAGE_STYLES.ROLL,
			rolls: [options.itemData.rolled],
			content: html,
			flavor: options.chatFlavor || "",
			speaker: ChatMessage.getSpeaker({ actor: this }),
			flags: {
				"core.canPopout": true,
				"tormenta20.rollTotal": options.itemData.rolled.total,
				"tormenta20.onUseEffects": options.onUseEffects,
				"tormenta20.effects": options.effects
			}
		};
		// chatData.rolls = options.itemData.rolled;

		// Apply the roll mode to adjust message visibility
		ChatMessage.applyRollMode(chatData, rollMode || game.settings.get("core", "rollMode"));

		// Create the Chat Message or return its data
		if (createMessage) {
			return await ChatMessage.create(chatData);
		}
		return chatData;
	}

	/**
	 * Flash ring & display changes to health as scrolling combat text.
	 * @param {object} changes          Object of changes to hit points.
	 * @param {number} changes.pv		Changes to `pv.value`.
	 * @param {number} changes.temp     The change to `pv.temp`.
	 * @param {number} changes.total    The total change to hit points.
	 * @protected
	 */
	_displayTokenEffect(changes) {
		let key;
		let value;
		if (changes.pv < 0) {
			key = "damage";
			value = changes.total;
		} else if (changes.pv > 0) {
			key = "healing";
			value = changes.total;
		} else if (changes.temp) {
			value = changes.temp;
		}
		if (!value) return;

		const tokens = this.isToken ? [this.token] : this.getActiveTokens(true, true);
		if (!tokens.length) return;

		const pct = Math.clamp(Math.abs(value) / this.system.attributes.pv.max, 0, 1);
		const fill = CONFIG.T20.tokenHPColors[key] ?? "#ffffff";

		for (const token of tokens) {
			if (!token.object?.visible || token.isSecret) continue;
			const t = token.object;
			canvas.interface.createScrollingText(t.center, value.signedString(), {
				anchor: CONST.TEXT_ANCHOR_POINTS.TOP,
				// Adapt the font size relative to the Actor's HP total to emphasize more significant blows
				fontSize: 16 + 32 * pct, // Range between [16, 48]
				fill,
				stroke: 0x000000,
				strokeThickness: 4,
				jitter: 0.25
			});
		}
	}
}

const { ApplicationV2: ApplicationV2$1, HandlebarsApplicationMixin: HandlebarsApplicationMixin$1 } = foundry.applications.api;

class ActiveEffectWizard extends HandlebarsApplicationMixin$1(ApplicationV2$1) {
	constructor(document, effectData = {}, options = {}) {
		super(options);
		this.document = document;
		if (this.document instanceof ItemT20) {
			this.#effect.name = this.document.name;
			this.#effect.img = this.document.img;
		}
		this.#effect = {
			...this.#effect,
			...effectData
		};
		// PJs têm praticamente todos os campos utilizáveis
		this.templateModel = new ActorT20({ name: "Template", type: "character" });
	}

	#effect = {
		name: game.i18n.localize("T20.EffectNewLabel"),
		img: "icons/svg/aura.svg"
	};

	#changes = [];

	#accordions = [];

	#collapsibleStates = {
		arma: true,
		magia: true,
		atributo: true,
		skill: true
	};

	currAttribute = "for";

	currSkill = "acro";

	currResistance = "dano";

	currMovement = "walk";

	document;

	static DEFAULT_OPTIONS = {
		window: {
			icon: "fas fa-wand-magic-sparkles",
			title: "Criador de Efeitos Ativos",
			resizable: true
		},
		position: {
			width: 650,
			height: 800
		},
		classes: ["tormenta20", "active-effect-wizard", "swade-application", "standard-form"],
		tag: "form",
		form: {
			handler: ActiveEffectWizard.#createEffect,
			submitOnClose: false,
			submitOnChange: false,
			closeOnSubmit: false
		},
		actions: {
			addChange: ActiveEffectWizard.#onAddChange,
			deleteChange: ActiveEffectWizard.#onDeleteChange,
			clickIcon: ActiveEffectWizard.#onClickIcon
		}
	};

	static PARTS = {
		form: {
			template: "systems/tormenta20/templates/apps/active-effect-wizard.hbs",
			scrollable: [".presets"]
		},
		footer: { template: "templates/generic/form-footer.hbs" }
	};

	get targetIsSpell() {
		return this.document instanceof ItemT20 && this.document.type === "magia";
	}

	get targetIsWeapon() {
		return this.document instanceof ItemT20 && this.document.type === "arma";
	}

	_onChangeForm(formConfig, event) {
		super._onChangeForm(formConfig, event);
		const target = event.target;
		if (!target) return; // TODO: what actually do
		const index = target.closest("li")?.dataset.index;
		if (target.classList.contains("value")) {
			if (target.type === "checkbox") this.#changes[Number(index)].value = target.checked;
			else this.#changes[Number(index)].value = target.value;
		} else if (target.classList.contains("mode")) {
			this.#changes[Number(index)].type = target.value;
		} else if (target.classList.contains("target")) {
			this[target.name] = target.value;
		}
		const formData = new foundry.applications.ux.FormDataExtended(this.form);
		foundry.utils.mergeObject(this.#effect, formData.object);
		this.render();
	}

	async _onRender(context, options) {
		await super._onRender(context, options);
		this.#setupAccordions();
	}

	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		return foundry.utils.mergeObject(context, {
			isSpell: this.targetIsSpell,
			isWeapon: this.targetIsWeapon,
			effect: this.#effect,
			changes: this.#changes,
			collapsibleStates: this.#collapsibleStates,
			expirationOptions: this.#getExpirationOptions(),
			skillSuggestions: this.#getSkillSuggestions(),
			movementSuggestions: this.#getMovementSuggestions(),
			resistanceSuggestions: this.#getResistanceSuggestions(),
			resistancePresets: this.#getResistancePresets(),
			derivedPresets: this.#getDerivedPresets(),
			globalModPresets: this.#getGlobalModPresets(),
			otherPresets: this.#getOtherStatsPresets(),

			spellPresets: this.#getSpellPresets(),
			weaponPresets: this.#getWeaponPresets(),
			attributes: { "*": "Todos os Atributos", ...CONFIG.T20.atributos },
			currAttribute: this.currAttribute,
			currSkill: this.currSkill,
			currMovement: this.currMovement,
			currResistance: this.currResistance,
			changeModes: {
				add: "EFFECT.MODE_ADD",
				multiply: "EFFECT.MODE_MULTIPLY",
				override: "EFFECT.MODE_OVERRIDE",
				upgrade: "EFFECT.MODE_UPGRADE"
			},
			buttons: [
				{
					type: "submit",
					icon: "fa-solid fa-arrow-down-to-line",
					label: "T20.EffectWizard.Add"
				}
			]
		});
	}

	/**
	 * @this ActiveEffectWizard
	 */
	static async #createEffect(_event, _form, _formData) {
		this.#prepareChanges();
		await foundry.utils.getDocumentClass("ActiveEffect").create(this.#effect, {
			renderSheet: this.#changes.length === 0,
			parent: this.document
		});
		this.close();
	}

	#getSkillSuggestions() {
		const parent = this.document.parent ?? this.document;
		const createSuggestions = (obj) => {
			return Object.fromEntries(
				Object.entries(obj)
					.map(([key, skill]) => [key, skill.label ?? CONFIG.T20.pericias[key].label])
					.filter(([_, label]) => label)
					.sort((a, b) => a[1].localeCompare(b[1]))
			);
		};
		const source = parent instanceof ActorT20 ? parent.system.pericias : CONFIG.T20.pericias;
		return { "*": "Todas as Perícias", ...createSuggestions(source) };
	}

	#getResistanceSuggestions() {
		const createSuggestions = () => {
			return Object.fromEntries(
				Object.entries(CONFIG.T20.damageTypes)
					.map(([key, label]) => [key, label])
					.filter(([_, label]) => label)
			);
		};
		return createSuggestions();
	}

	#getResistancePresets() {
		return [
			{
				key: "bonus",
				label: game.i18n.localize("T20.DR")
			},
			{
				key: "vulnerabilidade",
				label: game.i18n.localize("T20.Weakness")
			},
			{
				key: "imunidade",
				label: game.i18n.localize("T20.Immunity")
			},
			{
				key: "danoPorDado",
				label: game.i18n.localize("T20.DamPerDie"),
				disabled: ["dano", "perda"].includes(this.currResistance)
			}
		];
	}

	#getDerivedPresets() {
		return [
			{
				label: `${game.i18n.localize("T20.Health")}: ${game.i18n.localize("T20.BonusTotal")}`,
				key: "system.attributes.pv.bonus.total"
			},
			{
				label: `${game.i18n.localize("T20.Health")}: ${game.i18n.localize("T20.BonusPerLevel")}`,
				key: "system.attributes.pv.bonus.nivel"
			},
			{
				label: `${game.i18n.localize("T20.Health")}: ${game.i18n.localize("T20.BonusPerLevelOdd")}`,
				key: "system.attributes.pv.bonus.nivelImpar"
			},
			{
				label: `${game.i18n.localize("T20.Health")}: ${game.i18n.localize("T20.BonusPerLevelEven")}`,
				key: "system.attributes.pv.bonus.nivelPar"
			},
			{
				label: `${game.i18n.localize("T20.Mana")}: ${game.i18n.localize("T20.BonusTotal")}`,
				key: "system.attributes.pm.bonus.total"
			},
			{
				label: `${game.i18n.localize("T20.Mana")}: ${game.i18n.localize("T20.BonusPerLevel")}`,
				key: "system.attributes.pm.bonus.nivel"
			},
			{
				label: `${game.i18n.localize("T20.Mana")}: ${game.i18n.localize("T20.BonusPerLevelOdd")}`,
				key: "system.attributes.pm.bonus.nivelImpar"
			},
			{
				label: `${game.i18n.localize("T20.Mana")}: ${game.i18n.localize("T20.BonusPerLevelEven")}`,
				key: "system.attributes.pm.bonus.nivelPar"
			},
			{
				label: `${game.i18n.localize("T20.Defense")}: ${game.i18n.localize("T20.Bonus")}`,
				key: "system.attributes.defesa.bonus"
			},
			{
				label: `${game.i18n.localize("T20.Defense")}: ${game.i18n.localize("T20.Ability")}`,
				key: "system.attributes.defesa.atributo"
			}
		];
	}

	#getMovementSuggestions() {
		this.document.parent ?? this.document;
		const createSuggestions = (obj) => {
			return Object.fromEntries(
				Object.entries(obj)
					.map(([key, movement]) => [key, CONFIG.T20.movementTypes[key]])
					.filter(([_, label]) => label)
					.sort((a, b) => a[1].localeCompare(b[1]))
			);
		};
		const source = CONFIG.T20.movementTypes;
		return { "*": "Todos os Deslocamentos", ...createSuggestions(source) };
	}

	#getGlobalModPresets() {
		return [
			{ key: "system.modificadores.atributos.for", label: "Testes de Força" },
			{
				key: "system.modificadores.atributos.des",
				label: "Testes de Destreza"
			},
			{
				key: "system.modificadores.atributos.con",
				label: "Testes de Constituição"
			},
			{
				key: "system.modificadores.atributos.int",
				label: "Testes de Inteligência"
			},
			{
				key: "system.modificadores.atributos.sab",
				label: "Testes de Sabedoria"
			},
			{
				key: "system.modificadores.atributos.car",
				label: "Testes de Carisma"
			},
			{
				key: "system.modificadores.atributos.geral",
				label: "Testes de Atributos"
			},
			{
				key: "system.modificadores.atributos.fisicos",
				label: "Testes de Atributos Fisicos"
			},
			{
				key: "system.modificadores.atributos.mentais",
				label: "Testes de Atributos Mentais"
			},
			{ key: "system.modificadores.custoPM", label: "Aumento de custo de PM" },
			{ key: "system.modificadores.dano.geral", label: "Dano Geral" },
			{ key: "system.modificadores.dano.cac", label: "Dano Corpo a Corpo" },
			{ key: "system.modificadores.dano.ad", label: "Dano A Distância" },
			{ key: "system.modificadores.dano.mag", label: "Dano de Magias" },
			{ key: "system.modificadores.cura.geral", label: "Cura Geral" },
			{ key: "system.modificadores.cura.alq", label: "Cura Alquímica" },
			{ key: "system.modificadores.cura.mag", label: "Cura Mágica" },
			{
				key: "system.modificadores.pericias.geral",
				label: "Testes de Perícias"
			},
			{
				key: "system.modificadores.pericias.ataque",
				label: "Testes de Perícias de Ataque"
			},
			{
				key: "system.modificadores.pericias.semataque",
				label: "Testes de Perícias, exceto de Ataque"
			},
			{
				key: "system.modificadores.pericias.resistencia",
				label: "Testes de Perícias de Resistências"
			},
			{
				key: "system.modificadores.pericias.atr.for",
				label: "Testes de Perícias de Força"
			},
			{
				key: "system.modificadores.pericias.atr.des",
				label: "Testes de Perícias de Destreza"
			},
			{
				key: "system.modificadores.pericias.atr.con",
				label: "Testes de Perícias de Constituição"
			},
			{
				key: "system.modificadores.pericias.atr.int",
				label: "Testes de Perícias de Inteligência"
			},
			{
				key: "system.modificadores.pericias.atr.sab",
				label: "Testes de Perícias de Sabedoria"
			},
			{
				key: "system.modificadores.pericias.atr.car",
				label: "Testes de Perícias de Carisma"
			}
		];
	}

	#getOtherStatsPresets() {
		return [
			{
				label: game.i18n.localize("T20.Size"),
				key: "system.tracos.tamanho"
			},
			{
				label: game.i18n.localize("T20.SpellDC"),
				key: "system.attributes.cd"
			},
			{
				label: "Limite de Itens Empunháveis",
				key: "system.equipamentos.limiteEmpunhado"
			},
			{
				label: "Limite de Itens Vestidos",
				key: "system.equipamentos.limiteVestido"
			}
		];
	}

	#getSpellPresets() {
		if (!this.targetIsSpell) return [];
		return [
			{
				key: "alcance",
				label: "Alcance"
			},
			{
				key: "area",
				label: "Área"
			},
			{
				key: "cd",
				label: "CD"
			},
			{
				key: "dano",
				label: "Dano"
			},
			{
				key: "duracao",
				label: "Duração"
			},
			{
				key: "execucao",
				label: "Execução"
			},
			{
				key: "passo",
				label: "Passo de Dano"
			}
		];
	}

	#getWeaponPresets() {
		if (!this.targetIsWeapon) return [];
		return [
			{
				key: "criticoM",
				label: "Margem de Crítico"
			},
			{
				key: "criticoX",
				label: "Multiplicador de Crítico"
			},
			{
				key: "passo",
				label: "Passo de Dano"
			}
		];
	}

	#getExpirationOptions() {
		return {
			0: "SWADE.Expiration.BeginAuto",
			1: "SWADE.Expiration.BeginPrompt",
			2: "SWADE.Expiration.EndAuto",
			3: "SWADE.Expiration.EndPrompt"
		};
	}

	#prepareChanges() {
		// v14: changes moram em system.changes com `type` (string) em vez de `mode` (número).
		this.#effect.system = {
			...(this.#effect.system ?? {}),
			changes: this.#changes.map((c) => {
				return {
					key: c.key,
					type: c.type ?? "add",
					value: c.value
				};
			})
		};
	}

	/**
	 * @this ActiveEffectWizard
	 */
	static #onAddChange(_event, currentTarget) {
		const details = currentTarget.closest("details");
		const keyPart = currentTarget.dataset.key;
		const category = details?.dataset.category;
		const tgt = details?.querySelector(".target");
		const target = tgt?.value ?? currentTarget.innerText;

		let label = target;
		let key = keyPart;
		let boolean = false;
		let choices;
		if (category === "skill") {
			if (!target) {
				return ui.notifications.warn("Please enter a skill name first!");
			}
			label = `${tgt.options[tgt.selectedIndex].text} ${currentTarget.innerText}`.trim();
			key = `system.pericias.${target}.${keyPart}`;
		} else if (category === "atributo") {
			label = `${CONFIG.T20.atributos[target]} ${currentTarget.innerText}`.trim();
			key = `system.atributos.${target}.${keyPart}`;
		} else if (category === "resistance") {
			const dano = CONFIG.T20.damageTypes[target];
			let str = "";
			if (keyPart === "bonus") {
				if (target === "dano" || target === "perda") str = "T20.DamResType";
				else str = "T20.DamResOf";
			} else if (keyPart === "vulnerabilidade") {
				if (target === "dano" || target === "perda") str = "T20.DamVulnType";
				else str = "T20.DamVulnOf";
				boolean = true;
			} else if (keyPart === "imunidade") {
				if (target === "dano" || target === "perda") str = "T20.DamImmType";
				else str = "T20.DamImmOf";
				boolean = true;
			} else if (keyPart === "danoPorDado") {
				label = game.i18n.format("T20.DamPerDieOf", { tipo: dano });
				boolean = true;
			}
			label = game.i18n.format(str, { tipo: dano });
			key = `system.tracos.resistencias.${target}.${keyPart}`;
		} else if (category === "movement") {
			label = `${tgt.options[tgt.selectedIndex].text} ${currentTarget.innerText}`.trim();
			key = `system.attributes.movement.${target}.${keyPart}`;
		}

		if (!boolean) {
			const property = foundry.utils.getProperty(this.templateActor, key);
			boolean = typeof property === "boolean";
		}
		const field = this.templateModel.system.schema.getField(key.replace("system.", ""));
		if (field?.choices !== undefined) choices = true;

		this.#changes?.push({
			label: label,
			key: key,
			type: "add",
			boolean,
			choices,
			field
		});
		this.render({ force: true });
	}

	/**
	 * @this ActiveEffectWizard
	 */
	static #onDeleteChange(_event, target) {
		const index = target.closest("li")?.dataset.index;
		this.#changes.splice(Number(index), 1);
		this.render({ force: true });
	}

	#setupAccordions() {
		this.form?.querySelectorAll(".presets details").forEach((el) => {
			this.#accordions.push(new Accordion(el, ".content", { duration: 200 }));
			const id = el.dataset.category;
			el.querySelector("summary")?.addEventListener("click", () => {
				const states = this.#collapsibleStates;
				const currentState = Boolean(states[id]);
				states[id] = !currentState;
			});
		});
	}

	/**
	 * @this ActiveEffectWizard
	 */
	static #onClickIcon(_event, _target) {
		new foundry.applications.apps.FilePicker.implementation({
			current: this.#effect.img,
			type: "image",
			callback: this.#onChangeIcon.bind(this)
		}).render({ force: true });
	}

	#onChangeIcon(path, _picker) {
		this.#effect.img = path;
		this.render({ force: true });
	}
}

/*
 * Migration utilities
 * functions names <DocumentName><VersionNumber>
 */
const effectMigration = {};

// Migrate Resistances Key:  replace .value with .bonus
// No v14 os changes ficam em system.changes; effectChanges() lê os dois formatos.
effectMigration.migrateResistancesPath = function (doc, updateEffectData = {}) {
	for (const change of effectChanges(doc)) {
		if (!change.key.match(/system\.tracos\.resistencias\.\w+\.value/)) continue;
		change.key = change.key.replace(/\.value/, ".bonus");
	}
};

// Migrate Abilities Key:  replace .value with .racial
effectMigration.migrateAbilitiesPath = function (doc, updateEffectData = {}) {
	for (const change of effectChanges(doc)) {
		if (!/system\.atributos\.\w+\.(base|racial)/.test(change.key)) continue;
		else change.key = change.key.replace(/\.(base|racial)/, ".value");
	}
};

/**
 * Extend the base ActiveEffect class to implement system-specific logic.
 */
class ActiveEffectT20 extends ActiveEffect {
	/** @inheritdoc */
	static migrateData(data) {
		super.migrateData(data);
		effectMigration.migrateAbilitiesPath(data);
		effectMigration.migrateResistancesPath(data);
		return data;
	}

	async _preCreate(data, options, user) {
		await super._preCreate(data, options, user);
		if (this.parent && ["comodo", "mobilia"].includes(this.parent.type)) {
			this.updateSource({ transfer: !this.parent.system.residentes });
		}
	}

	_onCreate(data, options, userId) {
		super._onCreate(data, options, userId);
		if (game.userId != userId) return;

		if (this.isCondition && this.parent.documentName == "Actor") {
			this._createChildEffects(data, options, userId);
			/**
			 * TODO: UPGRADE EFFECT
			 * Ideally the one with shortest duration? (But we don't have the correct durations ^^')
			 */
		}
	}

	async _createChildEffects(data, options, userId) {
		const childEffect = foundry.utils.getProperty(data, "flags.tormenta20.childEffect");
		if (foundry.utils.isEmpty(childEffect)) return;
		const effects = [];
		for (const statusId of childEffect) {
			const effect = await ActiveEffect.fromStatusEffect(statusId);
			effects.push({
				...effect.toObject(),
				origin: this.uuid
			});
		}
		if (foundry.utils.isEmpty(effects)) return;
		await this.parent.createEmbeddedDocuments("ActiveEffect", effects);
	}

	/** @inheritdoc */
	_onDelete(options, userId) {
		super._onDelete(options, userId);
		if (game.userId !== userId) return;
		if (this.isCondition && this.parent.documentName == "Actor") {
			this._deleteChildEffects();
		}
	}

	_deleteChildEffects() {
		const childEffect = foundry.utils.getProperty(this, "flags.tormenta20.childEffect");
		if (foundry.utils.isEmpty(childEffect)) return;
		const effects = this.parent.effects.filter((ef) => ef.origin == this.uuid).map((ef) => ef.id);
		if (foundry.utils.isEmpty(effects)) return;
		this.parent.deleteEmbeddedDocuments("ActiveEffect", effects);
	}

	/**
	 * Is this active effect currently suppressed?
	 * @type {boolean}
	 */
	get isSuppressed() {
		if (this.parent.documentName !== "Actor") return false;
		let suppressed = super.isSuppressed ?? false;
		if (!suppressed) suppressed = this.isSuppressedUnnequipped;
		if (!suppressed) suppressed = this.isSuppressedInherited;
		if (!suppressed) suppressed = this.isSuppressedDuplicated;
		if (!suppressed) suppressed = this.isSuppressedUpgrade;
		if (!suppressed) suppressed = this.isSuppressedImunity;
		this._suppressed = suppressed;
		return suppressed;
	}

	get isSuppressedUnnequipped() {
		const [parentType, parentId, documentType, documentId, syntheticItem, syntheticItemId] =
			this.origin?.split(".") ?? [];
		let item;
		// Case 1: This is a linked or sidebar actor
		if (parentType === "Actor" && !(parentId !== this.parent.id || documentType !== "Item")) {
			item = this.parent.items.get(documentId);
		}
		// Case 2: This is a synthetic actor on the scene
		else if (parentType === "Scene" && !(documentId !== this.parent.token?.id || syntheticItem !== "Item")) {
			item = this.parent.items.get(syntheticItemId);
		}
		if (item) return item.areEffectsSuppressed;
		return false;
	}

	// If Parent is supressed, child will be supressed too
	get isSuppressedInherited() {
		if (this.origin) {
			const id = this.origin.split(".").pop();
			const origin = this.parent.effects.get(id);
			if (origin) return origin._suppressed;
		}
		return false;
	}

	// If more than one of the same status are present, the oldest ones get supressed
	get isSuppressedDuplicated() {
		const statusId = this.statuses.first();
		const duplicate = this.parent.effects.filter((ef) => ef.id != this.id && ef.statuses.has(statusId));
		if (duplicate.length) {
			const creation = duplicate.map((ef) => ef._stats.createdTime);
			if (creation.find((i) => i > this._stats.createdTime)) return true;
		}
		return false;
	}

	// If upgraded version is present
	get isSuppressedUpgrade() {
		const upgrade = foundry.utils.getProperty(this, "flags.tormenta20.stack");
		if (this.isCondition && upgrade) {
			if (this.parent.statuses.has(upgrade)) return true;
		}
		return false;
	}

	// Actor is Imunine
	get isSuppressedImunity() {
		const statusImunities = foundry.utils.getProperty(this.parent, "system.tracos.ic.value");
		if (this.isCondition && statusImunities && statusImunities.size) {
			const statusId = this.statuses.first();
			const category = this.getFlag("tormenta20", "category");
			const ignore = this.getFlag("tormenta20", "ignoreImunity");
			if (!ignore && statusId && statusImunities.has(statusId)) return true;
			if (!ignore && category && statusImunities.has(category)) return true;
		}
		return false;
	}

	/** @override */
	get active() {
		return !this.disabled && !this.isSuppressed && !this.isUsage;
	}

	/** @override */
	get isUsage() {
		return this.getFlag("tormenta20", "onuse");
	}

	get isCondition() {
		return this.getFlag("tormenta20", "condition");
	}

	/**
	 * Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.
	 * @type {boolean}
	 */
	get isTemporary() {
		const scene = this.getFlag("tormenta20", "durationScene");
		const duration = this.duration.seconds ?? (this.duration.rounds || this.duration.turns) ?? 0;
		return scene || duration > 0 || this.statuses.size;
	}
	/* --------------------------------------------- */

	/** @inheritdoc */
	apply(actor, change) {
		if (change.key.match(/\.\?+\./)) return null;
		if (change.key.startsWith("flags.tormenta20.")) change = this._prepareFlagChange(actor, change);
		if (change.key.startsWith("system.attributes.movement") && change.key.match(/(walk|fly|burrow|climb|swim)$/)) {
			change.key += changeType(change) === "add" ? ".bonus" : ".base";
		}
		const wildcardPatterns = [
			"system.atributos.*.value",
			"system.atributos.*.bonus",
			"system.pericias.*.bonus",
			"system.pericias.*.condi",
			"system.attributes.movement.*.value",
			"system.attributes.movement.*.base",
			"system.attributes.movement.*.bonus"
		];
		const filters = {
			"system.attributes.movement": (key) => T20.movementTypes[key]
		};
		if (change.key.includes("*") && wildcardPatterns.includes(change.key)) {
			// Replica `system.path.*.key` pra todas as chaves de `system.path`
			let [fieldPath, field] = change.key.split(".*");
			field ??= "";
			const property = foundry.utils.getProperty(actor, fieldPath);
			const filter = filters[fieldPath] ?? (() => true);
			for (const key of Object.keys(property).filter(filter)) {
				change.key = `${fieldPath}.${key}${field}`;
				super.apply(actor, change);
			}
			return {};
		}
		return super.apply(actor, change);
	}

	/* --------------------------------------------- */

	/**
	 * Prepare derived data related to active effect duration
	 * @internal
	 */
	_prepareDuration() {
		// const d = this.duration;
		const isScene = this.getFlag("tormenta20", "durationScene");

		// Scene-based duration
		if (isScene) {
			return {
				type: "scene",
				duration: null,
				remaining: null,
				label: game.i18n.localize("T20.TimeScene"),
				_worldTime: game.time.worldTime
			};
		}
		return super._prepareDuration();
	}

	/* --------------------------------------------- */

	/**
	 * Transform the data type of the change to match the type expected for flags.
	 * @param {ActorT20} actor           The Actor to whom this effect should be applied.
	 * @param {EffectChangeData} change  The change being applied.
	 * @returns {EffectChangeData}       The change with altered types if necessary.
	 */
	_prepareFlagChange(actor, change) {
		const { key, value } = change;
		const data = CONFIG.T20.characterFlags[key.replace("flags.tormenta20.", "")];
		if (!data) return change;

		// Set flag to initial value if it isn't present
		const current = foundry.utils.getProperty(actor, key) ?? null;
		if (current === null) {
			let initialValue = null;
			if (data.placeholder) initialValue = data.placeholder;
			else if (data.type === Boolean) initialValue = false;
			else if (data.type === Number) initialValue = 0;
			foundry.utils.setProperty(actor, key, initialValue);
		}

		// Coerce change data into the correct type
		if (data.type === Boolean) {
			if (value === "false") change.value = false;
			else change.value = Boolean(value);
		} else if (data.type === Number) {
			if (value.startsWith("@")) {
				let rolldata = actor.getRollData();
				let numvalue = Roll.replaceFormulaData(value, rolldata);
				change.value = Number(numvalue);
			}
		}
		return change;
	}

	/* --------------------------------------------- */

	/**
	 * Manage Active Effect instances through the Actor Sheet via effect control buttons.
	 * @param {MouseEvent} event        The left-click event on the effect control
	 * @param {ActorT20|ItemT20} owner  The owning document which manages this effect
	 * @returns {Promise|null}          Promise that resolves when the changes are complete.
	 */
	static async onManageActiveEffect(event, owner) {
		event.preventDefault();
		const a = event.currentTarget;
		const li = a.closest("li");
		const effect = li.dataset.effectId ? owner.effects.get(li.dataset.effectId) : null;
		const type = li.dataset.effectType === "onuseTemp" ? "onuse" : li.dataset.effectType;
		const temp = li.dataset.effectType === "onuseTemp";
		switch (a.dataset.action) {
			case "create": {
				const isOnUse = type === "onuse";
				const itemEffect = owner.documentName === "Item";
				const effectData = {
					name: isOnUse || !itemEffect ? game.i18n.localize("T20.EffectNewLabel") : owner.name,
					img: isOnUse ? "icons/svg/upgrade.svg" : itemEffect ? owner.img : "icons/svg/aura.svg",
					origin: owner.uuid,
					tint: "#FFFFFF",
					flags: { tormenta20: { onuse: isOnUse, durationScene: temp, self: owner.type === "magia" } },
					"duration.rounds": type === "temporary" || temp ? 1 : undefined,
					"duration.seconds": undefined,
					disabled: ["inactive", "onuse"].includes(type)
				};
				if (event.type == "contextmenu") {
					return await owner.createEmbeddedDocuments("ActiveEffect", [effectData], { renderSheet: true });
				}
				return new ActiveEffectWizard(owner, effectData).render({ force: true });
			}
			case "create-status": {
				const statusEffect = await ActiveEffect.fromStatusEffect(a.dataset.statusId);
				if (!statusEffect) return false;
				statusEffect.transfer = false;
				return owner.createEmbeddedDocuments("ActiveEffect", [statusEffect.toObject()]);
			}
			case "edit":
				return effect.sheet.render(true);
			case "delete":
				return effect.delete();
			case "toggle":
				return effect.update({ disabled: !effect.disabled });
		}
	}

	/* --------------------------------------------- */

	/**
	 * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
	 * @param {ActiveEffect[]} effects    The array of Active Effect instances to prepare sheet data for
	 * @return {object}                   Data for rendering
	 */
	static prepareActiveEffectCategories(effects) {
		// Define effect header categories
		const categories = {
			onuse: {
				type: "onuse",
				label: game.i18n.localize("T20.OnUseEffects"), // "Efeitos de Uso",
				effects: []
			},
			onuseTemp: {
				type: "onuseTemp",
				label: game.i18n.localize("T20.OnUseEffectTemporary"), // "Efeitos de Uso Temporários",
				effects: []
			},
			temporary: {
				type: "temporary",
				label: game.i18n.localize("T20.EffectTemporary"), // "Efeitos Temporários",
				effects: []
			},
			passive: {
				type: "passive",
				label: game.i18n.localize("T20.EffectPassive"), // "Efeitos Passivos",
				effects: []
			},
			inactive: {
				type: "inactive",
				label: game.i18n.localize("T20.EffectInactive"), // "Efeitos Inativos",
				effects: []
			},
			suppressed: {
				type: "suppressed",
				label: game.i18n.localize("T20.EffectSuppressed"),
				effects: [],
				info: [game.i18n.localize("T20.EffectSuppressedHint")]
			}
		};
		// Iterate over active effects, classifying them into categories
		for (let e of effects) {
			// e.sourceName // Trigger a lookup for the source name
			if (e.isSuppressed) categories.suppressed.effects.push(e);
			else if (e.flags.tormenta20?.onuse && e.isTemporary) categories.onuseTemp.effects.push(e);
			else if (e.flags.tormenta20?.onuse) categories.onuse.effects.push(e);
			else if (e.disabled) categories.inactive.effects.push(e);
			else if (e.isTemporary) categories.temporary.effects.push(e);
			else categories.passive.effects.push(e);
		}

		return categories;
	}
}

class ChatMessageTormenta20 extends ChatMessage {
	async renderHTML({ canDelete, canClose = false, ...rest } = {}) {
		const html = await super.renderHTML({ canDelete, canClose, ...rest });
		this._highlightCriticalSuccessFailure(html);
		this._hideDC(html);
		return html;
	}

	_highlightCriticalSuccessFailure(html) {
		if (!this.isContentVisible || !this.rolls.length) return;
		// Highlight rolls where the first part is a d20 roll
		for (let [index, d20Roll] of this.rolls.entries()) {
			const d0 = d20Roll.dice[0];
			if (d0?.faces !== 20 || d0?.values.length !== 1) continue;

			// d20Roll = CONFIG.Dice.rolls.RollT20.fromRoll(d20Roll);
			const d = d20Roll.dice[0];

			// Ensure it is an un-modified d20 roll
			const isD20 = d.faces === 20 && d.values.length === 1;
			if (!isD20) return;
			const isModifiedRoll = "success" in d.results[0] || d.options.marginSuccess || d.options.marginFailure;
			if (isModifiedRoll) return;

			// Highlight successes and failures
			const total = html.querySelectorAll(".dice-total")[index];
			if (!total) continue;

			const isAttack = d20Roll.options.type === "attack";

			if (isAttack) {
				const critical = d.options.critical || 20;
				const fumble = d.options.fumble || 1;
				if (d.total >= critical) total.classList.add("success", "critical");
				else if (d.total <= fumble) total.classList.add("failure", "fumble");
				else if (d.options.target) {
					if (d.total >= d.options.target) total.classList.add("success");
					else total.classList.add("failure");
				}
			}
		}
	}

	_hideDC(html) {
		if (game.settings.get("tormenta20", "showFoeDc")) return;
		if (game.user.isGM) return;
		const actor = this.speakerActor;
		if (!actor) return;
		if (actor.type == "character") return;
		const header = html.querySelector(".card-item-header");
		if (!header) return;
		let content = header.innerHTML.replace(/CD \d+/i, "CD ??");
		header.innerHTML = content;
	}
}

// import { T20 } from "../config.mjs";


const { DiceTerm, Die, OperatorTerm, NumericTerm } = foundry.dice.terms;

class RollT20 extends foundry.dice.Roll {
	get formulaSimplified() {
		return simplifyRollFormula(this.formula);
	}

	/**
	 * Prepare context data used to render the CHAT_TEMPLATE for this roll.
	 * @param {object} options
	 * @param {string} [options.flavor]
	 * @param {boolean} [options.isPrivate=false]
	 * @returns {Promise<{object}>}
	 * @protected
	 */
	async _prepareChatRenderContext({ flavor, isPrivate = false, ...options } = {}) {
		return {
			formula: isPrivate ? "???" : this.formulaSimplified,
			_formula: isPrivate ? "???" : this.formula,
			flavor: isPrivate ? null : (flavor ?? this.options.flavor),
			user: game.user.id,
			tooltip: isPrivate ? "" : await this.getTooltip(),
			total: isPrivate ? "?" : Math.round(this.total * 100) / 100
		};
	}
}

// export default class RollT20 extends Roll {
// 	static SORTMODIFIERS = {
// 		addTerm: 0,
// 		upgradeDie: 1,
// 		modifyDieNumber: 2,
// 		modifyDieFace: 3,
// 		addPerDie: 4,
// 		dieModifier: 5
// 	};

// 	constructor(formula, data = {}, options = {}) {
// 		super(formula, data, options);
// 		if (!options.type) options.type = "formula";
// 		if (!options.modifiers) options.modifiers = [];
// 		if (options.type === "formula") this.configureFormulaModifiers();
// 		else if (options.type === "attack") this.configureAttackModifiers();
// 		else if (options.type === "damage") this.configureDamageModifiers();
// 		// console.log(this);
// 	}

// 	static fromRoll(roll) {
// 		const newRoll = new this(roll.formula, roll.data, roll.options);
// 		Object.assign(newRoll, roll);
// 		return newRoll;
// 	}

// 	/* -------------------------------------------- */
// 	/*  Roll Methods                                */
// 	/* -------------------------------------------- */

// 	/**
// 	 * Apply optional modifiers which customize the behavior of the d20term
// 	 * @private
// 	 */
// 	configureFormulaModifiers() { }

// 	/**
// 	 * Apply optional modifiers which customize the behavior of the d20term
// 	 * @private
// 	 */
// 	configureAttackModifiers() { }

// 	/**
// 	 * Apply optional modifiers which customize the behavior of the d20term
// 	 * @private
// 	 */
// 	configureDamageModifiers() {
// 		const modifiers = this.options.modifiers.sort(
// 			(a, b) => RollT20.SORTMODIFIERS[a.type] - RollT20.SORTMODIFIERS[b.type]
// 		);
// 		for (const mod of modifiers) {
// 			mod.value = mod.value.toString();
// 			switch (mod.type) {
// 				case "addTerm":
// 					this.modAddTerm(mod);
// 					break;
// 				case "addPerDie":
// 					this.modAddPerDie(mod);
// 					break;
// 				case "modifyDieNumber":
// 					this.modModifyDieNumber(mod);
// 					break;
// 				case "modifyDieFace":
// 					this.modModifyDieFace(mod);
// 					break;
// 				case "upgradeDie":
// 					this.modUpgradeDie(mod);
// 					break;
// 				case "dieModifier":
// 					this.modDieModifier(mod);
// 					break;
// 				default:
// 					console.log("DEFAULT");
// 					break;
// 			}
// 		}
// 	}

// 	/**
// 	 * ADD TERM
// 	 * @param {object} mod         DATA
// 	 */
// 	modAddTerm(mod) {
// 		mod.value = Roll.replaceFormulaData(mod.value, this.data);
// 		let newTerm;
// 		const options = { flavor: mod.flavor, origin: mod.origin };
// 		if (isFinite(Roll.safeEval(mod.value))) {
// 			newTerm = new NumericTerm({ number: Roll.safeEval(mod.value), options });
// 		} else {
// 			newTerm = new DiceTerm({ number: mod.value, options });
// 		}
// 		this.terms.push(new OperatorTerm({ operator: "+" }), newTerm);
// 	}

// 	modAddPerDie(mod) {
// 		mod.value = Roll.replaceFormulaData(mod.value, this.data);
// 		mod.value = Roll.safeEval(mod.value);
// 		if (!isFinite(mod.value)) return;
// 		const dies = this.terms
// 			.filter((term) => {
// 				const flavor = mod.conditions.flavor ? mod.conditions.flavor.split(",") : false;
// 				const origin = mod.conditions.origin ? mod.conditions.origin.split(",") : false;
// 				if (!(term instanceof DiceTerm)) return false;
// 				if (flavor && !flavor.includes(term.options.flavor)) return false;
// 				if (origin && !origin.includes(term.options.origin)) return false;
// 				return true;
// 			})
// 			.map((term) => term.number);
// 		const total = Roll.safeEval(...dies) * mod.value;
// 		if (!total) return;
// 		this.terms.push(
// 			new OperatorTerm({ operator: "+" }),
// 			new NumericTerm({
// 				number: total,
// 				options: { flavor: mod.flavor, origin: mod.origin }
// 			})
// 		);
// 	}

// 	modModifyDieNumber(mod) {
// 		mod.value = Roll.replaceFormulaData(mod.value, this.data);
// 		mod.value = Roll.safeEval(mod.value);
// 		if (!isFinite(mod.value)) return;
// 		const flavor = mod.conditions.flavor ? mod.conditions.flavor.split(",") : false;
// 		const origin = mod.conditions.origin ? mod.conditions.origin.split(",") : false;
// 		for (const term of this.terms) {
// 			if (!(term instanceof DiceTerm)) continue;
// 			if (flavor && !flavor.includes(term.options.flavor)) continue;
// 			if (origin && !origin.includes(term.options.origin)) continue;
// 			term.number = term.number + mod.value;
// 		}
// 	}

// 	modModifyDieFace(mod) {
// 		mod.value = Roll.replaceFormulaData(mod.value, this.data);
// 		mod.value = Roll.safeEval(mod.value);
// 		if (!isFinite(mod.value)) return;
// 		const flavor = mod.conditions.flavor ? mod.conditions.flavor.split(",") : false;
// 		const origin = mod.conditions.origin ? mod.conditions.origin.split(",") : false;
// 		for (const term of this.terms) {
// 			if (!(term instanceof DiceTerm)) continue;
// 			if (flavor && !flavor.includes(term.options.flavor)) continue;
// 			if (origin && !origin.includes(term.options.origin)) continue;
// 			term.faces = mod.value;
// 		}
// 	}

// 	modUpgradeDie(mod) {
// 		mod.value = Roll.replaceFormulaData(mod.value, this.data);
// 		mod.value = Roll.safeEval(mod.value);
// 		if (!isFinite(mod.value)) return;
// 		const flavor = mod.conditions.flavor ? mod.conditions.flavor.split(",") : false;
// 		const origin = mod.conditions.origin ? mod.conditions.origin.split(",") : false;
// 		for (const term of this.terms) {
// 			if (!(term instanceof DiceTerm)) continue;
// 			if (flavor && !flavor.includes(term.options.flavor)) continue;
// 			if (origin && !origin.includes(term.options.origin)) continue;
// 			let termIndex = T20.passosDano.indexOf(term.expression);
// 			if (!termIndex || !T20.passosDano[termIndex + mod.value]) continue;
// 			[term.number, term.faces] = T20.passosDano[termIndex + mod.value].split("d");
// 		}
// 	}

// 	modDieModifier(mod) {
// 		if (!Die.MODIFIERS[mod.value]) return;
// 		const flavor = mod.conditions.flavor ? mod.conditions.flavor.split(",") : false;
// 		const origin = mod.conditions.origin ? mod.conditions.origin.split(",") : false;
// 		for (const term of this.terms) {
// 			if (!(term instanceof DiceTerm)) continue;
// 			if (term.modifiers.includes(mod.value)) continue;
// 			if (flavor && !flavor.includes(term.options.flavor)) continue;
// 			if (origin && !origin.includes(term.options.origin)) continue;
// 			term.modifiers.push(mod.value);
// 		}
// 	}
// }

/**
 * Extend the base TokenDocument class to implement system-specific HP bar logic.
 * @extends {TokenDocument}
 */
class TokenDocumentT20 extends TokenDocument {
	/** @inheritdoc */
	getBarAttribute(...args) {
		const data = super.getBarAttribute(...args);
		if (data && data.attribute === "attributes.pv") {
			data.value += parseInt(foundry.utils.getProperty(this.actor, "system.attributes.pv.temp") || 0);
		}
		if (data && data.attribute === "attributes.pm") {
			data.value += parseInt(foundry.utils.getProperty(this.actor, "system.attributes.pm.temp") || 0);
		}
		return data;
	}

	_inferMovementAction() {
		const movement = this.actor?.system.attributes?.movement ?? {};
		if (this.hasStatusEffect("caido")) return CONFIG.Token.movement.defaultAction;
		if (this.movementTypes.has("hover")) return "hover";
		if (this.movementTypes.has("fly") && movement.fly.value > movement.walk.value) return "fly";
		return CONFIG.Token.movement.defaultAction;
	}

	get movementTypes() {
		const movement = this.actor?.system.attributes.movement ?? {};
		return new Set(
			Object.keys(movement).filter((key) => movement[key]?.value > 0 || (key == "hover" && movement[key]))
		);
	}
}

/**
 * Helper para criar Áreas de Efeito de magias/habilidades como Scene Regions.
 *
 * No Foundry v14 o documento MeasuredTemplate foi absorvido pelo framework de Scene Regions.
 * A colocação interativa (preview seguindo o cursor, rotação com a roda, clique para confirmar
 * e botão direito para cancelar) é feita nativamente por `canvas.regions.placeRegion(data, options)`,
 * então não precisamos mais da PlaceableObject/Layer customizadas nem dos listeners de preview.
 *
 * NOTA (validar em runtime): a geometria exata das shapes de Region — centralização,
 * ângulo do cone (T20 RAW ~54°), e o pivô do retângulo — pode precisar de ajuste fino ao vivo.
 */
class AbilityTemplate {
	/**
	 * @param {object} regionData  Dados da Region a ser colocada (com uma shape).
	 * @param {ItemT20} [item]     Item de origem (magia/poder/consumível).
	 */
	constructor(regionData, item) {
		this.regionData = regionData;
		this.item = item ?? null;
		this.actorSheet = item?.actor?.sheet ?? null;
	}

	/**
	 * Pixels por unidade de distância da cena (ex.: px por metro).
	 * @returns {number}
	 */
	static get pixelsPerUnit() {
		return canvas.dimensions.distancePixels ?? canvas.grid.size / canvas.scene.grid.distance;
	}

	/**
	 * A factory method to build a Region template from an item's area/range.
	 * @param {ItemT20} item            The Item object for which to construct the template
	 * @returns {AbilityTemplate|null}  The template helper, or null if the item has no area
	 */
	static fromItem(item) {
		if (!canvas?.scene || !canvas.regions?.placeRegion) return null;
		let area = foundry.utils.getProperty(item, "system.area")?.toLowerCase() || "";
		let alcance = foundry.utils.getProperty(item, "system.alcance")?.toLowerCase() || "";
		if (!area.match(/\d/)) {
			if (alcance == "short") area += " 9m";
			else if (alcance == "medium") area += " 30m";
			else if (alcance == "long") area += " 90m";
		}
		let type;
		let distance;
		if (area.match(/cone/)) type = "cone";
		else if (area.match(/linha|parede|muralha/)) type = "ray";
		else if (area.match(/quadrado|cubo/)) type = "rect";
		else if (area.match(/esfera|circulo|círculo|raio|cilindro|explosão|emanação/)) type = "circle";
		if (area.match(/(\d+[,|.]?\d?)[m|km|q]/)) {
			if (area.match(/diametro|diâmetro/i)) distance = (area.match(/(\d+[,|.]?\d?)[m|km|q]/)[1].replace(",", ".") * 1) / 2;
			else distance = Number(area.match(/(\d+[,|.]?\d?)[m|km|q]/)[1].replace(",", "."));
		}

		if (!distance || !["cone", "circle", "rect", "ray"].includes(type)) return null;

		const px = this.pixelsPerUnit;
		let shape;
		switch (type) {
			case "circle":
				shape = { type: "circle", x: 0, y: 0, radius: distance * px };
				break;
			case "cone":
				// T20 cone RAW: largura == comprimento (~54°). curvature "round" = arco na base.
				shape = { type: "cone", x: 0, y: 0, radius: distance * px, angle: 54, rotation: 0, curvature: "round" };
				break;
			case "ray": {
				// Linha/parede: reduz em mapas pequenos; largura de 1 quadrado.
				const { height, size, width } = canvas.dimensions;
				const len = Math.min(distance, width / size, height / size);
				if (len < distance) ui.notifications.info("O template de linha foi reduzido devido ao tamanho do mapa.");
				shape = { type: "line", x: 0, y: 0, length: len * px, width: size, rotation: 0 };
				break;
			}
			case "rect": {
				// Áreas retangulares do T20 são sempre cubos (lado == distance).
				const side = distance * px;
				shape = {
					type: "rectangle",
					x: -side / 2,
					y: -side / 2,
					width: side,
					height: side,
					anchorX: 0,
					anchorY: 0,
					rotation: 0
				};
				break;
			}
			default:
				return null;
		}

		const regionData = {
			name: item?.name || game.i18n.localize("T20.PlaceAbilityTemplate"),
			color: game.user.color?.toString() ?? "#FF0000",
			shapes: [shape],
			visibility: CONST.REGION_VISIBILITY.ALWAYS,
			highlightMode: "coverage",
			displayMeasurements: true,
			behaviors: [],
			flags: {
				tormenta20: {
					itemId: item?.id ?? null,
					actorId: item?.actor?.id ?? null
				}
			}
		};
		return new this(regionData, item);
	}

	/* -------------------------------------------- */

	/**
	 * Inicia o fluxo interativo de colocação da Região no canvas.
	 * Minimiza a ficha durante a colocação, como fazia o MeasuredTemplate.
	 * @returns {Promise<RegionDocument|null>}
	 */
	async drawPreview() {
		if (!canvas?.scene || !canvas.regions?.placeRegion) return null;
		if (this.actorSheet) this.actorSheet.minimize();
		let region = null;
		try {
			region = await canvas.regions.placeRegion(this.regionData, { create: true });
		} catch (err) {
			console.error("T20 | Erro ao posicionar a Área de Efeito (Region):", err);
		}
		if (this.actorSheet) this.actorSheet.maximize();
		return region;
	}
}

/**
 * Extend the base TokenRuler class to implement additional system-specific logic.
 * @extends {Token}
 */
class TokenRulerT20 extends foundry.canvas.placeables.tokens.TokenRuler {
	/**
	 * @inheritdoc
	 * @param {DeepReadonly<Omit<TokenRulerWaypoint, "index"|"center"|"size"|"ray">>} waypoint
	 * @param {DeepReadonly<foundry.grid.types.GridOffset3D>} offset
	 */
	_getGridHighlightStyle(waypoint, offset) {
		const style = super._getGridHighlightStyle(waypoint, offset);
		this.#actorMovementStyle(style, waypoint);
		return style;
	}

	#actorMovementStyle(style, waypoint) {
		if (waypoint.actionConfig.teleport) return;
		const colors = [0x33bc4e, 0xf1d836, 0xe72124];
		const dtColors = [0x5d9b6a, 0xb3a85f, 0xae5557];

		const movement = foundry.utils.getProperty(this, "token.actor.system.attributes.movement");
		const { cost } = waypoint.measurement;
		if (movement) {
			const action = waypoint.action == "jump" ? "walk" : waypoint.action;
			let speed = movement[action].value;
			if (!speed && ["climb", "swim"].includes(action)) speed = movement.walk.value;
			else if (action === "hover") speed = Math.max(movement.walk.value, movement.fly.value);
			const index = Math.clamp(Math.floor((cost - 1) / speed), 0, 2);
			if (waypoint.terrain?.difficulty > 1) style.color = dtColors[index] ?? 0xbfbfbf;
			else style.color = colors[index] ?? 0xffffff;
		}
	}

	static applyMovementConfig() {
		const sourceActions = CONFIG.Token.movement.actions;
		foundry.utils.mergeObject(
			CONFIG.Token.movement.actions,
			{
				// v14: a sintaxe legada "-=crawl" não remove mais a chave sob mergeObject, ela deixa
				// um objeto vazio para trás e a validação de CONFIG.Token.movement.actions rejeita
				// a ação sem label. A remoção agora é feita por operador.
				crawl: new foundry.data.operators.ForcedDeletion(),
				blink: {
					label: "T20.MovementTeleport"
				},
				burrow: {
					// canSelect: (token) => token.hasStatusEffect("burrow")
					canSelect: (token) => !(token instanceof TokenDocument) || token.movementTypes.has("burrow")
				},
				climb: {
					canSelect: (token) => !(token instanceof TokenDocument) || !token.hasStatusEffect("caido"),
					getCostFunction: (token, _options) => {
						if (token.movementTypes.has("climb")) return (cost) => cost;
						return (cost) => cost * 2;
					}
				},
				fly: {
					canSelect: (token) =>
						!(token instanceof TokenDocument) || (token.movementTypes.has("fly") && !token.hasStatusEffect("caido"))
				},
				hover: {
					label: "T20.MovementHover",
					icon: sourceActions.fly.icon,
					img: "systems/tormenta20/icons/svg/fairy.svg",
					order: 1,
					canSelect: (token) =>
						!(token instanceof TokenDocument) || (token.movementTypes.has("hover") && !token.hasStatusEffect("caido")),
					deriveTerrainDifficulty: ({ fly }) => fly
				},
				jump: {
					canSelect: (token) => !(token instanceof TokenDocument) || !token.hasStatusEffect("caido"),
					deriveTerrainDifficulty: ({ fly }) => fly,
					getCostFunction: () => (cost) => cost
				},
				swim: {
					canSelect: (token) => !(token instanceof TokenDocument) || !token.hasStatusEffect("caido"),
					getCostFunction: (token, _options) => {
						if (token.movementTypes.has("swim")) return (cost) => cost;
						return (cost) => cost * 2;
					}
				},
				walk: {
					label: "T20.MovementWalk"
				}
			},
			{ applyOperators: true }
		);
	}
}

/**
 * Extend the base Token class to implement additional system-specific logic.
 * @extends {Token}
 */
class TokenT20 extends foundry.canvas.placeables.Token {
	T20Ranges = [];

	/** @override */
	_applyRenderFlags(flags) {
		super._applyRenderFlags(flags);
		if (flags.refreshSize) this.drawRanges(true);
		else if (flags.refreshState) this.drawRanges();
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_drawBar(number, bar, data) {
		if (data.attribute === "attributes.pv" || data.attribute === "attributes.pm") {
			return this._drawHPBar(number, bar, data);
		}
		return super._drawBar(number, bar, data);
	}

	/* -------------------------------------------- */

	/**
	 * Specialized drawing function for HP bars.
	 * @param {number} number      The Bar number
	 * @param {PIXI.Graphics} bar  The Bar container
	 * @param {object} data        Resource data for this bar
	 * @private
	 */
	_drawHPBar(number, bar, data) {
		// Extract health data

		const actorData = this.document.actor.system;
		let { value, max, temp, tempmax, min } = foundry.utils.getProperty(actorData, data.attribute);

		temp = Number(temp || 0);
		tempmax = Number(tempmax || 0);

		// Differentiate between effective maximum and displayed maximum
		const effectiveMax = Math.max(0, max + tempmax);
		let displayMax = max + (tempmax > 0 ? tempmax : 0);

		// Allocate percentages of the total
		const tempPct = Math.clamp(temp, 0, displayMax) / displayMax;
		const valuePct = Math.clamp(value, 0, effectiveMax) / displayMax;
		const negativePct = Math.clamp(value, min, 0) / min;
		const colorPct = Math.clamp(value, 0, effectiveMax) / displayMax;

		// Determine colors to use
		const blk = 0x000000;
		const tknBarColor = [
			[1 - colorPct / 2, colorPct, 0],
			[0.5 * colorPct, 0.7 * colorPct, 0.5 + colorPct / 2]
		];
		const hpColor = PIXI.utils.rgb2hex(tknBarColor[number]);
		const c = data.attribute === "attributes.pm" ? CONFIG.T20.tokenMPColors : CONFIG.T20.tokenHPColors;

		// Determine the container size (logic borrowed from core)
		const w = this.w;
		let h = Math.max(canvas.dimensions.size / 12, 8);
		if (this.document.height >= 2) h *= 1.6; // Enlarge the bar for large tokens
		const bs = Math.clamp(h / 8, 1, 2);
		const bs1 = bs + 1;

		// Overall bar container
		bar.clear();
		bar.beginFill(blk, 0.5).lineStyle(bs, blk, 1.0).drawRoundedRect(0, 0, w, h, 3);

		// // Maximum HP penalty
		// else if (tempmax < 0) {
		//   const pct = (max + tempmax) / max;
		//   bar.beginFill(c.negmax, 1.0).lineStyle(1, blk, 1.0).drawRoundedRect(pct*w, 0, (1-pct)*w, h, 2);
		// }

		// Health bar
		bar
			.beginFill(hpColor, 1.0)
			.lineStyle(bs, blk, 1.0)
			.drawRoundedRect(0, 0, valuePct * w, h, 2);

		// Temporary hit points
		if (temp > 0) {
			bar
				.beginFill(c.temp, 1.0)
				.lineStyle(0)
				.drawRoundedRect(bs1, bs1, tempPct * w - 2 * bs1, h - 2 * bs1, 1);
		}

		// Negative HP
		if (value < 0) {
			bar
				.beginFill(c.negmax, 1.0)
				.lineStyle(bs, blk, 1.0)
				.drawRoundedRect((1 - negativePct) * w, 0, negativePct * w, h, 2);
		}

		// Set position
		let posY = number === 0 ? this.h - h : 0;
		bar.position.set(0, posY);
	}

	drawRanges(forceRedraw) {
		const showRanges = ui.controls.controls.tokens.tools.range.active;
		if (!showRanges || forceRedraw || !this.controlled) {
			this.T20Ranges.forEach((r) => this.removeChild(r));
			this.T20Ranges = [];
		}
		if (showRanges && !this.T20Ranges.length && this.controlled) {
			const { units, size } = canvas.scene.grid;
			const { height, width } = canvas.dimensions;
			if (units != "m") return;
			const ranges = [9, 30, 90];
			for (const range of ranges) {
				if (range * size > width && range * size > height) continue;
				this._drawRange(range);
			}
		}
	}

	/**
	 * Draw range circles, range starts at token border not center.
	 */
	_drawRange(range) {
		const label = {
			9: T20.distanceUnits.short,
			30: T20.distanceUnits.medium,
			90: T20.distanceUnits.long
		}[range];
		const { distance, size } = canvas.dimensions;
		const squares = range / distance;
		if (squares < 1) return;
		// const bonusSize = (this.w > size ? this.w / 2 : 0);
		const bonusSize = Math.max(this.w, size) / 2;
		const circle = new PIXI.Graphics();
		circle
			.lineStyle(2, 0x000000, 1.0)
			.drawCircle(this.bounds.width / 2, this.bounds.height / 2, size * (range / distance) + bonusSize);
		this.T20Ranges.push(circle);
		this.addChild(circle);
		// Text
		const { PreciseText } = foundry.canvas.containers;
		const text = new PreciseText(`${range}m\n${label}`, CONFIG.canvasTextStyle.clone());
		text.anchor.set(0.5, 0.5);
		text.position.set((range / distance) * size + bonusSize * 2, this.bounds.width / 2);
		this.T20Ranges.push(text);
		this.addChild(text);
	}
}

class ActiveEffectConfigT20 extends foundry.applications.sheets.ActiveEffectConfig {
	/* override*/
	get title() {
		if (this.document.flags?.tormenta20?.onuse) {
			return `Efeito de Uso: ${this.document.name}`;
		}
		return `${game.i18n.localize(`DOCUMENT.${this.document.documentName}`)}: ${this.document.name}`;
	}

	static PARTS = {
		...super.PARTS,
		details: {
			template: "systems/tormenta20/templates/apps/active-effect/details.hbs"
		},
		duration: {
			template: "systems/tormenta20/templates/apps/active-effect/duration.hbs"
		}
	};
}

class AbilityCalculator extends FormApplication {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "ability-calculator",
			classes: ["tormenta20"],
			title: game.i18n.localize("T20.AbilityCalculator"),
			template: "systems/tormenta20/templates/apps/ability-calculator.hbs",
			width: 500,
			height: "auto"
		});
	}

	getData() {
		let sheetData = super.getData();
		// ACTORDATA
		sheetData.actor = this.object;
		sheetData.system = this.object.system;
		sheetData.flags = this.object.flags.tormenta20;
		// SETTINGS
		sheetData.AbilityRule = "pointbuy"; // [pointbuy, roll4d6, array]
		sheetData.AbilityRacialRule = "tormenta20"; // ['default','flex']
		sheetData.AbilityPoints = 10;
		sheetData.AbilityArray = [4, 2, 1, 1, 0, -1]; // [3, 3, 1, 1, 0, 0] [3, 2, 2, 1, 1, 0]
		sheetData.config = CONFIG.T20;

		return sheetData;
	}

	async _updateObject(event, formData) {
		foundry.utils.expandObject(formData);
	}
}

class ActorSettings extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "actor-settings";
		options.template = "systems/tormenta20/templates/apps/actor-settings.hbs";
		options.height = "auto";
		options.width = 400;
		options.minimizable = true;
		options.title = "Configurações de Personagem";
		return options;
	}

	getData() {
		let data = super.getData();
		return data;
	}

	async _updateObject(event, formData) {
		this.object.update(formData);
	}
}

/**
 * A simple form to set actor movement speeds
 * @extends {DocumentSheet}
 */
class ActorMovementConfig extends DocumentSheet {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20"],
			template: "systems/tormenta20/templates/apps/movement-config.hbs",
			width: 300,
			height: "auto"
		});
	}

	/* -------------------------------------------- */

	/** @override */
	get title() {
		return `Deslocamento: ${this.document.name}`;
	}

	/* -------------------------------------------- */

	/** @override */
	getData(options) {
		const system = this.document.system;
		const sourceMovement = system.toObject(true).attributes.movement;
		const schema = system.schema.getField("attributes.movement").fields;
		const data = {
			movement: sourceMovement,
			schema: schema
		};
		for (let [k, move] of Object.entries(data.movement)) {
			if (!T20.movementTypes[k]) continue;
			data.movement[k].value = Number.isNumeric(move.base) ? move.base.toNearest(0.1) : 0;
		}
		return data;
	}
}

/**
 * A form to set actor damage and condition resistances
 * @extends {DocumentSheet}
 */
class ActorResistanceConfig extends DocumentSheet {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20"],
			template: "systems/tormenta20/templates/apps/resistance-config.hbs",
			width: 330,
			height: "auto"
		});
	}

	/* -------------------------------------------- */

	/** @override */
	get title() {
		return `Resistências: ${this.document.name}`;
	}

	/* -------------------------------------------- */

	/** @override */
	getData(options) {
		const sourceResistance = foundry.utils.getProperty(this.document._source, "system.tracos.resistencias") || {};

		const resist = Object.keys(CONFIG.T20.damageTypes).reduce((o, k) => {
			o[k] = {
				value: 0,
				base: 0,
				bonus: [],
				excecao: 0,
				imunidade: false,
				vulnerabilidade: false
			};
			return o;
		}, {});

		const data = {
			resistance: foundry.utils.mergeObject(resist, sourceResistance),
			// foundry.utils.deepClone(sourceResistance),
			config: CONFIG.T20
		};
		return data;
	}
}

class RestConfigDialog extends foundry.applications.api.DialogV2 {
	constructor(options = {}) {
		super(options);
		this.options.classes.push(...["tormenta20"]);
	}

	static async create(actors) {
		if (!actors.length) {
			ui.notifications.warn("Nenhum personagem selecionado!");
			return;
		}

		async function descanso(actors, modificador, modPV, modPM, curaCP = 0, curaAC = 0) {
			let msg = [];
			for (let actor of actors) {
				if (actor.actor) {
					let m = await actor.actor.descanso(modificador, modPV, modPM, curaCP, curaAC, false);
					msg.push(m);
				} else if (actor.documentName === "Actor") {
					let m = await actor.descanso(modificador, modPV, modPM, curaCP, curaAC, false);
					msg.push(m);
				}
			}
			let descricao = "";
			const condicao = ["Ruim", "Normal", "Confortável", "Luxuoso"];
			let c = condicao[Math.floor(modificador)];
			descricao += `<span>Condição ${c}: ${modificador}/nivel</span><br>`;
			if (modPV) {
				descricao += `<span>Extra PV: ${modPV}/nivel</span><br>`;
			}
			if (modPM) {
				descricao += `<span>Extra PM: ${modPM}/nivel</span><br>`;
			}
			if (curaCP) {
				descricao += "<span>Cuidados Rolongados (+1 PV/Nível)</span><br>";
			}
			if (curaAC) {
				descricao += "<span>Acompanhamento Médico (+1 PV/Nível)</span><br>";
			}
			descricao += `<p>${msg.join("<br>")}</p>`;
			let content = {
				item: {
					name: game.i18n.localize("T20.Rest"),
					img: "icons/svg/regen.svg"
				},
				system: {
					description: {
						value: descricao
					}
				}
			};
			let template = "systems/tormenta20/templates/chat/chat-card.hbs";
			const html = await foundry.applications.handlebars.renderTemplate(template, content);
			const chatData = {
				user: game.user.id,
				type: CONST.CHAT_MESSAGE_STYLES.OTHER,
				content: html
			};
			ChatMessage.create(chatData);
		}

		let content = `<form>
		<div class="form-group">
				<label>Qualidade</label> <select name='qualidade'>
						<option value=0.5>Ruim</option>
						<option value=1 selected>Normal</option>
						<option value=2 >Confortável</option>
						<option value=3>Luxuoso</option>
				</select>
		</div>
		<div class="form-group">
				<label>PV Extra / Por Nível</label>
				<div class="form-fields"><input type='number' name='modPV' value='0'></div>
		</div>
		<div class="form-group">
				<label>PM Extra / Por Nível</label>
				<div class="form-fields"><input type='number' name='modPM' value='0'></div>
		</div>
		<div class="form-group">
				<label>Cuidados Prolongados</label>
				<div class="form-fields"><input type='checkbox' name='curaCP' value=1></div>
		</div>
		<div class="form-group">
				<label>Acompanhamento Médico</label>
				<div class="form-fields"><input type='checkbox' name='curaAC' value=1></div>
		</div>
		</form>`;

		return this.wait({
			actors,
			window: {
				title: "Descanso",
				icon: "fa-solid fa-bed"
			},
			content,
			buttons: [
				{
					label: "OK",
					action: "ok",
					callback: (event, button, dlg) => {
						const modQ = parseFloat(dlg.element.querySelector("[name=qualidade]").value);
						const modPV = parseInt(dlg.element.querySelector("[name=modPV]").value);
						const modPM = parseInt(dlg.element.querySelector("[name=modPM]").value);
						const curaCP = dlg.element.querySelector("[name=curaCP]").checked;
						const curaAC = dlg.element.querySelector("[name=curaAC]").checked;
						descanso(actors, modQ, modPV, modPM, curaCP, curaAC);
					}
				},
				{
					label: "Cancel"
				}
			],
			position: { width: 400 }
		});
	}
}

class StatblockParser extends FormApplication {
	static loadedCompendiums = false;

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "statblock-parser",
			classes: ["tormenta20"],
			title: game.i18n.localize("T20.StatblockParser"),
			template: "systems/tormenta20/templates/apps/statblock-parser.hbs",
			width: 900,
			height: "auto",
			resizable: true
		});
	}

	getData() {
		let formData = super.getData();
		formData.config = CONFIG.T20;
		formData.parser = this.object;
		formData.statblock = this.object.statblock;
		formData.schema = this.object.schema;
		formData.items = this.object.items;
		formData.log = this.object.log;

		return formData;
	}

	activateListeners(html) {
		html.find(".validate").click(this._parseStatblock.bind(this));
		html.find(".apply").click(this._applyToActor.bind(this));
	}

	toRegExpOr(list, values = false) {
		let j;
		if (list instanceof Array && list.every((i) => typeof i == "string")) {
			j = list.join("|");
		} else if (list instanceof Object && values) {
			j = Object.values(list).join("|");
		} else if (list instanceof Object && !values) {
			j = Object.keys(list).join("|");
		} else return false;

		return new RegExp(`(${j})`, "i");
	}

	async _applyToActor(ev) {
		ev.preventDefault();
		let actor = this.object.actor;
		let acItems = actor.items.map((m) => m.id);
		actor.deleteEmbeddedDocuments("Item", acItems);
		let acEffects = actor.effects.map((m) => m.id);
		actor.deleteEmbeddedDocuments("ActiveEffect", acEffects);

		actor.update({
			type: "npc",
			name: this.object.schema.name,
			system: this.object.schema
		});
		await actor.createEmbeddedDocuments("Item", this.object.items, { statblockParsing: true });
		await actor.createEmbeddedDocuments("ActiveEffect", this.object.effects);
		return this.close();
	}

	async _parseStatblock(ev) {
		ev.preventDefault();
		if (!this.constructor.loadedCompendiums) {
			const commonFields = [
				"system.alcance",
				"system.area",
				"system.ativacao",
				"system.chatFlavor",
				"system.duracao",
				"system.efeito",
				"system.resistencia",
				"system.rolls",
				"system.rolltags",
				"system.tipo"
			];
			const equipmentFields = [
				"system.alcance",
				"system.armadura",
				"system.chatFlavor",
				"system.consume",
				"system.criticoM",
				"system.criticoX",
				"system.empunhadura",
				"system.espacos",
				"system.equipado",
				"system.preco",
				"system.proficiencia",
				"system.proposito",
				"system.propriedades",
				"system.qtd",
				"system.rolls",
				"system.rolltags"
			];
			this.constructor.packequipamentos = [
				...(await game.packs.get("tormenta20.equipamentos").getIndex({ fields: equipmentFields })),
				...(await game.packs.get("tormenta20.equipamentos-magicos").getIndex({ fields: equipmentFields }))
			];
			this.constructor.packsmagias = await game.packs.get("tormenta20.magias").getIndex({
				fields: ["system.circulo", "system.consume", "system.escola", ...commonFields]
			});
			this.constructor.packspoderes = await game.packs
				.get("tormenta20.poderes")
				.getIndex({ fields: ["system.subtipo", commonFields] });
			this.constructor.npcFeatures = await game.packs
				.get("tormenta20.habilidades-de-criaturas")
				.getIndex({ fields: ["system.subtipo", commonFields] });

			this.constructor.loadedCompendiums = true;
		}
		const statblock = ev.currentTarget
			.closest("form")
			.statblock.value.replace(/-\n/g, "")
			.replace(/([a-zA-Z0-9áâãàäéêèëíìïóôõòöúùüçñ,])(\n)([a-z0-9áâãàäéêèëíìïóôõòöúùüçñ\-+()])/g, "$1 $3")
			.replace(
				/\n(Magias\s*.*\.)\s*(\d[ºo][\s\S]*?\.)/,
				(_, magias, spells) => `\n${magias} ${spells.replace(/\n/g, " ")}`
			)
			.replaceAll(/–/g, "-");
		const schema = new ActorT20({
			type: "npc",
			name: "template"
		}).system.toObject();
		const log = [];
		const itemsList = [];
		this.object.items = [];
		this.object.effects = [];
		// const statblock2 = statblock.split("\n").filter(Boolean);
		// const log2 = {
		// 	name: { success: false, message: "Nome" },
		// 	cr: { success: false, message: "ND" },
		// 	type: { success: false, message: "Tipo" },
		// 	size: { success: false, message: "Tamanho" },
		// 	role: { success: false, message: "Papel em Combate" },
		// 	abilities: { success: false, message: "Atributos" },
		// 	hp: { success: false, message: "PV" },
		// 	mp: { success: false, message: "PM" },
		// 	defense: { success: false, message: "Defesa" },
		// 	immunities: { success: false, message: "Imunidades a Condições" },
		// 	dr: { success: false, message: "Reduções de Dano" },
		// 	movement: { success: false, message: "Deslocamentos" },
		// 	senses: { success: false, message: "Sentidos" },
		// 	skills: { success: false, message: "Perícias" },
		// 	powers: { success: false, message: "Poderes e Magias" },
		// 	weapons: { success: false, message: "Armas" },
		// 	equipment: { success: false, message: "Equipamentos" },
		// 	loot: { success: false, message: "ND" }
		// };
		// console.log(statblock2);
		// this.parseData2(statblock2, schema, itemsList, log2); //LINHA A LINHA
		this.parseData(statblock, schema, itemsList, log);
		this.parseSkills(statblock, schema, itemsList, log);
		this.parseAbilities(statblock, schema, itemsList, log);
		this.parseWeapons(statblock, schema, itemsList, log);
		this.parseTreasure(statblock, schema, itemsList, log);
		this.parseDefense(statblock, schema, itemsList, log);
		this.object.statblock = statblock;
		this.object.schema = schema;
		this.object.items = itemsList;
		this.object.log = log;
		this.render(true);
	}

	parseData2(statblock, schema, itemsList, log) {
		let line;

		// GET NAME AND CR;
		line = statblock.find((i) => i.match(/ND \w+$/i));
		if (line) {
			let { name, nd } = line.split(/ ND /i);
			schema.name = name;
			schema.attributes.nd = nd;
			log.name = { success: true, message: `Nome: ${schema.name}` };
			log.cr = { success: true, message: `ND: ${schema.attributes.nd}` };
		}

		// GET TYPE (SUBTYPE), SIZE AND ROLE;
		line = statblock.find(
			(i) => i.match(this.toRegExpOr(T20.creatureTypes)) && i.match(this.toRegExpOr(T20.actorSizes))
		);
		if (line) {
			let t = line.match(this.toRegExpOr(T20.creatureTypes, true))?.[0] ?? "Monstro";
			let st = line.match(/\((\w+)\)/i)?.[0] ?? "";
			let s = line.match(this.toRegExpOr(T20.actorSizes, true))?.[0] ?? "Médio";
			let r = line.match(this.toRegExpOr(T20.creatureRoles, true))?.[0] ?? "Solo";
			schema.detalhes.tipo = foundry.utils.invertObject(T20.creatureTypes)[t[0]];
			schema.detalhes.raca = st;
			log.type = {
				success: true,
				message: `Tipo: ${t} ${st ? `(${st})` : ""}`
			};
			schema.tracos.tamanho = foundry.utils.invertObject(T20.actorSizes)[s[0]] ?? "";
			log.size = { success: true, message: `Tamanho: ${s}` };
			schema.detalhes.role = foundry.utils.invertObject(T20.creatureRoles)[r[0]] ?? "";
			log.role = { success: true, message: `Papel: ${r}` };
		}

		// GET ABILITIES;
		line = statblock.find((i) => i.match(/([A-z]{3} ([\-]?[\d|\—])+, ){5}/gi));
		if (line) {
			let abilities = line
				.toLowerCase()
				.split(",")
				.map((i) => i.trim().split(" "));
			for (const [abl, value] of abilities) {
				schema.atributos[abl] = Number(value);
			}
			log.atributos = { success: true, message: `Atributos: ${line}` };
		}

		// GET RESOURCES HP
		let re = new RegExp(`${game.i18n.translations.T20.HitPoints} \\d+`, "i");
		line = statblock.find((i) => i.match(re));
		if (line) {
			schema.attributes.pv.value = parseInt(line.match(/\d+/)?.[0] ?? 0);
			schema.attributes.pv.max = parseInt(line.match(/\d+/)?.[0] ?? 0);
			log.hp = { success: true, message: `${line}` };
		}
		// GET RESOURCES MP
		re = new RegExp(`${game.i18n.translations.T20.ManaPoints} \\d+`, "i");
		line = statblock.find((i) => i.match(re));
		if (line) {
			schema.attributes.pm.value = parseInt(line.match(/\d+/)?.[0] ?? 0);
			schema.attributes.pm.max = parseInt(line.match(/\d+/)?.[0] ?? 0);
			log.mp = { success: true, message: `${line}` };
		}
		// GET DEFENSE
		re = new RegExp(`${game.i18n.translations.T20.Defense} \\d+`, "i");
		line = statblock.find((i) => i.match(re));
		if (line) {
			schema.attributes.defense.base = parseInt(line.match(/\d+/)?.[0] ?? 0);
			log.defense = { success: true, message: `${line}` };
		}
		// GET RESISTANCES
		if (line) {
			const res = re[0]?.replace(/((Defesa|For|Ref|Von|Fort|Refl|Vont) [\+|\-]?\d+[,]?)/gi, "").trim() || "";
			schema.detalhes.resistencias = res;
			// log.res = {success: true, message: `Resistencias (Texto): ${res}`};
		}
		// console.log(schema, log);
	}

	parseData(statblock, schema, itemsList, log) {
		let msg = "";
		// Extrai o nome e ND
		try {
			const name = statblock.match(/(.*)\n*/);
			const nd = statblock.match(/ND ([\d|\d\/\d]+)/);
			if (name) {
				schema.name = name[1];
				log.push({ success: true, message: `Nome: ${schema.name}` });
			} else log.push({ success: false, message: "Nome" });
			if (nd) {
				schema.attributes.nd = nd[1];
				log.push({ success: true, message: `ND: ${schema.attributes.nd}` });
			} else log.push({ success: false, message: "ND" });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Nome ou ND" });
		}

		// Extrai Tipos
		try {
			const cType = Object.fromEntries(Object.entries(CONFIG.T20.creatureTypes).map(([key, value]) => [value, key]));
			const cRole = Object.fromEntries(Object.entries(CONFIG.T20.creatureRoles).map(([key, value]) => [value, key]));
			const cSize = Object.fromEntries(Object.entries(CONFIG.T20.actorSizes).map(([key, value]) => [value, key]));

			let types = statblock
				.capitalize()
				.match(/.*\s(especial|solo|lacaio|Iniciativa)/i)[0]
				.replace(/Iniciativa|\(|\)/gi, "")
				.trim()
				.split(" ")
				.map((m) => cType[m] || cRole[m.capitalize()] || cSize[m] || m);
			for (let t of types) {
				if (CONFIG.T20.creatureTypes[t]) {
					schema.detalhes.tipo = t;
					log.push({
						success: true,
						message: `Tipo de Criatura: ${CONFIG.T20.creatureTypes[t]}`
					});
				} else if (CONFIG.T20.creatureRoles[t]) {
					schema.detalhes.role = t;
					log.push({
						success: true,
						message: `Papel em Combate: ${CONFIG.T20.creatureRoles[t]}`
					});
				} else if (CONFIG.T20.actorSizes[t]) {
					schema.tracos.tamanho = t;
					log.push({
						success: true,
						message: `Tamanho: ${CONFIG.T20.actorSizes[t]}`
					});
				} else {
					schema.detalhes.raca = t.capitalize();
					log.push({
						success: true,
						message: `Subtipo de Criatura: ${schema.detalhes.raca}`
					});
				}
			}
			if (!schema.detalhes.role) log.push({ success: false, message: "Papel em Combate: Solo" });
		} catch (error) {
			console.warn(error);
			log.push({
				success: false,
				message: "Tipo de Criatura, Papel em Combate, Tamanho, Subtipo de Criatura"
			});
		}

		// Extrai atributos
		try {
			let abilities = statblock.match(/^For ([-|–]?[\d|—]+), *[^\n]*/im);
			abilities = abilities[0]
				.toLowerCase()
				.match(/(\w+) ([\-|\–]?[\d|\—]+)/g)
				.map((m) => {
					return { [m.split(" ")[0]]: m.split(" ")[1] };
				});
			abilities = Object.assign({}, ...abilities);
			msg = "";
			for (let [abl, value] of Object.entries(abilities)) {
				schema.atributos[abl].base = parseInt(value.replace("—", "-0").replace("–", "-"));
				msg += `${abl}: ${value} `;
			}
			log.push({ success: true, message: `Atributos: ${msg}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Atributos" });
		}

		// Extrai Recursos
		try {
			let hp = statblock.match(/Pontos de Vida (?<value>\d+)/i);
			let mp = statblock.match(/Pontos de Mana (?<value>\d+)/i);
			if (hp && hp.groups) {
				schema.attributes.pv.value = parseInt(hp.groups.value);
				schema.attributes.pv.max = parseInt(hp.groups.value);
				log.push({
					success: true,
					message: `Pontos de Vida: ${schema.attributes.pv.max}`
				});
			}
			if (mp && mp.groups) {
				schema.attributes.pm.value = parseInt(mp.groups.value);
				schema.attributes.pm.max = parseInt(mp.groups.value);
				log.push({
					success: true,
					message: `Pontos de Mana: ${schema.attributes.pm.max}`
				});
			} else {
				schema.attributes.pm.value = 0;
				schema.attributes.pm.max = 0;
			}
		} catch (error) {
			console.warn(error);
			log.push({
				success: false,
				message: "Pontos de Vida e/ou Pontos de Mana"
			});
		}

		// Extrai Resistências
		try {
			let res = statblock.match(/Von\s[+-]\d*,\s*(.*)\s*Pontos de Vida/i)?.[1] ?? "";
			schema.detalhes.resistencias = res;
			log.push({
				success: true,
				message: `Resistências (Texto): ${schema.detalhes.resistencias}`
			});

			res = res.replace(/ |,/g, "_").slugify().replace(/_/g, " ");
			res = res
				.replace(
					/imunidade (?!a magia)|redu[cç][ãa]o\s*de\s*\w*\s*\d*|resist[eê]ncia|vulnerabilidade/gi,
					(match) => `#${match}`
				)
				.split("#")
				.filter(Boolean)
				.map((m) => m.trim());
			res = res.map((m) => {
				return {
					[m.match(/imunidade|reducao|resistencia|vulnerabilidade/i)]: m.split(" ")
				};
			});

			let ic = [];
			let rd = [];
			let dmgimuni = [];
			let dmgvuln = [];
			res.forEach((r) => {
				if (r.imunidade) {
					ic.push(...r.imunidade.filter((f) => CONFIG.T20.conditionTypes[f]));
					dmgimuni.push(...r.imunidade.filter((f) => CONFIG.T20.damageTypes[f]));
				} else if (r.reducao) {
					let [value, vuln] = r.reducao.find((f) => parseInt(f)).split("/");
					rd.push(
						...r.reducao
							.filter((f) => CONFIG.T20.damageTypes[f])
							.map((f) => {
								return { [f]: value };
							})
					);
				} else if (r.resistencia) {
					// TODO criar mecanica de resistência
					// TODO converter para pegar a habilidade de criatura e alterar o valor do efeito
					if (/resist[eê]ncia a magia \+\d/i.test(r.resistencia.join(" "))) {
						const qtd = r.resistencia.join(" ").match(/resist[eê]ncia a magia \+(\d*)/i)[1];
						this.object.effects.push(
							new ActiveEffect(
								{
									img: "icons/svg/upgrade.svg",
									name: "Resistência a Magia",
									changes: [{ key: "roll", priority: null, value: qtd }],
									disabled: true,
									flags: {
										tormenta20: {
											onuse: true,
											skill: true,
											items: "Fortitude;Reflexos;Vontade"
										}
									}
								},
								{ parent: this.object.actor }
							)
						);
						log.push({ success: true, message: `Resistência a Magia +${qtd}` });
					}
				} else if (r.vulnerabilidade) {
					dmgvuln = r.vulnerabilidade.filter((f) => CONFIG.T20.damageTypes[f]);
				}
			});

			if (ic.length) {
				schema.tracos.ic.value = ic;
				log.push({
					success: true,
					message: `Imunidades a Condições: ${ic.join(", ") || "—"}`
				});
			}
			msg = "";
			let tmp = Object.assign({}, ...rd);
			for (let [k, v] of Object.entries(tmp)) {
				schema.tracos.resistencias[k].base = parseInt(v) || 0;
				msg += `${k}: ${v}; `;
			}
			log.push({ success: true, message: `Resistência a dano: ${msg || "—"}` });
			for (let k of dmgimuni) {
				schema.tracos.resistencias[k].imunidade = true;
			}
			log.push({
				success: true,
				message: `Imunidade a dano: ${dmgimuni.join(", ") || "—"}`
			});
			for (let k of dmgvuln) {
				schema.tracos.resistencias[k].vulnerabilidade = true;
			}
			log.push({
				success: true,
				message: `Vulnerabilidade a dano: ${dmgvuln.join(", ") || "—"}`
			});
		} catch (error) {
			console.warn(error);
			log.push({
				success: false,
				message: "Imunidades a Condições e Reduções de Dano"
			});
		}

		// Extrai Deslocamentos
		try {
			// let movement = statblock.toLowerCase().match(/\n(\w+ \d+m \(\d+q\))/ig).map( m => [m.match(/deslocamento|escalar|escavar|natação|voo/i)[0], m.match(/\d+/)[0]]);
			let movementTxt = statblock.split("\n").find((l) => l.match(/^Deslocamento( \w+)? \d+m/i));
			let temp = movementTxt.split("q),");
			temp = temp.pop().trim();
			if (!temp.match(/\(\d+q\)/)) {
				schema.detalhes.movimento = temp;
				movementTxt = movementTxt.replace(`, ${temp}`, "", movementTxt);
			}

			let movement = movementTxt
				.slugify()
				.replaceAll("-", " ")
				.replace(/^Deslocamento ([A-z]+)/i, "$1")
				.split(",")
				.map((m) => [m.match(/\w+/)[0], m.match(/\d+/)[0]]);

			// movement2.split(',').map(d => d.split(' '));
			msg = "";
			for (let [move, value] of movement) {
				let ms = {
					deslocamento: "walk",
					escalar: "climb",
					escavar: "burrow",
					natacao: "swim",
					voo: "fly"
				};
				if (ms[move]) {
					schema.attributes.movement[ms[move]].base = parseInt(value);
					msg += `${move} ${value}; `;
				}
			}
			log.push({ success: true, message: `Movimento: ${msg}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Deslocamentos" });
		}

		// Extrai Sentidos percepção às cegas
		try {
			let senses = Object.fromEntries(Object.entries(CONFIG.T20.senses).map(([key, value]) => [value.slugify(), key]));
			let sentidos = statblock.replace(/\n/g, " ").match(/Iniciativa .* Defesa/i)[0];
			sentidos = sentidos.replace(/Defesa/i, "");
			sentidos = sentidos.split(",").map((m) => m.trim().slugify());
			sentidos = sentidos.filter((f) => senses[f]).map((m) => senses[m]);
			schema.attributes.sentidos.value = sentidos;
			log.push({ success: true, message: `Sentidos: ${sentidos.join(", ") || "—"}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Sentidos" });
		}
	}

	parseSkills(statblock, schema, itemsList, log) {
		let msg = "";
		try {
			const sks = {
				...Object.fromEntries(
					Object.entries(T20.pericias)
						.filter(([, value]) => value.label)
						.map(([key, value]) => [value.label, key])
				),
				Fort: "fort",
				Ref: "refl",
				Von: "vont"
			};
			let skills = statblock
				.replace(/\n/g, " ")
				.replace("–", "-")
				.match(
					/(Acrobacia|Adestramento|Atletismo|Atuação|Cavalgar|Conhecimento|Cura|Defesa|Diplomacia|Enganação|Fortitude|Furtividade|Guerra|Iniciativa|Intimidação|Intuição|Investigação|Jogatina|Ladinagem|Luta|Misticismo|Ocultismo|Nobreza|Ofício|Percepção|Pilotagem|Pontaria|Reflexos|Religião|Sobrevivência|Vontade|Fort|Ref|Von) ([\+|\-]\d+)/gi
				);
			skills = Object.fromEntries(
				skills
					.map((entry) => {
						const [pericia, value] = entry.split(" ");
						const skill = sks[pericia.toLowerCase().capitalize()];
						if (!skill) return [];
						return [skill, { value: parseInt(value) }];
					})
					.filter((skill) => skill.length)
			);
			msg = "";
			for (let [key, skill] of Object.entries(skills)) {
				this.parseSkill(key, skill, schema);
				msg += `${CONFIG.T20.pericias[key].label}: ${skill.value + (skill.outros ?? 0)}; `;
			}
			log.push({ success: true, message: `Perícias: ${msg}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Perícias" });
		}
	}

	parseSkill(key, skill, schema) {
		skill.atributo ??= T20.pericias[key].abl;
		skill.outros = 0;
		const nd = schema.attributes.nd;
		let nivel = 1;
		if (["1/2", "1/4"].includes(nd)) nivel = 1;
		else if (["S", "S+"].includes(nd)) nivel = 20;
		else nivel = Number(nd) || 1;

		const meionivel = Math.floor(nivel / 2);
		const treino = nivel > 14 ? 6 : nivel > 6 ? 4 : 2;
		const atributo = schema.atributos[skill.atributo].base;
		const tamanho = T20.pericias[key].sizeMod ? CONFIG.T20.sizeModifiers[schema.tracos.tamanho] : 0;

		const comTreino = meionivel + treino + atributo + tamanho;
		const semTreino = meionivel + atributo + tamanho;
		if (skill.value === comTreino) skill.treinado = true;
		else if (skill.value === semTreino) skill.treinado = false;
		else {
			const treinado = Math.abs(comTreino - skill.value) < Math.abs(semTreino - skill.value);
			skill.treinado = treinado;
			skill.outros = skill.value - (treinado ? comTreino : semTreino);
			skill.value -= skill.outros;
		}
		schema.pericias[key] = skill;
	}

	/**
	 * Search for world collenction and compendiums for item @name and @type
	 */
	searchItem(name, type, itemsList) {
		if (!name) return;
		let idx = 5;
		if (["magia", "poder"].includes(type)) {
			if (name.split("(")[1]) {
				name = name.split("(")[0].trim();
			} else {
				idx = name.split(" ").find((f) => f.length > 3 && f[0].match(/[a-z]/));
				idx = idx ? name.split(" ").indexOf(idx) - 1 : 5;
				name = idx ? name.split(" ", idx).join(" ") : name;
			}
		}
		let names = [];
		let words = name.split(" ", idx);
		if (!words.length) return;
		let conc = "";
		for (let i = 0; i <= words.length; i++) {
			for (let j = 1; j < 6; j++) {
				if (i + j > words.length) continue;
				conc = words.slice(i, i + j).join(" ");
				names.push(conc.slugify());
				conc = words
					.map((m) => m.replace(/.$/, ""))
					.slice(i, i + j)
					.join(" ");
				names.push(conc.slugify());
			}
		}
		let exists = itemsList.find((f) => names.includes(f.name.slugify()));
		if (exists) {
			return { exists: true };
		}
		const packs = {
			"*": "packequipamentos",
			arma: "packequipamentos",
			equipamento: "packequipamentos",
			magia: "packsmagias"
		};
		names.sort((a, b) => b.length - a.length);
		let item;

		const isGeneric = type === "*";
		const typeFilter = (f) => (isGeneric ? !["poder", "magia", "classe"].includes(f.type) : f.type === type);
		const itemDirList = game.items.filter(typeFilter);
		let packList;
		if (type === "poder") packList = [...this.constructor.packspoderes, ...this.constructor.npcFeatures];
		else packList = this.constructor[packs[type]];

		const pack = packList.filter(typeFilter);
		for (const name of names) {
			item = itemDirList.find((f) => f.name.slugify() === name) ?? pack.find((f) => f.name.slugify() === name);
			if (item) break;
		}

		if (!item) {
			type = isGeneric ? "tesouro" : type;
			item = new game.tormenta20.entities.ItemT20({
				type: type,
				name: words.join(" ")
			}).toObject();
			delete item._id;
		}
		return foundry.utils.deepClone(item);
	}

	parseAbilities(statblock, schema, itemsList, log) {
		let msg = "";
		try {
			const items = [];
			let actions = Object.fromEntries(
				Object.entries(CONFIG.T20.abilityActivationTypes).map(([key, value]) => [value, key])
			);
			let abilities = "";
			let lines = statblock.split(/\n/);
			if (statblock.match(/À Distância .*(\n)/i)) {
				abilities = statblock.match(/À Distância .*(\n)/i)[0];
				abilities = lines.find((l) => l.match(/^À Distância /i));
				schema.detalhes.ataquesad = abilities.replace(/À Distância /i, "");
			}
			if (statblock.match(/Corpo a Corpo .*(\n)/i)) {
				abilities = statblock.match(/Corpo a Corpo .*(\n)/i)[0];
				abilities = lines.find((l) => l.match(/^Corpo a Corpo /i));
				schema.detalhes.ataquescac = abilities.replace(/Corpo a Corpo /i, "");
			}
			if (statblock.match(/Deslocamento (.|\n)*/i)) {
				abilities = statblock.match(/Deslocamento .*(\n)/i)[0];
				abilities = lines.find((l) => l.match(/^Deslocamento /i) && l.match(/\d+m (\d+q)/i));
				// schema.detalhes.movimento = abilities.split(',')[1] ?? '';
			}
			// abilities = abilities.match(/((.|\n)*)\nFor /)[1];
			// abilities = abilities.replace(/(\.|\))\n/g,'</abl>#<abl>').split('#');
			// abilities.shift();
			// abilities = abilities.filter( m => !m.match(/(For ([\-|\–]?[\d|\—]+), Des)|(Perícias )|(Equipamento )|(Tesouro )/) );
			// abilities = abilities.map( m =>  m.replace(/<abl>|<\/abl>/g,'').replace(/\n/g,' ').trim());

			abilities = lines
				.filter(
					(l) =>
						!(
							new RegExp(schema.name).test(l)
							|| /ND (\d+|\d+\/\d+)$/i.test(l)
							|| /^Defesa \d+, Fort [+-]?\d+, Ref [+-]?\d+/i.test(l)
							|| /^Corpo a Corpo /i.test(l)
							|| /^[AÀ] Distância /i.test(l)
							|| (/^Deslocamento /i.test(l) && /\d+m (\d+q)/i.test(l))
							|| /^Iniciativa [+-]?\d+, Percep[cç][aã]o [+-]?\d+/i.test(l)
							|| /^Deslocamento /i.test(l)
							|| /^Pontos de (Vida|Mana) \d+/i.test(l)
							|| /^Per[ií]cias \w+ [+-]?\d+/i.test(l)
							|| /^(Equipamento|Equipamentos|Tesouro)/i.test(l)
							|| /^Parceiro/i.test(l)
							|| /^For (-?\d+|—)/i.test(l)
							|| (new RegExp(`^${Object.values(CONFIG.T20.creatureTypes).join("|")}`, "i").test(l)
								&& new RegExp(`(${Object.values(CONFIG.T20.actorSizes).join("|")})`, "i").test(l))
						)
				)
				.forEach((ability) => {
					const magiaMatch = /(Magias\s*.*\.)\s*(\d+[ºo][\s\S]*?\.)/;
					if (magiaMatch.test(ability)) {
						const [_, cd, magias] = ability.match(magiaMatch);
						const escolas = {};
						const matches = [...cd.matchAll(/CD \d+, (\d+).*(\*+)/g)];
						schema.attributes.cd = Number(cd.match(/\(CD (\d+)/)[1]);
						for (const [_, CD, chave] of matches) {
							escolas[chave] = Number(CD) - schema.attributes.cd;
						}
						magias
							.replace(/\d+[ºo]\s*—\s*/g, "")
							.split(/[,;.]/)
							.forEach((magia) => {
								const name = magia.trim();
								const schoolExpert = new RegExp(
									`(${Object.keys(escolas)
										.reverse() // Revert order so "**"" comes before "*"
										.map((k) => k.replace(/[*+]/g, "\\$&"))
										.join("|")})`
								);
								const item = this.searchItem(name.replace(schoolExpert, ""), "magia", itemsList);
								if (!item) return;
								if (schoolExpert.test(name)) {
									item.name = name;
									// TODO increase CD based on schoolExpert's value
								}
								items.push(item);
							});
						return;
					}
					if (/Magias.*\(CD .*\)./.test(ability)) {
						schema.attributes.cd = Number(ability.match(/\(CD (\d+)/)[1]);
						return;
					}
					let spell = !!ability.match(/• /);
					if (spell) ability = ability.replace("•", "").trim();

					let item = this.searchItem(ability, spell ? "magia" : "poder", itemsList);
					if (!item || item.exists) return;

					let action = "";
					let pm = 0;
					const descOri = ability;
					ability = ability.replace(new RegExp(item.name, "i"), "").trim();
					if (ability[0] === "(") {
						action = ability.match(/\(([^)]+)\)/);
						if (action) {
							ability = ability.replace(action[0], "").trim();
							action = action[0].replace(/\(|\)/g, "");
							pm = action.split(",")[1] ?? 0;
							if (pm) pm = pm.match(/\d+/)[0];
							action = action.split(",")[0];
							action = actions[action];
						}
					}

					if (spell) {
						item.system.description.value = `<section class="secret">${descOri}</section>${item.system.description.value}`;
					} else {
						if (item.system?.ativacao?.custo) item.system.ativacao.custo = pm;
						if (item.system?.ativacao?.execucao) item.system.ativacao.execucao = action;
						item.system.description.value = ability;
					}
					items.push(item);
				});
			itemsList.push(...items);
			const powers = items.filter((f) => f.type === "poder");
			const spells = items.filter((f) => f.type === "magia");

			if (powers.length) {
				msg = `Habilidades encontradas (${powers.length}): `;
				msg += `${powers.map((m) => m.name).join(", ")}`;
				log.push({ success: true, message: `${msg}` });
			}
			if (spells.length) {
				msg = `Magias encontradas (${spells.length}): `;
				msg += `${spells.map((m) => m.name).join(", ")}`;
				log.push({ success: true, message: `${msg}` });
			}
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Poderes e Magias" });
		}
	}

	parseWeapons(statblock, schema, itemsList, log) {
		let msg = "";
		try {
			// Filtra as Linhas de Corpo a Corpo|À Distância;
			const armaData = statblock.match(/^((Corpo a Corpo|À Distância) [^.]*)/gim);
			if (!armaData?.length) return;
			const parsedSkills = new Set();
			const itemNames = [];
			const regexNumeral = /\b(dois|duas|três|quatro|cinco|seis|sete|oito|nove|dez)\b\s+(\w+)/i;
			for (let AD of armaData) {
				// Limpa e separa as armas;
				AD = AD.replace(/Corpo a Corpo|À Distância/gi, "")
					.replace(/\n/g, " ")
					.replace(" e ", "|")
					.replace(" ou ", "|")
					.replace("), ", ")|")
					.trim()
					.split("|");

				// Extrai os dados das armas
				AD.forEach((arma) => {
					let qtd = 1;
					arma = arma.match(/(?<name>.*[^\+|\-]) (?<atk>[+|-]\d+) \((?<dmg>.*)\)/).groups;
					if (regexNumeral.test(arma.name)) {
						arma.name = arma.name.replace(regexNumeral, (_original, numero, palavra) => {
							qtd = game.tormenta20.utils.wordToNumber(numero);
							return game.tormenta20.utils.despluralizar(palavra).titleCase();
						});
					}
					let item = this.searchItem(arma.name, "arma", itemsList);
					if (!item || item.exists) return;
					// Prepara Rolagem de Ataque
					const { rolls } = item.system;
					const attack = rolls.find((r) => r.type === "ataque");
					if (arma.atk && attack) {
						const pericia = attack.parts[1][0];
						if (!parsedSkills.has(pericia) && !schema.pericias[pericia].treinado) {
							parsedSkills.add(pericia);
							schema.pericias[pericia].value = Number(arma.atk);
							this.parseSkill(pericia, schema.pericias[pericia], schema);
						} else {
							const { value, outros } = schema.pericias[pericia];
							arma.atk = Number(arma.atk) - value - outros;
							attack.parts[2][0] = arma.atk;
						}
					}
					// Prepara Rolagem de Dano
					const weaponDamage = rolls.find((r) => r.type === "dano");
					if (arma.dmg && weaponDamage) {
						let [dmg, crit] = arma.dmg.split(",");
						dmg = dmg.split("mais").map((rp) =>
							rp
								.trim()
								.split(" ")
								.map((t) => t.slugify())
								.filter((m) => m.match(/\d+d\d+[\+|\-]?[\d+]?/) || CONFIG.T20.damageTypes[m])
						);
						const [wdmg, ...restDmg] = dmg;
						const dmgtype = weaponDamage?.parts?.[0]?.[1] ?? wdmg?.[1] ?? "corte";
						const baseDmg = wdmg?.[0] ?? "";
						weaponDamage.parts = [[baseDmg, dmgtype, "weapon"], ["", "", ""], ...restDmg];
						const { margem, multi } = crit?.trim().match(/(?<margem>\d+)?\/?(?<multi>x\d+)?/).groups || {};
						if (margem) item.system.criticoM = parseInt(margem);
						if (multi) item.system.criticoX = parseInt(multi.slice(1));
					}
					if (qtd > 1) item.system.qtd = qtd;
					item.system.equipado = 1;
					item.system.description.value = `<section class="secret">${arma.name}</section>${item.system.description.value}`;
					itemsList.push(item);
					itemNames.push(qtd > 1 ? `${item.name} x${qtd}` : item.name);
				});
			}

			msg += `Armas encontradas (${itemNames.length}): ${itemNames.join(", ")}`;
			log.push({ success: true, message: `${msg}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Armas" });
		}
	}

	parseTreasure(statblock, schema, itemsList, log) {
		let msg = "";
		try {
			let equipamentos = statblock.replace(/\n/g, " ").match(/Equipamento[s]? .* Tesouro/i);
			equipamentos = equipamentos ? equipamentos[0] : false;
			if (equipamentos) {
				equipamentos = equipamentos
					.replace(/Equipamento|Equipamentos|Tesouro/gi, "")
					.split(",")
					.map((m) => m.replace(".", "").trim());
				equipamentos = equipamentos.map((m) => {
					return { desc: m };
				});
				equipamentos.forEach((equip) => {
					let item = this.searchItem(equip.desc, "*", itemsList);
					if (!item || item.exists) return;
					let qtd = equip.desc.match(/x(?<qtd>\d+)/);
					if (qtd) item.system.qtd = qtd.groups?.qtd || 1;
					item.system.description.value = `${equip.desc}<br>${item.system.description.value}`;
					if (item.type === "equipamento") {
						item.system.equipado = true;
						if (item.system.tipo === "pesada") {
							for (let [key, move] of Object.entries(schema.attributes.movement)) {
								if (Number.isNumeric(move.base) && move.base) {
									schema.attributes.movement[key].base += 3;
								}
							}
						}
					}
					equip.item = item;
				});
				equipamentos = equipamentos.filter((f) => f.item).map((m) => m.item);
				itemsList.push(...equipamentos);

				msg += `Equipamentos encontrados (${equipamentos.length}): `;
				msg += `${equipamentos.map((m) => (m.system.qtd > 1 ? `${m.name} x${m.system.qtd}` : m.name)).join(", ")}`;
				log.push({ success: true, message: `${msg}` });
			}
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Equipamentos" });
		}

		try {
			let tesouros = statblock.match(/Tesouro .*/i)[0];
			tesouros = tesouros.replace(/Tesouro/i, "").trim();
			schema.detalhes.tesouro = tesouros;
			log.push({
				success: true,
				message: `Tesouro (Texto): ${schema.detalhes.tesouro}`
			});
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Tesouro" });
		}
	}

	parseDefense(statblock, schema, itemsList, log) {
		try {
			const { value } = statblock.match(/Defesa (?<value>\d+)/i).groups;
			const armors = itemsList.filter((i) => i.type === "equipamento" && i.system.equipado);
			const armor = armors.find((i) => ["leve", "pesada"].includes(i.system.tipo));
			const totalArmor = armors.map((m) => m.system.armadura.value).reduce((sum, v) => sum + v, 0);
			const maxAtr = armor ? armor.system.armadura.maxAtr : 99;
			const atributo = Math.clamp(schema.atributos.des.base, 0, maxAtr);
			if (value) schema.attributes.defesa.base = Number(value) - totalArmor - atributo;
			log.push({ success: true, message: `Defesa: ${value}` });
		} catch (error) {
			console.warn(error);
			log.push({ success: false, message: "Defesa" });
		}
	}
}

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * A specialized form used to select from a checklist of attributes, traits, or properties
 * @implements {FormApplication}
 */
class TraitSelector extends HandlebarsApplicationMixin(ApplicationV2) {
	constructor(actor, options) {
		super({ actor: actor.id, ...options });
		this.object = actor;
	}

	// eslint-disable-next-line no-unused-private-class-members
	#id;

	static DEFAULT_OPTIONS = {
		id: "{actor}-{trait}-trait-selector",
		classes: ["tormenta20", "trait-selector"],
		tag: "form",
		position: {
			height: "auto",
			width: 400
		},
		form: {
			closeOnSubmit: true,
			handler: TraitSelector.#onCommitChanges
		},
		window: {
			title: "T20.ActorTraitSelection",
			contentClasses: ["standard-form"]
		}
	};

	static PARTS = {
		body: {
			template: "systems/tormenta20/templates/apps/trait-selector.hbs"
		},
		footer: {
			template: "templates/generic/form-footer.hbs"
		}
	};

	/* -------------------------------------------- */

	/**
	 * Return a reference to the target attribute
	 * @type {String}
	 */
	get attribute() {
		return this.options.name;
	}

	/* -------------------------------------------- */

	_initializeApplicationOptions(options) {
		const applicationOptions = super._initializeApplicationOptions(options);
		applicationOptions.uniqueId = `${options.actor}-${options.id}`;
		return applicationOptions;
	}

	/** @override */
	async _prepareContext(opt) {
		// Get current values
		const { deepClone, getProperty } = foundry.utils;
		const attr = deepClone(getProperty(this.object, this.attribute));
		attr.value = new Set(attr.value);
		// Populate choices
		let choices = {};
		const columns = Object.values(this.options.choices).some((c) => !!Object.keys(c.choices ?? {}).length) ? 2 : 1;
		if (this.options.choices !== undefined) {
			choices = foundry.utils.duplicate(this.options.choices);
			for (let [k, v] of Object.entries(choices)) {
				choices[k] = {
					label: v.label ?? v,
					choices: v.choices ?? [],
					chosen: attr.value.has(k)
				};
				for (let [ck, cv] of Object.entries(choices[k].choices)) {
					choices[k].choices[ck] = {
						label: cv.label ?? cv,
						chosen: attr.value.has(ck),
						disabled: attr.value.has(k)
					};
				}
			}
		}
		// Return data
		return {
			allowCustom: this.options.allowCustom,
			choices,
			custom: attr ? attr.custom : "",
			columns
		};
	}

	/** @inheritDoc */
	async _preparePartContext(partId, context, options) {
		context = await super._preparePartContext(partId, context, options);
		context.fields = [];
		context.buttons = [{ type: "submit", icon: "fas fa-save", label: "Save Changes" }];
		return context;
	}

	/* -------------------------------------------- */

	_onChangeForm(formConfig, event) {
		super._onChangeForm(formConfig, event);
		const target = event.target;
		const subgroup = target.closest("li").querySelector("ul");
		if (subgroup) {
			for (const child of subgroup.querySelectorAll("input")) {
				child.disabled = target.checked;
			}
		}
	}

	/* -------------------------------------------- */

	static async #onCommitChanges(event, form, fd) {
		const updateData = {};
		// Obtain choices
		const chosen = [];
		for (let [k, v] of Object.entries(fd.object)) {
			if (k !== "custom" && v) chosen.push(k);
		}
		updateData[`${this.attribute}.value`] = chosen.sort();

		// Validate the number chosen
		if (this.options.minimum && chosen.length < this.options.minimum) {
			return ui.notifications.error(`Você precisa escolher no mínimo ${this.options.minimum} perícias`);
		}
		if (this.options.maximum && chosen.length > this.options.maximum) {
			return ui.notifications.error(`Você pode escolher no máximo ${this.options.maximum} perícias`);
		}

		// Include custom
		if (this.options.allowCustom) {
			updateData[`${this.attribute}.custom`] = fd.object.custom;
		}

		// Update the object
		this.object.update(updateData);
	}
}

const fields$e = foundry.data.fields;

/* ---------------------------------------- */
/*  Custom DataFields                       */
/* ---------------------------------------- */

/**
 * A subclass of ObjectField that represents a mapping of keys to the provided DataModel type.
 * @extends ObjectField
 * @param {DataModel} type                 The class of DataModel which should be embedded in this field
 * @param {DataFieldOptions} [options={}]  Options which configure the behavior of the field
 */
class MappingField extends fields$e.ObjectField {
	constructor(model, options) {
		if (!(model instanceof foundry.data.fields.DataField)) {
			throw new Error("MappingField must have a DataField as its contained element");
		}
		super(options);

		/**
		 * The embedded DataField definition which is contained in this field.
		 * @type {DataField}
		 */
		this.model = model;
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	static get _defaults() {
		return foundry.utils.mergeObject(super._defaults, {
			initialKeys: null,
			initialValue: null,
			initialKeysOnly: false
		});
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_cleanType(value, options) {
		Object.entries(value).forEach(([k, v]) => {
			if (k.startsWith("-=")) return;
			value[k] = this.model.clean(v, options);
		});
		return value;
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	getInitialValue(data) {
		let keys = this.initialKeys;
		const initial = super.getInitialValue(data);
		if (!keys || !foundry.utils.isEmpty(initial)) return initial;
		if (!(keys instanceof Array)) keys = Object.keys(keys);
		for (const key of keys) initial[key] = this._getInitialValueForKey(key);
		return initial;
	}

	/* -------------------------------------------- */

	/**
	 * Get the initial value for the provided key.
	 * @param {string} key       Key within the object being built.
	 * @param {object} [object]  Any existing mapping data.
	 * @returns {*}              Initial value based on provided field type.
	 */
	_getInitialValueForKey(key, object) {
		const initial = this.model.getInitialValue();
		return this.initialValue?.(key, initial, object) ?? initial;
	}

	/* -------------------------------------------- */

	/** @override */
	_validateType(value, options = {}) {
		if (foundry.utils.getType(value) !== "Object") throw new Error("must be an Object");
		const errors = this._validateValues(value, options);
		if (!foundry.utils.isEmpty(errors)) throw new foundry.data.fields.ModelValidationError(errors);
	}

	/* -------------------------------------------- */

	/**
	 * Validate each value of the object.
	 * @param {object} value    The object to validate.
	 * @param {object} options  Validation options.
	 * @returns {object}        An object of value-specific errors by key.
	 */
	_validateValues(value, options) {
		const errors = {};
		for (const [k, v] of Object.entries(value)) {
			if (k.startsWith("-=")) continue;
			const error = this.model.validate(v, options);
			if (error) errors[k] = error;
		}
		return errors;
	}

	/* -------------------------------------------- */

	/** @override */
	initialize(value, model, options = {}) {
		if (!value) return value;
		const obj = {};
		const initialKeys = this.initialKeys instanceof Array ? this.initialKeys : Object.keys(this.initialKeys ?? {});
		const keys = this.initialKeysOnly ? initialKeys : Object.keys(value);
		for (const key of keys) {
			const data = value[key] ?? this._getInitialValueForKey(key, value);
			obj[key] = this.model.initialize(data, model, options);
		}
		return obj;
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_getField(path) {
		if (path.length === 0) return this;
		else if (path.length === 1) return this.model;
		path.shift();
		return this.model._getField(path);
	}
}

/* ----------------------------- */

class SkillData extends foundry.abstract.DataModel {
	/** @override */
	static defineSchema() {
		return {
			atributo: new fields$e.StringField({
				required: true,
				nullable: false,
				blank: false,
				choices: T20.atributos,
				initial: "for",
				label: "T20.SkillAbility",
				hint: "T20.SkillAbilityHint"
			}),
			treinado: new fields$e.BooleanField({ label: "T20.SkillTrained", hint: "T20.SkillTrainedHint" }),
			st: new fields$e.BooleanField({ label: "T20.SkillTrainedOnly", hint: "T20.SkillTrainedOnlyHint" }),
			pda: new fields$e.BooleanField({ label: "T20.SkillArmorPenalty", hint: "T20.SkillArmorPenaltyHint" }),
			size: new fields$e.BooleanField({ label: "T20.SkillSizeModifier", hint: "T20.SkillSizeModifierHint" }),
			value: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.SkillValue",
				hint: "T20.SkillValueHint"
			}),
			outros: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.SkillOtherValue",
				hint: "T20.SkillOtherValueHint"
			}),
			condi: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.SkillStatusEffectValue",
				hint: "T20.SkillStatusEffectValueHint"
			}),
			bonus: new fields$e.ArrayField(new fields$e.StringField(), {
				label: "T20.SkillEffectsValues",
				hint: "T20.SkillEffectsValuesHint"
			}),
			custom: new fields$e.BooleanField({ label: "T20.SkillCustom", hint: "T20.SkillCustomHint" }),
			label: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.SkillLabel",
				hint: "T20.SkillLabelHint"
			})
			// order: new fields.NumberField({ required: true, nullable:false, initial:0 }),
		};
	}

	static migrateData(data) {
		if (data.bonus?.length > 0) data.bonus = [];
		if (data.condi != 0) data.condi = 0;
		return super.migrateData(data);
	}
}

/* ----------------------------- */

/**
 * @typedef {StringFieldOptions} FormulaFieldOptions
 * @property {boolean} [deterministic=false]  Is this formula not allowed to have dice values?
 */

/**
 * Special case StringField which represents a formula.
 *
 * @param {FormulaFieldOptions} [options={}]  Options which configure the behavior of the field.
 * @property {boolean} deterministic=false    Is this formula not allowed to have dice values?
 */
class FormulaField extends foundry.data.fields.StringField {
	/** @inheritDoc */
	static get _defaults() {
		return foundry.utils.mergeObject(super._defaults, {
			deterministic: false
		});
	}

	/* -------------------------------------------- */

	/** @inheritDoc */
	_validateType(value) {
		const roll = new Roll(value.replace(/@([a-z.0-9_-]+)/gi, "1"));
		roll.evaluateSync({ strict: false });
		if (this.options.deterministic && !roll.isDeterministic) throw new Error(`must not contain dice terms: ${value}`);
		super._validateType(value);
	}

	/* -------------------------------------------- */
	/*  Active Effect Integration                   */
	/* -------------------------------------------- */

	/** @override */
	_castChangeDelta(delta) {
		return this._cast(delta).trim();
	}

	/* -------------------------------------------- */

	/** @override */
	_applyChangeAdd(value, delta, model, change) {
		if (!value) return delta;
		const operator = delta.startsWith("-") ? "-" : "+";
		delta = delta.replace(/^[+-]/, "").trim();
		return `${value} ${operator} ${delta}`;
	}

	/* -------------------------------------------- */

	/** @override */
	_applyChangeMultiply(value, delta, model, change) {
		if (!value) return delta;
		const terms = new Roll(value).terms;
		if (terms.length > 1) return `(${value}) * ${delta}`;
		return `${value} * ${delta}`;
	}

	/* -------------------------------------------- */

	/** @override */
	_applyChangeUpgrade(value, delta, model, change) {
		if (!value) return delta;
		const terms = new Roll(value).terms;
		if (terms.length === 1 && terms[0].fn === "max") return value.replace(/\)$/, `, ${delta})`);
		return `max(${value}, ${delta})`;
	}

	/* -------------------------------------------- */

	/** @override */
	_applyChangeDowngrade(value, delta, model, change) {
		if (!value) return delta;
		const terms = new Roll(value).terms;
		if (terms.length === 1 && terms[0].fn === "min") return value.replace(/\)$/, `, ${delta})`);
		return `min(${value}, ${delta})`;
	}
}

/* ----------------------------- */

class PenaltyField extends fields$e.NumberField {
	static get _defaults() {
		return Object.assign(super._defaults, {
			max: 0
		});
	}

	_cast(value) {
		return this.nullable && value === "" ? null : -Math.abs(Number(value));
	}
}

/* ----------- Items ----------- */

class PartData extends foundry.abstract.DataModel {
	/** @override */
	static defineSchema() {
		return {};
	}
}

class RollData extends foundry.abstract.DataModel {
	/** @override */
	static defineSchema() {
		return {
			key: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: "roll"
			}),
			name: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: "Roll"
			}),
			parts: new fields$e.ArrayField(
				new fields$e.ArrayField(
					new fields$e.StringField({
						required: true,
						nullable: false,
						initial: ""
					}),
					{
						// validate: r => (r.length === 3),
						// validationError: "must be a length-3 array",
						initial: ["", "", ""]
					}
				)
			),
			// parts: new fields.ArrayField(new PartData)),
			// parts: new fields.ObjectField({ initial:{ 0:['1d4','ac'] } }),
			type: new fields$e.StringField({
				required: true,
				nullable: false,
				choices: ["ataque", "dano", "formula"],
				initial: "dano"
			}),
			adaptavel: new fields$e.StringField({ nullable: false, initial: "" }),
			// Unused
			versatil: new fields$e.StringField({ nullable: false, initial: "", readonly: true })
		};
	}

	/** @inheritdoc */
	static migrateData(data) {
		if (data.versatil) {
			data.adaptavel = data.versatil;
			delete data.versatil;
		}
		for (let [k, v] of Object.entries(data.parts)) {
			if (v.length !== 3) {
				data.parts[k] = [v[0] ?? "", v[1] ?? "", v[2] ?? ""];
			}
		}
		if (data.type === "ataque") {
			if (data.parts[1][0] === "") data.parts[1][0] = "luta";
		}
		return super.migrateData(data);
	}
}

/* ---------------------------------------- */
/*  Object Key Assigns                      */
/* ---------------------------------------- */

/* Abilities */
const AbilitiesSchema = () => {
	let getSchema = () => {
		return new fields$e.SchemaField({
			value: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: -5
			}),
			base: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0
			}),
			racial: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0
			}),
			bonus: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0
			})
		});
	};

	let schema = {};
	Object.keys(T20.atributos).forEach((abl) => (schema[abl] = getSchema()));
	return schema;
};

/* ---------------------------- */

/* Damage Resistances */
const ResistanceSchema = () => {
	let getSchema = () => {
		return new fields$e.SchemaField({
			value: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0
			}),
			imunidade: new fields$e.BooleanField(),
			vulnerabilidade: new fields$e.BooleanField()
		});
	};

	let schema = {};
	Object.keys(T20.damageTypes).forEach((dmg) => (schema[dmg] = getSchema()));
	return schema;
};

function _resourceSchema() {
	return new fields$e.SchemaField({
		value: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			step: 1,
			integer: true
		}),
		temp: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0,
			step: 1,
			integer: true
		}),
		min: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			integer: true
		}),
		max: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 3,
			integer: true
		})
	});
}

/* ITEMS */
// Base Data
function getObjectBaseData() {
	return {
		description: new fields$e.SchemaField({
			value: new fields$e.HTMLField({
				required: true,
				nullable: false,
				initial: ""
			}),
			chat: new fields$e.HTMLField({ initial: "" }),
			unidentified: new fields$e.HTMLField({ initial: "" })
		}),
		source: new fields$e.StringField({ initial: "" }),
		origin: new fields$e.StringField({ initial: "" }),
		tags: new fields$e.ArrayField(new fields$e.StringField()),
		rolltags: new fields$e.ArrayField(new fields$e.StringField()),
		automationtags: new fields$e.ArrayField(new fields$e.StringField()),
		chatFlavor: new fields$e.StringField({
			required: true,
			nullable: false,
			initial: ""
		})
	};
}

// Physical Object Data
function getObjectItemData() {
	return {
		carregado: new fields$e.BooleanField({
			required: true,
			nullable: false,
			initial: true
		}),
		espacos: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0
		}),
		peso: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0
		}),
		qtd: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0
		}),
		preco: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0
		}),
		pv: new fields$e.SchemaField({
			value: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				step: 1,
				integer: true
			}),
			min: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				integer: true
			}),
			max: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 3,
				integer: true
			})
		}),
		rd: new fields$e.NumberField({
			required: true,
			nullable: false,
			initial: 0,
			min: 0
		})
	};
}

// Acvation Data
function getActivationItemData() {
	return {
		// ativacao
		ativacao: new fields$e.SchemaField({
			custo: new fields$e.NumberField({ required: true, initial: 0 }),
			condicao: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			execucao: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			qtd: new fields$e.StringField({ initial: "" }),
			special: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			})
		}),
		// consume
		consume: new fields$e.SchemaField({
			amount: new fields$e.NumberField({ initial: 0 }),
			mpMultiplier: new fields$e.BooleanField(),
			target: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			type: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			})
		}),
		// duracao
		duracao: new fields$e.SchemaField({
			units: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			value: new fields$e.NumberField({
				required: true,
				nullable: false,
				initial: 0
			}),
			special: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			})
		}),
		// range
		range: new fields$e.SchemaField({
			units: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			value: new fields$e.NumberField({ initial: 0 })
		}),
		// target
		target: new fields$e.SchemaField({
			type: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			value: new fields$e.NumberField({ initial: 0 }),
			width: new fields$e.NumberField({ initial: 0 })
		}),

		alcance: new fields$e.StringField({
			required: true,
			nullable: false,
			initial: ""
		}),
		alvo: new fields$e.StringField({
			required: true,
			nullable: false,
			initial: ""
		}),
		area: new fields$e.StringField({
			required: true,
			nullable: false,
			initial: ""
		}),
		efeito: new fields$e.StringField({
			required: true,
			nullable: false,
			initial: ""
		})
	};
}

// Acvation Data
function getSaveItemData() {
	return {
		resistencia: new fields$e.SchemaField({
			txt: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			pericia: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			atributo: new fields$e.StringField({
				required: true,
				nullable: false,
				initial: ""
			}),
			bonus: new fields$e.NumberField({ required: true, initial: 0 })
		})
	};
}

/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * This sheet is an Abstract layer which is not used.
 * @extends {ActorSheet}
 */
class ActorSheetT20 extends foundry.appv1.sheets.ActorSheet {
	static MODES = {
		PLAY: 1,
		EDIT: 2
	};

	_mode = null;

	static _warnedAppV1 = true;

	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			scrollY: [
				".tormenta20.base .sheet-body",
				".tormenta20.builder .tab.attributes",
				".tab.skills",
				".tab.attributes",
				".tab.spells",
				".tab.inventory",
				".tab.journal",
				".tab.effects",
				".tab.powers"
			],
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-body",
					initial: "attributes"
				}
			],
			dragDrop: [{ dragSelector: ".item-list .item:not(.item-header)" }],
			height: 700
		});
	}

	/* -------------------------------------------- */

	get layout() {
		return this.actor.type;
	}

	/** @override */
	get template() {
		const limitedSetting = game.settings.get("tormenta20", "limitedSheet");
		if (!game.user.isGM && limitedSetting === "limited" && this.actor.limited) {
			return "systems/tormenta20/templates/actor/limited-sheet.hbs";
		}
		return `systems/tormenta20/templates/actor/${this.layout}-sheet.hbs`;
	}

	get unsupportedItemTypes() {
		return new Set();
	}

	/**
	 * Determine whether an Owned Item will be shown based on the current set of filters
	 * @return {boolean}
	 * @private
	 */
	// TODO Implement filters
	// _filterItems(items, filters) {
	// }

	/* -------------------------------------------- */
	/*  SheetPreparation                            */
	/* -------------------------------------------- */

	/** @override */
	async getData() {
		// The Actor's data
		const source = this.actor.toObject();
		const actorData = this.actor.toObject(false);

		// Basic data
		const sheetData = {
			isGM: game.user.isGM,
			actor: actorData,
			source: source.system,
			system: actorData.system,
			uuid: this.actor.uuid,
			// data: actorData.system.toObject(false),
			items: actorData.items,
			effects: ActiveEffectT20.prepareActiveEffectCategories(this.actor.effects),
			owner: this.actor.isOwner,
			limited: this.actor.limited,
			options: this.options,
			editable: this.isEditable,
			cssClass: this.actor.isOwner ? "editable" : "locked",
			isCharacter: this.actor.type === "character",
			isNPC: this.actor.type === "npc",
			isSimple: this.actor.type === "simple",
			config: CONFIG.T20,
			rollData: this.actor.getRollData.bind(this.actor),
			// TextEditors
			htmlFields: {},
			// Flags
			mostrarDivindade: true, // this.actor.getFlag("tormenta20", "sheet.mostrarDivindade"),
			mostrarAtributoRacial: this.actor.getFlag("tormenta20", "sheet.mostrarAtributoRacial"),
			mostrarAtributoTemp: this.actor.getFlag("tormenta20", "sheet.mostrarAtributoTemp"),
			mostrarPlatina: this.actor.getFlag("tormenta20", "sheet.mostrarPlatina"),
			enableLanguages: game.settings.get("tormenta20", "enableLanguages"),
			equipmentSlots: game.settings.get("tormenta20", "equipmentSlots"),
			gameSystem: game.settings.get("tormenta20", "gameSystem"),
			editMode: this.isEditable && this._mode === this.constructor.MODES.EDIT
		};

		// FLAGS
		sheetData.isPreparationCaster = this.actor.getFlag("tormenta20", "mago");
		sheetData.esconderPericias = this.actor.getFlag("tormenta20", "sheet.esconderPericias");
		sheetData.esconderOficios = this.actor.getFlag("tormenta20", "sheet.esconderOficios");
		sheetData.showResources = this.actor.getFlag("tormenta20", "sheet.showResources");

		// Sort Owned Items
		for (let i of sheetData.items) {
			const item = this.actor.items.get(i._id);
			i.labels = item.labels;
		}
		sheetData.items.sort((a, b) => (a.sort || 0) - (b.sort || 0));

		// Ability Scores
		if (sheetData.system.atributos) {
			for (let [a, abl] of Object.entries(sheetData.system.atributos)) {
				abl.label = CONFIG.T20.atributos[a];
			}
		}

		// Skills
		if (foundry.utils.hasProperty(this.actor.system, "pericias")) {
			sheetData.skills = actorData.system.pericias;
		}
		if (sheetData.skills) this._prepareSkills(sheetData);

		// Update traits
		if (sheetData.system.tracos) this._prepareTraits(sheetData.system.tracos);

		if (foundry.utils.hasProperty(this.actor.system, "attributes.movement")) {
			sheetData.movement = this._prepareMovementSpeed(actorData);
		}
		if (foundry.utils.hasProperty(this.actor.system, "attributes.sentidos")) {
			sheetData.senses = this._prepareSenses(actorData);
		}
		// Prepare owned items
		await this._prepareItems(sheetData);

		// Enrich HTML text
		if (sheetData.system.detalhes?.biography) {
			sheetData.htmlFields.biography = await this.enrichHTML(sheetData.system.detalhes.biography.value, sheetData);
		}

		sheetData.documentName = "Actor";
		// Return data to the sheet
		return sheetData;
	}

	_prepareSkills(data) {
		for (let [s, skl] of Object.entries(data.skills)) {
			if (data.isNPC && s === "inic") skl.order = -5;
			else if (data.isNPC && s === "perc") skl.order = -4;
			else if (data.isNPC && s === "fort") skl.order = -3;
			else if (data.isNPC && s === "refl") skl.order = -2;
			else if (data.isNPC && s === "vont") skl.order = -1;
			skl.key = s;
			skl.symbol = skl.treinado ? "fas fa-check" : "far fa-circle";
			skl.exibir = true;
		}
		data.skills = Object.values(data.skills).sort((a, b) => {
			if (a.order === b.order) return a.label.localeCompare(b.label);
			return a.order - b.order;
		});
	}

	async _prepareItems(data) {}

	async enrichHTML(text, data) {
		return await foundry.applications.ux.TextEditor.implementation.enrichHTML(text, {
			secrets: this.actor.isOwner,
			rollData: data.rollData,
			async: true,
			relativeTo: this.actor
		});
	}

	/* -------------------------------------------- */

	/**
	 * Activate event listeners using the prepared sheet HTML
	 * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
	 */
	activateListeners(html) {
		super.activateListeners(html);

		new foundry.applications.ux.ContextMenu.implementation(html, ":not(.effects-list) .item", [], {
			eventName: "contextmenu",
			onOpen: this._onItemToggleContext.bind(this)
		});

		if (!this.isEditable) return;

		// Input focus and update
		const inputs = html.find("input");
		inputs.focus((ev) => ev.currentTarget.select());

		// TODO input Deltas

		// Skills management
		html.find(".training-toggle").click(this._onToggleSkillTraining.bind(this));
		html.find(".skill-create").click(this._onPericiaCustomCreate.bind(this));
		html.find(".skill-delete").click(this._onPericiaCustomDelete.bind(this));
		html.find(".show-controls").click(this._toggleControls.bind(this));
		html.find(".pericia-rollable").on("contextmenu", this._onOpenCompendiumEntry.bind(this));

		// Raças
		html.find(".add-raca").click((ev) => {
			game.packs.get("tormenta20.racas").render(true);
		});
		// Classes
		html.find(".add-classe").click((ev) => {
			game.packs.get("tormenta20.classes").render(true);
		});
		// Trait Selector
		html.find(".trait-selector").click(this._onTraitSelector.bind(this));

		// Configure Special Flags
		html.find(".config-button").click(this._onConfigMenu.bind(this));
		html.find("#configure-skills").click(async (ev) => {
			const { MODES } = this.constructor;
			ev.currentTarget;
			this._mode = this._mode === MODES.EDIT ? MODES.PLAY : MODES.EDIT;
			await this.submit();
			this.render();
		});

		// html.find("#ability-calculator").click(ev => {
		// 	new AbilityCalculator(this.actor).render(true);
		// });

		html.find(".update-cd").click(this._onUpdateCD.bind(this));

		// Item management
		html.find(".item-dialog").click(this._onItemDialog.bind(this));
		html.find(".item-create").click(this._onItemCreate.bind(this));
		html
			.find(".item-qty input")
			.click((ev) => ev.target.select())
			.change(this._onQtyChange.bind(this));

		// Active Effect management
		html.find(".effect-control").on("click contextmenu", (ev) => ActiveEffectT20.onManageActiveEffect(ev, this.actor));
		html.find(".effect").on("contextmenu", (ev) => ActiveEffectT20.onManageActiveEffect(ev, this.actor));
		// html.find('li.effect').on("dragstart", ev => this._onDragStart.bind(ev, this));
		let handler = (ev) => this._onDragStart(ev);
		html.find("li.effect").each((i, li) => {
			if (!li.hasAttribute("data-effect-id")) return;
			li.setAttribute("draggable", true);
			li.addEventListener("dragstart", handler, false);
		});

		// Rollable abilities.
		html.find(".rollable.atributo-rollable").click(this._onRollAtributo.bind(this));
		// Rollable skills.
		html.find(".rollable.pericia-rollable").click(this._onRollPericia.bind(this));
		// Roll item
		html.find(".item .item-image").click((event) => this._onItemRoll(event));
	}

	/* -------------------------------------------- */

	/**
	 * Handle activation of a context menu for an embedded Item document.
	 * Dynamically populate the array of context menu options.
	 * Reuse the item context options provided by the base ActorSheetT20 class.
	 * @param {HTMLElement} element       The HTML element for which the context menu is activated
	 * @protected
	 */
	_onItemToggleContext(element) {
		const item = this.actor.items.get(element.closest("li").dataset.itemId || element.dataset?.itemId);
		if (!item) return;
		ui.context.menuItems = ActorSheetT20.prototype._getItemToggleContextOptions.call(this, item);
		Hooks.call("tormenta20.getItemToggleContextOptions", item, ui.context.menuItems);
	}

	/**
	 * Prepare an array of context menu options which are available for owned Item documents.
	 * @param {ItemT20} item                   The Item for which the context menu is activated
	 * @returns {ContextMenuEntry[]}          An array of context menu options offered for the Item
	 * @protected
	 */
	_getItemToggleContextOptions(item) {
		const equipados = this.actor.items.filter((i) => i.system.equipado2?.slot > 0);
		const equips = this.actor.system.equipamentos;
		const canEquip = !!equips || this.actor.type === "npc";
		const compendiumLocked = item.collection?.locked;

		const options = [
			{
				name: item.isOwner ? "T20.Edit" : "T20.ItemView",
				icon: item.isOwner ? '<i class="fas fa-edit"></i>' : '<i class="fas fa-eye"></i>',
				callback: () => item.sheet.render(true)
			},
			{
				name: "T20.Duplicate",
				icon: '<i class="fas fa-copy "></i>',
				callback: () => item.clone({ name: game.i18n.format("DOCUMENT.CopyOf", { name: item.name }) }, { save: true }),
				condition: () => item.canDuplicate && item.isOwner && !compendiumLocked
			},
			{
				name: "T20.Delete",
				icon: '<i class="fas fa-trash"></i>',
				callback: () => item.delete(),
				condition: () => item.isOwner && !compendiumLocked
			},
			{
				name: "T20.DisplayCard",
				icon: '<i class="fas fa-message"></i>',
				callback: () => item.displayCard({ options: { itemId: item.id } }),
				condition: () => item.isOwner
			}
		];
		if (!item.isOwner) return options;
		if (this.layout === "character-tabbed" && !["classe", "race"].includes(item.type)) {
			const favorito = item.getFlag("tormenta20", "favorito");
			options.push({
				name: favorito ? "T20.Unfavorite" : "T20.Favorite",
				group: "equips",
				icon: '<i class="fas fa-star"></i>',
				callback: () => item.setFlag("tormenta20", "favorito", !favorito)
			});
		}
		if (item.type === "arma" && item.system.proficiencia === "natural") return options;
		if (game.settings.get("tormenta20", "equipmentSlots") && item.system.equipado2 && equips) {
			const img = (image) => `<img src='${image}' width='20px' height='20px' style='vertical-align: middle;'>`;
			const dec = (number) => (number % 1).toFixed(1) * 10;
			const isEquippedInSlot = (it, slot1, slot2) =>
				dec(it.system.equipado2.slot) === slot1 && Math.floor(it.system.equipado2.slot) === slot2;
			if (["hand", "both"].includes(item.system.equipado2.type)) {
				// options.push({ name: ("T20.Handling"), group: "equips", icon: '<i class="fa-solid fa-sort-down"></i>' }); // SECTION
				const twoHanded = equipados.find((it) => it.system.equipado2.slot === 12.1);
				options.push({
					name: twoHanded?.name ?? "T20.Empty",
					group: "equips",
					// icon: `<i class='fa-solid fa-hand-back-fist'></i><i class='fa-solid fa-hand-back-fist'></i>${twoHanded ? img(twoHanded.img) : ""}`,
					icon: twoHanded
						? img(twoHanded.img)
						: `<span class="fa-stack">
						<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>
						<b class="fa-stack-1x">2</b>
					</span>`,
					classes: twoHanded ? "flexrow" : "",
					callback: () => this._onToggleItem(item, "hand", 12, twoHanded?.id)
				});
				for (let slot = 1; slot <= equips.limiteEmpunhado; slot++) {
					const wieldingTwoHanded = twoHanded && [1, 2].includes(slot);
					const slotItem = wieldingTwoHanded ? null : equipados.find((it) => isEquippedInSlot(it, 1, slot));
					const icon = wieldingTwoHanded
						? img(twoHanded.img)
						: slotItem
							? img(slotItem.img)
							: `<span class="fa-stack">
						<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>
					</span>`;
					options.push({
						name: wieldingTwoHanded ? twoHanded.name : (slotItem?.name ?? "T20.Empty"),
						group: "equips",
						icon,
						classes: `${twoHanded || slotItem ? "flexrow" : ""}`,
						condition: item.system.empunhadura !== "duas",
						callback: () => this._onToggleItem(item, "hand", slot, slotItem?.id)
					});
				}
			}
			if (["body", "both"].includes(item.system.equipado2.type)) {
				// options.push({ name: ("T20.Wearing"), group: "equips", icon: '<i class="fa-solid fa-sort-down"></i>' }); // SECTION
				for (let slot = 1; slot <= equips.limiteVestido; slot++) {
					const slotItem = equipados.find((it) => isEquippedInSlot(it, 2, slot));
					// && (it.system.preparada === slot || it.system.equipado === slot)
					options.push({
						name: slotItem?.name ?? "T20.Empty",
						group: "equips",
						classes: `${slotItem ? "flexrow" : ""}`,
						icon: slotItem ? img(slotItem.img) : '<i class="fa-solid fa-shirt" style="opacity: 0.5;"></i>',
						callback: () => this._onToggleItem(item, "body", slot, slotItem?.id)
					});
				}
			}
		} else if (item.type === "equipamento" && canEquip) {
			let icon = "fa-shirt";
			let icon2 = "";
			if (item.system.equipado2.type === "hand") {
				icon = item.system.equipado2.type === "hand" ? "fa-hand-back-fist" : "fa-shirt";
				icon2 = "<b class='fa-stack-1x'>1</b>";
			}
			options.push({
				name: item.system.equipado ? "T20.Unequip" : "T20.Equip",
				group: "equips",
				icon: `<span class="fa-stack">
					<i class="fa-solid ${icon} fa-stack-1x"></i>
					${icon2}
				</span>`,
				callback: this._onToggleArmor.bind(this)
			});
		} else if (item.type === "arma" && canEquip) {
			options.push({
				name: item.system.equipado !== 1 ? "T20.EquipOneHand" : "T20.Unequip",
				group: "equips",
				icon: `<span class="fa-stack">
					<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>
					<b class="fa-stack-1x">1</b>
				</span>`,
				condition: item.system.empunhadura !== "duas",
				callback: () => this._onToggleWeapon(item, 1)
			});
			options.push({
				name: item.system.equipado === 2 ? "T20.Unequip" : "T20.EquipTwoHand",
				group: "equips",
				icon: `<span class="fa-stack">
					<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>
					<b class="fa-stack-1x">2</b>
				</span>`,
				callback: () => this._onToggleWeapon(item, 2)
			});
		} else if (item.type === "classe") {
			options.push({
				name: "T20.LevelUp",
				group: "class",
				icon: "<i class='fas fa-plus'></i>",
				condition: item.system.niveis < (game.settings.get("tormenta20", "gameSystem") === "Skyfall" ? 10 : 20),
				callback: () => item.update({ "system.niveis": item.system.niveis + 1 })
			});
			options.push({
				name: "T20.LevelDown",
				group: "class",
				icon: "<i class='fas fa-minus'></i>",
				condition: item.system.niveis > 1,
				callback: () => item.update({ "system.niveis": item.system.niveis - 1 })
			});
		} else if (item.type === "magia") {
			options.push({
				name: "T20.DrawPreview",
				group: "spell",
				icon: "<i class='fas fa-ruler-combined'></i>",
				condition: item.hasAreaTarget,
				callback: () => {
					const template = game.tormenta20.canvas.AbilityTemplate.fromItem(item);
					if (template) template.drawPreview();
				}
			});
			options.push({
				name: item.system.preparada ? "T20.SpellPrepUnprepare" : "T20.SpellPrepPrepare",
				group: "spell",
				icon: "<i class='fas fa-sun'></i>",
				condition: this.actor.getFlag("tormenta20", "mago") ?? false,
				callback: () => item.update({ "system.preparada": !item.system.preparada })
			});
		}
		return options;
	}

	async _onToggleItem(item, context, index, currentId) {
		const updateItems = [];
		if (currentId) {
			updateItems.push({
				_id: currentId,
				"system.equipado2.slot": 0,
				"system.equipado": false
			});
		}
		if (item.id === currentId) ; else if (context === "hand") {
			updateItems.push({
				_id: item.id,
				"system.equipado2.slot": index + 0.1,
				"system.equipado": true
			});
			const slots = index === 12 ? [1.1, 2.1] : [12.1];
			const oldItems = this.actor.items.filter((it) => item.id !== it.id && slots.includes(it.system.equipado2?.slot));

			for (const oldItem of oldItems) {
				updateItems.push({
					_id: oldItem.id,
					"system.equipado2.slot": 0,
					"system.equipado": false
				});
			}
		} else if (context === "body") {
			updateItems.push({
				_id: item.id,
				"system.equipado2.slot": index + 0.2,
				"system.equipado": true
			});
			let oldItems = this.actor.items.filter(
				(it) =>
					item.id != it.id
					&& ["leve", "pesada"].includes(item.system.tipo)
					&& ["leve", "pesada"].includes(it.system.tipo)
			);
			// it.system.tipo === item.system.tipo
			for (const oldItem of oldItems) {
				updateItems.push({
					_id: oldItem.id,
					"system.equipado2.slot": 0
				});
			}
		}
		await this.actor.updateEmbeddedDocuments("Item", updateItems);
	}

	/* -------------------------------------------- */

	/**
	 * Prepare the display of movement speed data for the Actor
	 * @param {object} actorData
	 * @returns {{primary: string, special: string}}
	 * @private
	 */
	_prepareMovementSpeed(actorData) {
		const movement = this.document.system.attributes.movement;
		// Return an array of available movement speeds
		return Object.entries(T20.movementTypes).reduce((speeds, [type, label]) => {
			const value = movement[type].value;
			if (value > 0) {
				const name = type === "walk" ? "" : label;
				let speedStr = `${name} ${value}${movement.unit}`.trim();
				if (type === "fly" && movement.hover) {
					speedStr += " (Flutuando)";
				}
				speeds[type] = speedStr;
			}
			return speeds;
		}, {});
	}

	/* -------------------------------------------- */

	_prepareSenses(actorData) {
		const senses = actorData.system.attributes.sentidos || {
			value: [],
			custom: ""
		};
		if (!senses.value) senses.value = [];
		for (let [k, label] of Object.entries(CONFIG.T20.senses)) {
			const v = senses.value?.indexOf(k);
			if (v === -1) continue;
			senses.value[v] = label;
		}
		if (senses.custom) senses.value.push(senses.custom);
		return senses;
	}

	/* -------------------------------------------- */

	/**
	 * Prepare the data structure for traits data like languages, resistances & vulnerabilities, and proficiencies
	 * @param {object} traits   The raw traits data object from the actor data
	 * @private
	 */
	_prepareTraits(traits) {
		const map = {
			ic: CONFIG.T20.conditionTypes,
			idiomas: CONFIG.T20.idiomas,
			profArmas: CONFIG.T20.profArmas,
			profArmaduras: CONFIG.T20.profArmaduras
		};
		for (let [t, choices] of Object.entries(map)) {
			const trait = traits[t];
			if (!trait) continue;
			let values = [];
			if (trait.value) {
				values = trait.value instanceof Array ? trait.value : [trait.value];
			}
			trait.selected = values.reduce((obj, t) => {
				obj[t] = choices[t];
				return obj;
			}, {});

			// Add custom entry
			if (trait.custom) {
				trait.custom.split(";").forEach((c, i) => (trait.selected[`custom${i + 1}`] = c.trim()));
			}
			trait.cssClass = !foundry.utils.isEmpty(trait.selected) ? "" : "inactive";
		}
	}

	/* -------------------------------------------- */
	/*  Interactions                                */
	/* -------------------------------------------- */

	async _renderOuter() {
		const html = await super._renderOuter();
		const header = html[0].querySelector(".window-header");

		// Adjust header buttons.
		header.querySelectorAll(".header-button").forEach((btn) => {
			const label = btn.querySelector(":scope > i").nextSibling;
			btn.dataset.tooltip = label.textContent;
			btn.dataset.tooltipDirection = "UP";
			btn.setAttribute("aria-label", label.textContent);
			btn.addEventListener("dblclick", (event) => event.stopPropagation());
			label.remove();
		});

		return html;
	}

	/* -------------------------------------------- */

	/** @override */
	_getHeaderButtons() {
		let buttons = super._getHeaderButtons();
		const tokenButton = buttons.find((b) => b.class === "configure-token");
		if (tokenButton && this.actor.isToken) tokenButton.icon = "far fa-user-circle";
		if (this.actor.type === "character") {
			buttons.unshift({
				label: game.i18n.localize("T20.Configure"),
				class: "t20-configure-sheet",
				icon: "fas fa-wrench",
				onclick: () => new ActorSettings(this.actor).render(true)
			});
		} else if (this.actor.type === "npc") {
			buttons.unshift({
				label: game.i18n.localize("T20.ParseStatblock"),
				class: "t20-parse-statblock",
				icon: "fas fa-diagram-predecessor",
				onclick: () => {
					new StatblockParser({
						actor: this.actor,
						statblock: "",
						schema: {},
						items: [],
						log: []
					}).render(true);
				}
			});
		}
		return buttons;
	}

	/* -------------------------------------------- */

	async _onDropFolder(event, data) {
		if (!this.actor.isOwner) return [];
		const folder = await Folder.implementation.fromDropData(data);
		if (folder.type !== "Item") return [];
		const droppedItemData = await Promise.all(
			folder.contents.map(async (item) => {
				if (!(item instanceof Item)) item = await foundry.utils.fromUuid(item.uuid);
				if (this.unsupportedItemTypes.has(item.type)) return;
				return item.toObject();
			})
		);
		return this._onDropItemCreate(droppedItemData, event);
	}

	async _onDropItem(event, data) {
		if (!this.actor.isOwner) return false;
		const item = await Item.implementation.fromDropData(data);
		if (this.unsupportedItemTypes.has(item.type)) return false;
		const itemData = item.toObject();

		// Handle item sorting within the same Actor
		if (this.actor.uuid === item.parent?.uuid) return this._onSortItem(event, itemData);

		// Create the owned item
		return this._onDropItemCreate(itemData, event);
	}

	/** @override */
	async _onDropItemCreate(itemData) {
		itemData = Array.isArray(itemData) ? itemData : [itemData];
		const remainingItems = [];
		for (const item of itemData) {
			if (item.type === "magia") {
				item.system.resistencia.atributo = this.actor.system.attributes.conjuracao;
				remainingItems.push(item);
			} else if (item.type === "consumivel") {
				// Stack consumables
				const it = this.actor.itemTypes.consumivel.find((c) => c.name === itemData.name);
				if (it) {
					const qtd = it.system.qtd + 1;
					await it.update({ "system.qtd": qtd });
				} else remainingItems.push(item);
			} else remainingItems.push(item);
		}

		return super._onDropItemCreate(remainingItems);
	}

	/* -------------------------------------------- */

	/** @override */
	_onDragStart(event) {
		const li = event.currentTarget;
		if (!$(li).hasClass("skill")) {
			super._onDragStart(event);
		} else {
			if (event.target.classList.contains("entity-link")) return;

			// Create drag data
			const dragData = {
				actorId: this.actor.id,
				sceneId: this.actor.isToken ? canvas.scene?.id : null,
				tokenId: this.actor.isToken ? this.actor.getActiveTokens()[0] : null
			};

			// Pericias
			if (li.dataset.itemId) {
				let skill;
				if (li.dataset.type == "oficios") {
					skill = this.actor.system.pericias.ofi.mais[li.dataset.itemId];
					dragData.subtype = li.dataset.type;
				} else if (li.dataset.type == "custom") {
					skill = this.actor.system.periciasCustom[li.dataset.itemId];
					dragData.subtype = li.dataset.type;
				} else {
					skill = this.actor.system.pericias[li.dataset.itemId];
					dragData.subtype = "base";
				}
				dragData.type = "Pericia";
				dragData.data = skill;
			}
			// Set data transfer
			event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
		}
	}

	/* -------------------------------------------- */

	/*  */
	async _onRollAtributo(event) {
		event.preventDefault();
		let atributo = event.currentTarget.parentElement.dataset.itemId || event.currentTarget.dataset.itemId;
		return await this.actor.rollAtributo(atributo, {
			event: event,
			message: true
		});
	}

	/*  */
	async _onRollPericia(event) {
		event.preventDefault();
		let pericia = event.currentTarget.parentElement.dataset.itemId || event.currentTarget.dataset.itemId;
		return await this.actor.rollPericia(pericia, {
			event: event,
			message: true
		});
	}

	/**
	 * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
	 * @private
	 */
	_onItemRoll(event) {
		event.preventDefault();
		const usageConfig = game.settings.get("tormenta20", "UsageConfig") === "default";
		let itemId;

		if (event.currentTarget.closest(".item").dataset.itemId) {
			itemId = event.currentTarget.closest(".item").dataset.itemId;
		} else itemId = event.currentTarget.dataset.itemId;
		const item = this.actor.items.get(itemId);
		if (!item) return;
		const hasEffectsOrRolls = !!item.validOnUseEffects.length || !!item.system.rolls.length;
		const rollConfigs = {
			configureDialog: hasEffectsOrRolls && (usageConfig ? !event.shiftKey : event.shiftKey),
			event
		};
		return item.roll(rollConfigs);
	}

	/* -------------------------------------------- */

	/**
	 * Handle spawning the application which allows a checkbox of multiple trait options
	 * @param {Event} event   The click event which originated the selection
	 * @private
	 */
	_onConfigMenu(event) {
		event.preventDefault();
		const button = event.currentTarget;
		let app;
		switch (button.dataset.action) {
			case "movement":
				app = new ActorMovementConfig(this.object);
				break;
			case "resistance":
				app = new ActorResistanceConfig(this.object);
				break;
			case "ability":
				app = new AbilityCalculator(this.object);
				break;
			case "rest":
				RestConfigDialog.create([this.object]);
				break;
			case "resources":
				app = new tormenta20.applications.ResourceConfig(this.actor);
				break;
			// case "progression":
			// 	app = new CharacterProgression(this.object);
			// 	break;
			// case "senses":
			// 	app = new ActorSensesConfig(this.object);
			// 	break;
			// case "type":
			// 	app = new ActorTypeConfig(this.object);
			// 	break;
		}
		app?.render(true);
	}

	/**
	 * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options
	 * @param {Event} event   The click event which originated the selection
	 * @private
	 */
	_onTraitSelector(event) {
		event.preventDefault();
		const a = event.currentTarget;
		const label = a.parentElement.querySelector("label");
		let choices = {};
		if (a.dataset.options === "conditionTypes") {
			// Don't bother alphabetically sorting, it's worse UI/UX
			for (const [fk, fv] of Object.entries(CONFIG.T20.conditions)) {
				const cat = fv.flags?.tormenta20?.category;
				if (cat in CONFIG.T20.effectTypes) {
					if (!choices[cat]) choices[cat] = { label: CONFIG.T20.effectTypes[cat], choices: {} };
					choices[cat].choices[fk] = fv.name;
				} else {
					choices[fk] = { label: fv.name, choices: [] };
				}
			}
		} else {
			choices = CONFIG.T20[a.dataset.options];
		}
		return new TraitSelector(this.actor, {
			name: a.dataset.target,
			id: a.dataset.options,
			title: label.innerText,
			choices
		}).render(true);
	}

	/* -------------------------------------------- */

	/**
	 * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
	 * @param {Event} event   The originating click event
	 * @private
	 */
	_onItemCreate(event) {
		event.preventDefault();
		const header = event.currentTarget;
		const { tipo, type } = header.dataset;
		let gen = ["arma", "magia"].includes(type) ? "Nova" : "Novo";
		const itemData = {
			name: `${gen} ${type.capitalize()}`,
			type: type,
			system: tipo ? { tipo } : {}
		};
		delete itemData.system.type;
		return this.actor.createEmbeddedDocuments("Item", [itemData], {
			renderSheet: true
		});
	}

	async _onItemDialog(event) {
		event.preventDefault();
		const types = {
			gerais: ["arma", "equipamento", "consumivel", "tesouro"]
		};
		const type = event.currentTarget.dataset.type;
		return await Item.createDialog({}, { parent: this.actor }, { types: types[type] });
	}

	_onItemFavorite(li) {
		const item = this.actor.items.get(li.data("itemId"));
		if (item) item.setFlag("tormenta20", "favorito", !item.flags.tormenta20?.favorito);
	}

	/**
	 * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
	 * @private
	 */
	async _onItemSummary(event) {
		event.preventDefault();
		let li = $(event.currentTarget).parents(".item");
		let item = this.actor.items.get(li.data("item-id"));
		if (!item) return;
		let chatData = await item.getChatData();
		if (!chatData.description.value) return;
		// Toggle summary
		if (li.hasClass("expanded")) {
			let summary = li.children(".item-summary");
			summary.slideUp(200, () => summary.remove());
		} else {
			let div = $(`<div class="item-summary">${chatData.description.value}</div>`);
			let props = $("<div class='item-properties'></div>");
			div.append(props);
			li.append(div.hide());
			div.slideDown(200);
		}
		li.toggleClass("expanded");
	}

	/*  */
	async _onUpdateCD(ev) {
		const atrRes = $(ev.currentTarget).data("atrres");
		const magias = this.actor.items.filter((i) => i.type === "magia");
		const updateItems = magias.map((i) => {
			return { _id: i.id, "system.resistencia.atributo": atrRes };
		});
		await this.actor.updateEmbeddedDocuments("Item", updateItems);
	}

	/* -------------------------------------------- */

	/**
	 * Change the quantity of an Owned Item within the Actor
	 * @param {Event} event   The triggering click event
	 * @private
	 */
	async _onQtyChange(event) {
		event.preventDefault();
		const itemId = event.currentTarget.closest(".item").dataset.itemId;
		const item = this.actor.items.get(itemId);
		const qtd = parseInt(event.target.value) || 0;
		event.target.value = qtd;
		return item.update({ "system.qtd": qtd });
	}

	/* -------------------------------------------- */

	// Update equippament state, unequipping unique ones;
	// TODO slotSytem [lhand, rhand, thand, body1, body2, body3, body4, body5, body5]
	async _onToggleArmor(li) {
		const item = this.actor.items.get(li.data("itemId"));
		const id = item.system;
		id.equipado = !id.equipado;
		const items = this.actor.itemTypes.equipamento;
		let updateItems = [];
		updateItems.push({ _id: item.id, "system.equipado": id.equipado });
		const armor = ["leve", "pesada"];
		const exclusiveSlot = ["leve", "pesada", "escudo"];
		if (id.equipado && exclusiveSlot.includes(id.tipo)) {
			const equippedItems = items.filter((i) => i.system.equipado && i.id !== item.id);
			for (const i of equippedItems) {
				if (i.system.tipo === id.tipo || (armor.includes(i.system.tipo) && armor.includes(id.tipo))) {
					updateItems.push({ _id: i.id, "system.equipado": false });
				}
			}
		}
		await this.actor.updateEmbeddedDocuments("Item", updateItems);
	}

	async _onToggleWeapon(item, step) {
		let status = item.system.equipado === step ? 0 : step;
		const updateItems = [{ _id: item.id, "system.equipado": status }];
		await this.actor.updateEmbeddedDocuments("Item", updateItems);
	}

	/* -------------------------------------------- */

	/**
	 * Handle creating a Skill for the actor
	 * @param {Event} event   The originating click event
	 * @private
	 */
	async _onPericiaCustomCreate(event) {
		event.preventDefault();
		const a = event.currentTarget;
		let label = a.closest("li").querySelector("input").value;
		if (!label) return;
		// PRONTO
		const oficio = a.dataset.tipo === "oficio";
		const oficioLabel = game.i18n.localize("T20.SkillOfic");
		if (oficio && !label.includes(oficioLabel)) {
			label = `${oficioLabel}: ${label}`;
		}
		const pericia = {
			...new SkillData(),
			label,
			custom: true,
			atributo: oficio ? "int" : "for",
			st: !!oficio,
			treinado: oficio ? 1 : 0
		};

		const actorData = foundry.utils.deepClone(this.actor);
		let pericias = actorData.system.pericias;

		const key = oficio ? "ofi" : "_pc";
		const customs = Object.keys(pericias).reduce((t, k) => {
			if (k.match(new RegExp(`${key}[1-9]`))?.length) t.push(Number(k.replace(key, "")));
			return t;
		}, []);

		let keyN = Math.max(...customs);
		if (keyN === 9) keyN = [1, 2, 3, 4, 5, 6, 7, 8, 9].find((i) => !customs.includes(i));
		else if (keyN > 0) keyN = keyN + 1;
		else keyN = 1;

		if (customs.length === 9) {
			// MESSAGE ERROR
			ui.notifications.info("Número limite de pericias");
		} else pericias[`${key}${keyN}`] = pericia;
		pericias = Object.keys(pericias)
			.sort()
			.reduce((obj, key) => {
				obj[key] = pericias[key];
				return obj;
			}, {});
		await this.actor.update({ "system.pericias": pericias });
	}

	async _onPericiaCustomDelete(event) {
		const id = event.currentTarget.dataset.itemId;
		await this.actor.update({ [`system.pericias.-=${id}`]: null });
	}

	_onToggleSkillTraining(event) {
		event.preventDefault();
		// const field = event.currentTarget.previousElementSibling;
		const li = event.currentTarget.closest("li");
		const id = li.dataset.itemId;
		if (!this.actor.system.pericias[id]) return;
		const trained = this.actor.system.pericias[id].treinado;
		const ability = this.actor.system.pericias[id].atributo;
		const treinado = `system.pericias.${id}.treinado`;
		const atributo = `system.pericias.${id}.atributo`;
		this.actor.update({ [treinado]: !trained, [atributo]: ability });
	}

	_toggleControls(event) {
		const target = event.currentTarget;
		const controls = target.closest("ul").querySelectorAll("li.custom .skill-delete");
		const input = target.closest("ul").querySelectorAll("li.custom .skill-outros");
		if ($(target).hasClass("ativo")) {
			$(controls).css("display", "none");
			$(input).css("display", "inline");
			$(target).removeClass("ativo");
		} else {
			$(controls).css("display", "inline");
			$(input).css("display", "none");
			$(target).addClass("ativo");
		}
	}

	/**
	 * Handle opening a skill's compendium entry
	 * @param {Event} event	 The originating click event
	 * @private
	 */
	async _onOpenCompendiumEntry(event) {
		const parent = event.currentTarget.closest("li") ?? event.currentTarget;
		let skill = parent.dataset.itemId ?? null;
		if (T20.oficios.has(skill)) skill = "ofic";
		if (!skill || !T20.skillCompendiumEntries[skill]) return;
		const entryKey = T20.skillCompendiumEntries[skill];
		await Journal._showEntry(entryKey, true);
	}

	/* -------------------------------------------- */
	/*  Rendering                                   */
	/* -------------------------------------------- */

	async _render(force, { MODES, ...options } = {}) {
		if (MODES === undefined && options.renderContext === "createItem") MODES = this.constructor.MODES.EDIT;
		this._mode = MODES ?? this._mode ?? this.constructor.MODES.PLAY;
		return super._render(force, options);
	}

	async close(options) {
		this.options.token = null;
		this._mode = null;
		return super.close(options);
	}
}

class ActorSheetT20Bases extends ActorSheetT20 {
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "bases"],
			template: "systems/tormenta20/templates/actor/bases-sheet.hbs",
			height: 600,
			width: 650
		});
	}

	/* -------------------------------------------- */

	get unsupportedItemTypes() {
		return new Set(Item.TYPES.filter((i) => !["comodo", "mobilia"].includes(i)));
	}

	/* -------------------------------------------- */

	async getData(options) {
		const sheetData = await super.getData(options);
		sheetData.residentes = this.actor.system.residentes
			.map((id) => game.actors.get(id))
			.filter((actor) => actor)
			.map((actor) => ({ id: actor.id, img: actor.img, name: actor.name }));
		return sheetData;
	}

	async _prepareItems(data) {
		data.comodos = this.actor.itemTypes.comodo.sort((a, b) => a.sort - b.sort);
		data.mobilias = this.actor.itemTypes.mobilia.sort((a, b) => a.sort - b.sort);
		data.residentes = this.actor.system.residentes
			.map((id) => game.actors.get(id))
			.filter((actor) => actor)
			.map((actor) => ({ id: actor.id, img: actor.img, name: actor.name }));
	}

	/* -------------------------------------------- */

	activateListeners(html) {
		super.activateListeners(html);

		// Item summaries
		html.find(".item .item-name > label, .item .item-description").click((event) => this._onItemSummary(event));

		// Listener para troca de porte
		html.find('select[name="system.porte"]').change(async (ev) => {
			const porte = ev.currentTarget.value;
			const roomsNumber = CONFIG.T20.roomsNumber[porte] ?? 0;
			await this.actor.update({ "system.rooms": roomsNumber });
		});
		html.find("[data-action='delete-item']").on("click", this._onDeleteItem.bind(this));
		html.find("[data-action='transfer-effects']").on("click", this._onTransferEffects.bind(this));
	}

	_onDeleteItem(event) {
		event.preventDefault();
		const { id } = event.target.closest(".choiceset-item").dataset;
		if (!id) return;
		const residentes = this.actor.system.residentes;
		residentes.delete(id);
		this.actor.update({ "system.residentes": residentes });
	}

	async _onTransferEffects(event) {
		const toCreate = [];
		const types = ["comodo", "mobilia"];
		for (const type of types) {
			for (const item of this.actor.itemTypes[type]) {
				if (!item.system.residentes || !item.effects.size) continue;
				for (const effect of item.effects) {
					const effectData = effect.toJSON();
					foundry.utils.setProperty(effectData, "flags.tormenta20.grantedFromBase", true);
					toCreate.push(effectData);
				}
			}
		}
		for (const id of this.actor.system.residentes) {
			const residente = game.actors.get(id);
			if (!residente || !residente.isOwner) continue;
			const toDelete = residente.effects.filter((ef) => ef.getFlag("tormenta20", "grantedFromBase")).map((ef) => ef.id);
			await residente.createEmbeddedDocuments("ActiveEffect", toCreate);
			await residente.deleteEmbeddedDocuments("ActiveEffect", toDelete);
		}
	}

	/* -------------------------------------------- */

	async _onDropActor(event, actor) {
		const uuid = actor.uuid.split("Actor.");
		const id = uuid.pop();
		if (uuid.filter(Boolean).length) return;
		if (game.actors.get(id).type !== "character") return;
		const residentes = this.actor.system.residentes;
		if (!residentes.has(id)) {
			residentes.add(id);
			this.actor.update({ "system.residentes": residentes });
		}
	}

	async _onDropItemCreate(itemData) {
		itemData = Array.isArray(itemData) ? itemData : [itemData];
		const remainingItems = [];
		const currentComodoNames = this.actor.itemTypes.comodo.map((p) => p.name).filter(Boolean);

		const mobilias = this.actor.itemTypes.mobilia.length;

		for (const item of itemData) {
			if (item.type === "comodo") {
				const comodoName = item.name?.trim();
				if (comodoName && currentComodoNames.includes(comodoName)) {
					ui.notifications.warn(
						`Já existe um cômodo chamado "${comodoName}" nesta base. Exclua-o para adicionar outro com o mesmo nome.`
					);
					continue;
				}
				remainingItems.push(item);
			} else if (item.type === "mobilia") {
				if (mobilias >= this.actor.itemTypes.comodo.length) {
					ui.notifications.warn(
						"Cada cômodo só pode ter uma mobília. Adicione mais cômodos para importar mais mobílias."
					);
					continue;
				}
				remainingItems.push(item);
			} else {
				ui.notifications.warn(`Só é possível adicionar Cômodos e Mobílias.`);
				continue;
			}
		}
		return super._onDropItemCreate(remainingItems);
	}
}

class PericiaSelection extends FormApplication {
	constructor(periciaList, resolve, options = {}) {
		super({}, options);
		this.periciaList = periciaList;
		this._resolve = resolve;
		this.selected = [];
	}

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "power-pericia-select",
			classes: ["tormenta20", "dialog"],
			title: game.i18n.localize("T20.SelectPericia"),
			template: "systems/tormenta20/templates/automations/pericia-selection.hbs",
			width: 400,
			height: "auto"
		});
	}

	getData() {
		return { pericias: this.periciaList };
	}

	activateListeners(html) {
		super.activateListeners(html);
		const $btns = html.find("button.pericia-btn");
		const $concluir = html.find("button.concluir-btn");

		$btns.click((ev) => {
			ev.preventDefault();
			const key = ev.currentTarget.value;
			const idx = this.selected.indexOf(key);
			if (idx >= 0) {
				this.selected.splice(idx, 1);
				ev.currentTarget.classList.remove("selected");
			} else if (this.selected.length < 2) {
				this.selected.push(key);
				ev.currentTarget.classList.add("selected");
			}
			// Enable Concluir only if 1 or 2 selected
			$concluir.prop("disabled", this.selected.length === 0 || this.selected.length > 2);
		});

		html.find("form").submit((ev) => {
			ev.preventDefault();
			if (this.selected.length === 0 || this.selected.length > 2) return;
			this._resolve([...this.selected]);
			this.close();
		});
	}

	close(options) {
		this._resolve(null);
		return super.close(options);
	}

	/** Required by FormApplication, but not used here. */
	async _updateObject(event, formData) {
		// No-op: selection is handled via custom submit logic.
	}
}

/**
 * An Actor sheet for player character type actors.
 * Extends the base ActorSheetT20 class.
 * @type {ActorSheetT20}
 */
class ActorSheetT20Character extends ActorSheetT20 {
	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "character"],
			width: 900,
			height: 600
		});
	}

	/* -------------------------------------------- */

	get layout() {
		return "character-base";
	}

	/* -------------------------------------------- */
	/*  SheetPreparation                            */
	/* -------------------------------------------- */

	/** @override */
	async getData() {
		const sheetData = await super.getData();
		if (this.actor.type !== "character") return sheetData;
		const limitedSetting = game.settings.get("tormenta20", "limitedSheet");
		sheetData.limited = !game.user.isGM && limitedSetting === "limited" && this.actor.limited;
		// Experience Tracking
		sheetData.disableExperience = game.settings.get("tormenta20", "disableExperience");
		sheetData.disableJournal = game.settings.get("tormenta20", "disableJournal");

		const levelConfig = this.actor.getFlag("tormenta20", "lvlconfig");
		sheetData.autoCalcResources = levelConfig ? !levelConfig.manual : true;

		sheetData.layout = this.layout;

		this.actor.system.attributes.defesa.pda = this.actor.system.attributes.defesa.pda ?? 0;

		sheetData.htmlFields.diario = await this.enrichHTML(sheetData.system.detalhes.diario.value, sheetData);
		sheetData.htmlFields.diario1 = await this.enrichHTML(sheetData.system.detalhes.diario1.value, sheetData);
		sheetData.htmlFields.diario2 = await this.enrichHTML(sheetData.system.detalhes.diario2.value, sheetData);
		sheetData.htmlFields.diario3 = await this.enrichHTML(sheetData.system.detalhes.diario3.value, sheetData);
		sheetData.htmlFields.diario4 = await this.enrichHTML(sheetData.system.detalhes.diario4.value, sheetData);
		return sheetData;
	}

	/* -------------------------------------------- */

	_prepareSkills(data) {
		for (let [s, skl] of Object.entries(data.skills)) {
			const somenteTreinada = !data.esconderPericias || !skl.st || skl.treinado;
			const oficio = !data.esconderOficios || !CONFIG.T20.oficios.has(s) || skl.treinado;
			skl.key = s;
			skl.symbol = skl.treinado ? "fas fa-check" : "far fa-circle";
			skl.exibir = data.editMode || (somenteTreinada && oficio);
		}
		data.skills = Object.values(data.skills).sort((a, b) => {
			if (a.order === b.order) return a.label.localeCompare(b.label);
			return a.order - b.order;
		});
	}

	/* -------------------------------------------- */

	/** @override */
	activateListeners(html) {
		super.activateListeners(html);

		// Item summaries
		html.find(".item .item-name > label, .item .item-description").click((event) => this._onItemSummary(event));

		// Everything below here is only needed if the sheet is editable
		if (!this.options.editable) return;
		// Prepare spells
		html.find(".preparation-toggle").click(this._onPrepareSpell.bind(this));

		// Drag events for macros.
		let handler = (ev) => this._onDragStart(ev);
		html.find("li.skill").each((i, li) => {
			if (!li.hasAttribute("data-item-id")) return;
			li.setAttribute("draggable", true);
			li.addEventListener("dragstart", handler, false);
		});
	}

	/* -------------------------------------------- */
	/*  Interactions                                */
	/* -------------------------------------------- */

	/** @override */
	async _onDropItemCreate(itemData) {
		itemData = Array.isArray(itemData) ? itemData : [itemData];
		const remainingItems = [];
		for (const item of itemData) {
			if (item.type === "classe") {
				const cls = this.actor.itemTypes.classe.find((c) => c.name === item.name);
				const actorData = this.actor.system;
				let lvlconfig = this.actor.getFlag("tormenta20", "lvlconfig");
				if (!lvlconfig) {
					this.actor.setFlag("tormenta20", "lvlconfig", { manual: false });
				}
				// Novo nivel de classe preexistente
				if (cls) {
					let priorLevel = cls.system.niveis ?? 0;
					const next = Math.min(priorLevel + 1, 20 + priorLevel - actorData.attributes.nivel.value);
					await cls.update({ "system.niveis": next });
				} else {
					// Primeiro Nivel do Personagem
					if (!this.actor.itemTypes.classe.length) item.system.inicial = true;
					remainingItems.push(item);
				}
			} else if (item.type === "race") {
				const race = this.actor.itemTypes.race[0];
				if (race) await race.delete();
				remainingItems.push(item);
			} else if (item.type === "poder") {
				const tags = item.system?.automationtags ?? [];
				if (tags.includes("pericia")) {
					const pericias = await this.promptPericiaSelection();
					if (!pericias || !pericias.length) continue; // User cancelled
					this._applyTreinado(item, pericias);
				}
				remainingItems.push(item);
			} else remainingItems.push(item);
		}

		// Default drop handling if levels were not added
		return super._onDropItemCreate(remainingItems);
	}

	/**
	 * Add or replace passive effects in the power item that set the selected pericias as trained.
	 * @param {object} item - The power item object.
	 * @param {string[]} pericias - Array of pericia keys to train.
	 */
	_applyTreinado(item, pericias) {
		item.effects = item.effects || [];
		// Remove any previous auto-trained pericia effect
		item.effects = item.effects.filter(
			(e) => !effectChanges(e).some((c) => c.key?.startsWith("system.pericias.") && c.key?.endsWith(".treinado"))
		);

		for (const pericia of pericias) {
			item.effects.push({
				name: game.i18n.localize(CONFIG.T20.pericias[pericia]?.label || pericia),
				icon: item.img,
				disabled: false,
				transfer: true,
				system: {
					changes: [
						{
							key: `system.pericias.${pericia}.treinado`,
							value: true,
							type: "override",
							priority: 20
						}
					]
				},
				flags: {
					tormenta20: {
						autoTrainedPericia: true
					}
				}
			});
		}
	}

	/**
	 * Prompt user to select pericias when dropping a power with the flag set.
	 * @returns {Promise<string[]|null>} The selected pericia keys or null if cancelled.
	 */
	async promptPericiaSelection() {
		const pericias = this.actor.system.pericias || {};
		const periciaList = Object.entries(pericias).map(([key, value]) => ({
			key,
			label: game.i18n.localize(CONFIG.T20.pericias[key]?.label || key)
		}));
		return new Promise((resolve) => {
			const dialog = new PericiaSelection(periciaList, resolve);
			dialog.render(true);
		});
	}

	/* -------------------------------------------- */

	/**
	 * Organize and classify Owned Items for Character sheets
	 * @private
	 */
	async _prepareItems(data) {
		const actorData = data.actor;
		// Initialize containers.
		const favoritos = {
			armas: [],
			itens: [],
			poderes: [],
			magias: {
				1: { spells: [], custo: 1 },
				2: { spells: [], custo: 3 },
				3: { spells: [], custo: 6 },
				4: { spells: [], custo: 10 },
				5: { spells: [], custo: 15 }
			},
			qtdMagias: 0
		};

		// Categorize items as inventory
		const inventario = {
			arma: { label: "Armas", items: [], dataset: { type: "arma" } },
			equipamento: {
				label: "Equipamentos",
				items: [],
				dataset: { type: "equipamento" }
			},
			consumivel: {
				label: "Consumível",
				items: [],
				dataset: { type: "consumivel" }
			},
			tesouro: { label: "Tesouro", items: [], dataset: { type: "tesouro" } }
		};

		// Partition items by category
		let [items, magias, poderes, classes] = await data.items.reduce(
			async (arr, item) => {
				// Item details
				item.img = item.img || CONST.DEFAULT_TOKEN;
				item.isStack = Number.isNumeric(item.system.qtd) && item.system.qtd !== 1;
				try {
					if (typeof item.system.description === "string" || item.system.description instanceof String) {
						item.system.description = { value: item.system.description };
					}

					item.system.description.value = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
						item.system.description.value,
						{
							secrets: item.isOwner,
							async: true,
							relativeTo: item
						}
					);
				} catch (err) {
					ui.notifications.error("Falha ao carregar descrição", {
						permanent: false
					});
					console.warn(err);
				}

				if (item.type === "classe") {
					item.abbr = item.name.substr(0, 4);
				}

				let isFav = item.flags.tormenta20?.favorito || false;
				if (isFav) {
					if (item.type === "arma") {
						favoritos.armas.push(item);
					} else if (item.type === "poder") {
						favoritos.poderes.push(item);
					} else if (item.type === "magia") {
						favoritos.magias[item.system.circulo].spells.push(item);
						favoritos.qtdMagias++;
					} else if (["consumivel", "equipamento", "tesouro"].includes(item.type)) {
						favoritos.itens.push(item);
					}
				}

				if (!Array.isArray(arr)) arr = await arr;
				// Classify items into types
				if (item.type === "magia") arr[1].push(item);
				else if (item.type === "poder") arr[2].push(item);
				else if (item.type === "classe") arr[3].push(item);
				else if (Object.keys(inventario).includes(item.type)) arr[0].push(item);
				return arr;
			},
			[[], [], [], []]
		);

		// Apply active item filters
		// TODO

		// Organize items
		for (let i of items) {
			i.system.qtd = i.system.qtd || 0;
			i.system.espacos = i.system.espacos || 0;
			i.espacosTotal = Math.round(i.system.qtd * i.system.espacos * 100) / 100;
			// Equipament Slots.
			this._itemSlotIcon(i);
			inventario[i.type].items.push(i);
		}

		// Organize spells and count the number of prepared spells
		const grimorio = {
			1: { spells: [], custo: 1 },
			2: { spells: [], custo: 3 },
			3: { spells: [], custo: 6 },
			4: { spells: [], custo: 10 },
			5: { spells: [], custo: 15 }
		};
		let maiorCirculo = 0;
		for (let m of magias) {
			maiorCirculo = Math.max(maiorCirculo, m.system.circulo);
			if (m.system.tipo === "eng") this._itemSlotIcon(m);
			grimorio[m.system.circulo].spells.push(m);
		}

		// classes.sort
		classes.sort((a, b) => (b.system.inicial || 0) - (a.system.inicial || 0));

		// Assign and return
		actorData.favoritos = favoritos;
		actorData.classes = classes;
		actorData.poderes = poderes;
		actorData.magias = grimorio;
		actorData.maiorCirculo = maiorCirculo;
		actorData.race = this.actor.itemTypes.race[0];
		if (this.layout === "character-base") {
			inventario.itens = { label: "Itens", items: items };
		}
		actorData.inventario = inventario;
	}

	/* -------------------------------------------- */

	async _onPrepareSpell(ev) {
		ev.stopImmediatePropagation();
		const li = $(ev.currentTarget).parents(".item");
		const item = this.actor.items.get(li.data("itemId"));
		const id = item.system;
		let updateItems = [];
		updateItems.push({ _id: item.id, "system.preparada": !id.preparada });
		await this.actor.updateEmbeddedDocuments("Item", updateItems);
	}

	_itemSlotIcon(item) {
		let slot = "";
		item.equipado = item.system.equipado2;
		if (!item.equipado) return;

		const { slot: equippedSlot } = item.equipado;
		const isHand = item.equipado.type === "hand" || foundry.utils.hasProperty(item.system, "empunhadura");
		// const body = item.equipado.type === "body" ||
		if (game.settings.get("tormenta20", "equipmentSlots")) {
			slot = parseInt(equippedSlot) === 12 ? 2 : 1;
		} else if (item.system.equipado) {
			if (isHand) slot = Number(item.system.equipado);
		} else return;
		item.equipado.icon2 = `<b class="fa-stack-1x">${typeof slot === "number" ? slot : ""}</b>`;
		if (isHand) {
			item.equipado.icon1 = '<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>';
		} else if (item.equipado.type === "body") {
			item.equipado.icon1 = '<i class="fa-solid fa-shirt fa-stack-1x"></i>';
		} else if (item.equipado.type === "both") {
			if (equippedSlot === 0) {
				item.equipado.icon1 = '<i class="fa-solid fa-shield fa-stack-1x"></i>';
			} else if (equippedSlot.toString().split(".")[1] === 1) {
				item.equipado.icon1 = '<i class="fa-solid fa-hand-back-fist fa-stack-1x"></i>';
			} else if (equippedSlot.toString().split(".")[1] === 2) {
				item.equipado.icon1 = '<i class="fa-solid fa-shirt fa-stack-1x"></i>';
			}
		}
	}
}

/**
 * An Actor sheet for Complex Hazard type characters.
 * Extends the base ActorSheetT20 class.
 * @extends {ActorSheetT20}
 */
class HazardSheetT20 extends ActorSheetT20 {
	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "hazard"],
			template: "systems/tormenta20/templates/actor/hazard-sheet.hbs",
			width: 550,
			height: 700
		});
	}

	get unsupportedItemTypes() {
		return new Set(Item.TYPES);
	}

	/* -------------------------------------------- */
	/*  SheetPreparation                            */
	/* -------------------------------------------- */

	/** @override */
	async getData() {
		const sheetData = await super.getData();
		sheetData.htmlFields ??= {};
		sheetData.htmlFields.actions = await this.enrichHTML(sheetData.system.detalhes.actions, sheetData);
		sheetData.htmlFields.goal = await this.enrichHTML(sheetData.system.detalhes.goal, sheetData);
		sheetData.htmlFields.effects = await this.enrichHTML(sheetData.system.detalhes.effects, sheetData);

		return sheetData;
	}
}

/**
 * An Actor sheet for NPC type characters.
 * Extends the base ActorSheetT20 class.
 * @extends {ActorSheetT20}
 */
class ActorSheetT20NPC extends ActorSheetT20 {
	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "npc"],
			tabs: [
				{
					navSelector: ".primary",
					contentSelector: ".sheet-body.primary",
					initial: "statblock"
				},
				{
					navSelector: ".secondary",
					contentSelector: ".sheet-body.secondary",
					initial: "sheet"
				}
			],
			template: "systems/tormenta20/templates/actor/npc-sheet.hbs",
			width: 500,
			height: 700
		});
	}

	/* -------------------------------------------- */
	/*  SheetPreparation                            */
	/* -------------------------------------------- */

	/** @override */
	async getData() {
		const sheetData = await super.getData();

		// FLAGS
		sheetData.compactSpells = game.settings.get("tormenta20", "foeSheetCompactSpell");

		let resText = {
			imu: [],
			imuTxt: "",
			res: [],
			resTxt: "",
			vul: [],
			vulTxt: ""
		};
		const res = this.actor.system.tracos.resistencias;
		const ics = this.actor.system.tracos.ic;

		for (const [key, data] of Object.entries(res)) {
			if (data.imunidade) resText.imu.push(key);
			else if (data.vulnerabilidade) resText.vul.push(key);
			else if (data.value > 0) resText.res.push(`${key} ${data.value}`);
		}
		if (ics.value && !foundry.utils.isEmpty(ics.value)) {
			resText.imu.push(...ics.value);
		}
		if (ics.custom) {
			resText.imu.push(ics.custom);
		}
		sheetData.resistencias = "";
		if (!foundry.utils.isEmpty(resText.imu)) {
			resText.imu = resText.imu.map((i) => CONFIG.T20.conditionTypes[i] ?? i);
			resText.imuTxt += `imunidade a ${resText.imu.join(", ")}`;
			sheetData.resistencias += resText.imuTxt;
		}
		if (!foundry.utils.isEmpty(resText.res)) {
			resText.resTxt += `redução de ${resText.res.join(", ")}`;
			if (sheetData.resistencias) sheetData.resistencias += `, ${resText.resTxt}`;
			else sheetData.resistencias += resText.resTxt;
		}
		if (!foundry.utils.isEmpty(resText.vul)) {
			resText.vulTxt += `vulnerabilidade a ${resText.vul.join(", ")}`;
			if (sheetData.resistencias) sheetData.resistencias += `, ${resText.vulTxt}`;
			else sheetData.resistencias += resText.vulTxt;
		}
		const excludedSkills = new Set(["luta", "pont", "perc", "inic", "fort", "refl", "vont"]);
		sheetData.listedSkills = sheetData.skills.filter((s) => (s.treinado || s.outros) && !excludedSkills.has(s.key));
		return sheetData;
	}

	/* -------------------------------------------- */

	/** @override */
	activateListeners(html) {
		// super.activateListeners(html);

		// Everything below here is only needed if the sheet is editable
		if (!this.options.editable) return;

		if (this.actor.isOwner) {
			// Rollable abilities.
			html.find(".magia-rollable").click((event) => this._onItemRoll(event));
			html.find(".arma-rollable").click((event) => this._onItemRoll(event));
			html.find(".poder-rollable").click((event) => this._onItemRoll(event));
		}

		// Drag events for macros.
		let handler = (ev) => this._onDragStart(ev);
		html.find(".pericia-rollable").each((i, li) => {
			if (!li.hasAttribute("data-item-id")) return;
			li.setAttribute("draggable", true);
			li.addEventListener("dragstart", handler, false);
		});

		super.activateListeners(html);
	}

	/* -------------------------------------------- */
	/*  Event Listeners and Handlers                */
	/* -------------------------------------------- */

	/* -------------------------------------------- */

	/**
	 *
	 */
	_getResistencias(data) {
		const resistencias = this.actor.system.tracos.resistencias;
		data.resistencias = Object.entries(resistencias).reduce(
			(o, r) => {
				if (r[1].imunidade) o.imu.push(r[0]);
				else if (r[1].vulnerabilidade) o.vul.push(r[0]);
				else if (r[1].value && o.rd[r[1].value]) o.rd[r[1].value].push(r[0]);
				else if (r[1].value && !o.rd[r[1].value]) o.rd[r[1].value] = [r[0]];
				return o;
			},
			{ imu: [], vul: [], rd: [] }
		);
		data.resistencias.imu.join(", ");
		data.resistencias.vul.join(", ");
	}

	/* -------------------------------------------- */

	/**
	 * Organize Owned Items for rendering the NPC sheet
	 * @private
	 */
	async _prepareItems(data) {
		const actorData = data.actor;
		// Initialize containers.
		// Categorize items as inventory
		const inventario = {
			arma: {
				label: "Armas",
				items: [],
				dataset: { type: "arma" },
				melee: 0,
				ranged: 0
			},
			equipamento: {
				label: "Equipamentos",
				items: [],
				dataset: { type: "equipamento" }
			},
			consumivel: {
				label: "Consumível",
				items: [],
				dataset: { type: "consumivel" }
			},
			tesouro: { label: "Tesouro", items: [], dataset: { type: "tesouro" } }
		};

		// Partition items by category
		let [items, magias, poderes] = await data.items.reduce(
			async (arr, item) => {
				// Item details
				item.img = item.img || CONST.DEFAULT_TOKEN;
				item.isStack = Number.isNumeric(item.system.qtd) && item.system.qtd !== 1;
				item.system.description.value = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
					item.system.description.value,
					{
						secrets: this.actor.isOwner,
						async: true,
						relativeTo: item
					}
				);
				if (item.type === "magia") {
					let element = document.createElement("div");
					element.innerHTML = item.system.description.value;
					if (element.querySelector(".secret")) {
						let description = element.querySelector(".secret").innerText;
						description = description.replace(item.name, "");
						item.system.description.value = `<span>${description}</span>`;
					}
				}

				if (!Array.isArray(arr)) arr = await arr;
				// Classify items into types
				if (item.type === "magia") arr[1].push(item);
				else if (item.type === "poder") arr[2].push(item);
				else if (Object.keys(inventario).includes(item.type)) arr[0].push(item);
				return arr;
			},
			[[], [], []]
		);

		// Organize items
		for (let i of items) {
			i.system.qtd = i.system.qtd || 0;
			i.system.espacos = i.system.espacos || 0;
			i.espacosTotal = Math.round(i.system.qtd * i.system.espacos * 100) / 100;
			if (i.type === "arma") {
				i.melee = ["corpo-a-corpo", "corpo-a-corpo-arremesso"].includes(i.system.proposito);
				i.ranged = ["arremesso", "corpo-a-corpo-arremesso", "disparo"].includes(i.system.proposito);
			}
			inventario[i.type].items.push(i);
		}

		// Weapon Types
		inventario.arma.melee = inventario.arma.items.filter((f) => f.type === "arma" && f.melee).length;
		inventario.arma.ranged = inventario.arma.items.filter((f) => f.type === "arma" && f.ranged).length;
		// console.log(inventario.arma);
		// Organize spells and count the number of prepared spells
		const grimorio = {
			1: { spells: [], custo: 1 },
			2: { spells: [], custo: 3 },
			3: { spells: [], custo: 6 },
			4: { spells: [], custo: 10 },
			5: { spells: [], custo: 15 }
		};
		let maiorCirculo = 0;

		magias.forEach(function (m) {
			maiorCirculo = Math.max(maiorCirculo, m.system.circulo);
			grimorio[m.system.circulo].spells.push(m);
		});

		// Assign and return
		actorData.poderes = poderes;
		actorData.magias = grimorio;
		actorData.maiorCirculo = maiorCirculo;

		actorData.inventario = inventario;
		// inventario.itens = {label: "Itens", items: items};
		// actorData.inventario = inventario;
	}
}

class ActorSheetT20Simple extends ActorSheetT20Character {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "simple"],
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-body",
					initial: "attributes"
				}
			],
			scrollY: [".sheet-body"],
			width: 600,
			height: 600
		});
	}

	/** @override */
	get template() {
		return "systems/tormenta20/templates/actor/simple-sheet.hbs";
	}

	/**
	 * Organize Owned Items for rendering the NPC sheet
	 * @private
	 */
	async _prepareItems(data) {
		const actorData = data.actor;
		// Initialize containers.

		// Categorize items as inventory
		const inventario = {
			arma: { label: "Armas", items: [], dataset: { type: "arma" } },
			equipamento: {
				label: "Equipamentos",
				items: [],
				dataset: { type: "equipamento" }
			},
			consumivel: {
				label: "Consumível",
				items: [],
				dataset: { type: "consumivel" }
			},
			tesouro: { label: "Tesouro", items: [], dataset: { type: "tesouro" } }
		};

		// Partition items by category
		let [items, magias, poderes] = data.items.reduce(
			(arr, item) => {
				// Item details
				item.img = item.img || CONST.DEFAULT_TOKEN;
				item.isStack = Number.isNumeric(item.system.qtd) && item.system.qtd !== 1;

				// Classify items into types
				if (item.type === "magia") arr[1].push(item);
				else if (item.type === "poder") arr[2].push(item);
				else if (Object.keys(inventario).includes(item.type)) arr[0].push(item);
				return arr;
			},
			[[], [], []]
		);

		// Organize items
		for (let i of items) {
			i.system.qtd = i.system.qtd || 0;
			i.system.espacos = i.system.espacos || 0;
			i.espacosTotal = Math.round(i.system.qtd * i.system.espacos * 100) / 100;
			inventario[i.type].items.push(i);
		}

		// Organize spells and count the number of prepared spells
		const grimorio = {
			1: { spells: [], custo: 1 },
			2: { spells: [], custo: 3 },
			3: { spells: [], custo: 6 },
			4: { spells: [], custo: 10 },
			5: { spells: [], custo: 15 }
		};
		let maiorCirculo = 0;
		magias.forEach(function (m) {
			maiorCirculo = Math.max(maiorCirculo, m.system.circulo);
			grimorio[m.system.circulo].spells.push(m);
		});

		// Assign and return
		actorData.poderes = poderes;
		actorData.magias = grimorio;
		actorData.maiorCirculo = maiorCirculo;
		inventario.itens = { label: "Itens", items: items };
		actorData.inventario = inventario;
	}
}

class ActorSheetT20CharacterTabbed extends ActorSheetT20Character {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "actor", "character", "tabbed"],
			height: 850,
			width: 650
		});
	}

	get layout() {
		return "character-tabbed";
	}

	async getData() {
		const sheetData = await super.getData();
		const { poderes } = sheetData.actor;
		for (const tipo of Object.keys(CONFIG.T20.powerType)) {
			sheetData.actor[`poderes${tipo.capitalize()}`] = poderes.filter((p) => p.system.tipo === tipo);
		}
		return sheetData;
	}
}

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
class ItemSheetT20 extends foundry.appv1.sheets.ItemSheet {
	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/** @inheritdoc */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["tormenta20", "sheet", "item"],
			width: 620,
			height: 480,
			scrollY: [".tab.details"],
			tabs: [
				{
					navSelector: ".sheet-tabs",
					contentSelector: ".sheet-body",
					initial: "description"
				}
			],
			dragDrop: [{ dragSelector: "[data-effect-id]", dropSelector: ".effects-list" }, { dropSelector: ".opt-drop" }]
		});
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	get template() {
		const path = "systems/tormenta20/templates/item";
		if (["consumivel", "tesouro"].includes(this.item.type)) {
			return `${path}/item-sheet.hbs`;
		} else if (this.item.type === "armadura") {
			return `${path}/equip-sheet.hbs`;
		} else if (["comodo", "mobilia"].includes(this.item.type)) {
			return `${path}/room-furniture-sheet.hbs`;
		}
		return `${path}/${this.item.type}-sheet.hbs`;
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	setPosition(position = {}) {
		if (!(this._minimized || position.height)) {
			position.height = this._tabs[0].active === "details" ? "auto" : this.options.height;
		}
		return super.setPosition(position);
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	_getSubmitData(updateData = {}) {
		const formData = foundry.utils.expandObject(super._getSubmitData(updateData));
		// Create the expanded update data object
		// const fd = new foundry.applications.ux.FormDataExtended(this.form, {editors: this.editors});
		// let tdata = fd.object;
		// let data = fd.object;//{};
		// for (let key of Object.keys( tdata ) ){
		// 	let nkey = key.replace(/^system./, 'data.');
		// 	data[ nkey ] = tdata[key];
		// }
		// if ( updateData ) formData = foundry.utils.mergeObject(formData, updateData);
		// else data = foundry.utils.expandObject(data);

		// Handle rolls array
		if (formData.system?.rolls) {
			formData.system.rolls = Object.values(formData.system.rolls || []);
			let rolls = Object.entries(formData.system?.rolls || []);
			for (let [key, roll] of rolls) {
				if (roll) roll.parts = Object.values(roll?.parts || {}).map((d) => [d[0] || "", d[1] || ""]);
				if (roll) roll.key = roll.type + key;
			}
		}

		// Handle progression array
		// formData.system.progression = Object.values(formData.system.progression || []);
		// let progression = Object.entries(formData.system?.progression || []);
		// for (let [key, prog] of progression){
		// 	if ( prog.list ) {
		// 		prog.list = Object.values(prog.list);
		// 	} else prog.list = [];
		// }
		// Return the flattened submission data
		return foundry.utils.flattenObject(formData);
	}

	/* -------------------------------------------- */
	/*  SheetPreparation                            */
	/* -------------------------------------------- */

	/** @override */
	async getData(options) {
		const sheetData = await super.getData(options);
		const item = sheetData.item;
		const source = item.toObject();
		const rollOptions = {};
		rollOptions.pericias = Object.entries(T20.pericias)
			.reduce(
				(acc, [k, v]) => {
					const data = { value: k, label: v.label };
					if (["atua", "luta", "pont"].includes(k)) {
						data.group = "T20.DefaultPlural";
						acc[0].push(data);
					} else {
						data.group = "Outras Perícias";
						acc[1].push(data);
					}
					return acc;
				},
				[[], []]
			)
			.flat();
		rollOptions.atributos = Object.entries(T20.atributos).reduce((acc, [value, label]) => {
			acc.push({ value, label });
			return acc;
		}, []);
		rollOptions.atributosDano = Object.entries(T20.atributos).reduce((acc, [value, label]) => {
			acc.push({ value: `@${value}`, label });
			return acc;
		}, []);
		rollOptions.atributosDano.unshift({ value: "padrao", label: "T20.Default" });

		const dT = [
			"dano",
			"perda",
			"corte",
			"impacto",
			"perfuracao",
			"acido",
			"eletricidade",
			"essencia",
			"fogo",
			"frio",
			"luz",
			"psiquico",
			"trevas",
			"curapv",
			"curatpv",
			"curapm",
			"curatpm"
		];
		rollOptions.damageTypes = dT.reduce((acc, value) => {
			let group = "T20.DamageElementalPlural";
			if (["dano", "perda"].includes(value)) group = "T20.DefaultPlural";
			else if (["curapv", "curatpv", "curapm", "curatpm"].includes(value)) group = "T20.HealingPlural";
			else if (["corte", "impacto", "perfuracao"].includes(value)) group = "T20.DamagePhysicalPlural";
			acc.push({
				value,
				group,
				label: T20.damageTypes[value] ?? T20.healingTypes[value]
			});
			return acc;
		}, []);
		const selectOptions = {};
		selectOptions.range = [
			{ value: "short", label: "T20.DistShort" },
			{ value: "medium", label: "T20.DistMedium" },
			{ value: "long", label: "T20.DistLong" }
		];
		foundry.utils.mergeObject(sheetData, {
			rootId: this.id,
			source: source.system,
			schema: item.system.schema,
			system: item.system,
			labels: this.item.labels,
			isOwned: item.isOwned,
			isCharacterOwned: item.isOwned && item.parent.type === "character",
			isNPCOwned: item.isOwned && item.parent.type === "npc",
			isSimpleOwned: item.isOwned && item.parent.type === "simple",

			itemUpgradeStatus: this._itemUpgradeStatus,
			selectOptions: selectOptions,
			rollOptions: rollOptions,
			config: CONFIG.T20,
			// itemType: sheetData.item.type.capitalize(),
			itemType: game.i18n.localize(`TYPES.Item.${item.type}`),
			itemStatus: this._getItemStatus(),
			itemProperties: this._getItemProperties(),
			isPhysical: foundry.utils.hasProperty(item.system, "qtd"),
			// TextEditors
			htmlFields: {
				description: await foundry.applications.ux.TextEditor.implementation.enrichHTML(item.system.description.value, {
					secrets: item.isOwner,
					async: true,
					relativeTo: this.item
				})
			},

			// Prepare Active Effects
			effects: ActiveEffectT20.prepareActiveEffectCategories(item.effects),
			// Resource to Consume
			abilityConsumptionTargets: this._getItemConsumptionTargets(item.system),
			rolltags: foundry.applications.elements.HTMLStringTagsElement.create({
				localize: true,
				name: "system.rolltags",
				placeholder: "Tags",
				value: item.system.rolltags
			}).outerHTML
		});

		sheetData.documentName = "Item";
		return sheetData;
	}

	/* -------------------------------------------- */

	/**
	 * Get the valid item consumption targets which exist on the actor
	 * @param {object} item         Item data for the item being displayed
	 * @returns {{string: string}}   An object of potential consumption targets
	 * @private
	 */
	_getItemConsumptionTargets(item) {
		const consume = item.consume || {};
		if (!consume.type) return [];
		const actor = this.item.actor;
		if (!actor) return {};

		// Ammunition
		if (consume.type === "ammo") {
			return actor.itemTypes.consumivel.reduce((ammo, i) => {
				if (i.system.tipo === "ammo") {
					ammo[i.id] = `${i.name} (${i.system.qtd})`;
				}
				return ammo;
			}, {});
			// {[i._id]: `${i.name} (${item.qtd})`}
		}

		// Resources
		else if (consume.type === "attribute") {
			const resources = this.item.actor?.system.resources ?? {};
			return Object.entries(resources).reduce((object, r) => {
				object[r[0]] = r[1].label;
				return object;
			}, {});
		}
		// Materials
		else if (consume.type === "material") {
			return actor.items.reduce((obj, i) => {
				if (["consumivel", "tesouro"].includes(i.type) && !i.ativacao) {
					obj[i.id] = `${i.name} (${i.system.qtd})`;
				}
				return obj;
			}, {});
		}
		return {};
	}

	/* -------------------------------------------- */

	/** @inheritdoc */
	activateListeners(html) {
		super.activateListeners(html);
		if (this.isEditable) {
			html.find(".rolls-control").click(this._onRollsControl.bind(this));
			html.find(".parts-control").click(this._onPartsControl.bind(this));

			html.find(".trait-selector").click(this._onConfigureTraits.bind(this));

			html.find(".effect-control-list").click((ev) => {
				let parent = ev.currentTarget.closest(".effect-controls");
				let list = $(parent).find(".add-status-effects");
				$(list).toggleClass("active");
			});
			html.find(".effect-control-status").click((ev) => {
				ActiveEffectT20.onManageActiveEffect(ev, this.item);
			});
			html.find(".effect-control").on("click contextmenu", (ev) => ActiveEffectT20.onManageActiveEffect(ev, this.item));
			if (this.item.system.enableAutoUpgrades) {
				html.find(".tab.enhancements .updateUpgrades").change(async (ev) => {
					const { value } = ev.currentTarget;
					const { name } = ev.currentTarget.dataset;
					const key = name.replace("system.upgrades.", "");
					// TODO: Refactoring. Isso ta fazendo 5 updates em sequência.
					if (this.item.system.upgrades[key]) await this._deleteEffect(this.item.system.upgrades[key]);
					if (value) await this._createEffect(value);
					await this.item.update({ [name]: value });
				});
			}

			// Progression Tab
			// html.find(".progression-control").click(this._onProgressionControl.bind(this));
			// html.find(".progression-option-control").click(this._onProgressionOptionControl.bind(this));
		}
	}

	/* -------------------------------------------- */
	/*  Interactions                                */
	/* -------------------------------------------- */

	async _onDrop(event) {
		const data = foundry.applications.ux.TextEditor.implementation.getDragEventData(event);
		const item = this.item;
		const allowed = Hooks.call("dropItemSheetData", item, this, data);
		if (allowed === false) return;

		// Dropped Documents
		const documentClass = foundry.utils.getDocumentClass(data.type);
		if (documentClass) {
			const document = await documentClass.fromDropData(data);
			await this._onDropDocument(event, document);
		}
	}

	async _onDropDocument(event, document) {
		switch (document.documentName) {
			case "ActiveEffect":
				return (await this._onDropActiveEffect(event, document)) ?? null;
			case "Item":
				return (await this._onDropItem(event, document)) ?? null;
			default:
				return null;
		}
	}

	async _onDropActiveEffect(event, data) {
		const effect = await ActiveEffect.implementation.fromDropData(data);
		if (!this.item.isOwner || !effect) return false;
		if (effect.target === this.item) return false;
		return ActiveEffect.implementation.create(effect.toObject(), { parent: this.item });
	}

	// /** @override */
	// _onDragStart(event) {
	// 	console.log("onDragStart");
	// 	super._onDragStart(event);
	// }

	/**
	 * An event that occurs when a drag workflow begins for a draggable item on the sheet.
	 * @param {DragEvent} event       The initiating drag start event
	 * @returns {Promise<void>}
	 * @protected
	 */
	async _onDragStart(event) {
		const target = event.currentTarget;
		if ("link" in event.target.dataset) return;
		let dragData;

		// Active Effect
		if (target.dataset.effectId) {
			const effect = this.item.effects.get(target.dataset.effectId);
			dragData = effect.toDragData();
		}

		// Set data transfer
		if (!dragData) return;
		event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
	}

	/** @inheritdoc */
	// async _onDrop(event) {
	// 	const data = foundry.applications.ux.TextEditor.implementation.getDragEventData(event);
	// 	// Handle different data types
	// 	switch (data.type) {
	// 		case "ActiveEffect":
	// 			// return this._onDropActiveEffect(event, data);
	// 		case "Item":
	// 			return this._onDropItem(event, data);
	// 	}
	// }

	/* -------------------------------------------- */

	_onDropItem(event, data) {
		let tgt = event.target;
		if (!tgt.classList.contains("opt-uuid")) {
			tgt = tgt.closest("li").querySelector(".opt-uuid");
		}
		let pIndex = Number(tgt.dataset.pIndex);
		let oIndex = Number(tgt.dataset.oIndex);
		if (pIndex >= 0 && oIndex >= 0 && data.uuid) {
			let progression = foundry.utils.deepClone(this.item.system.progression);
			progression[pIndex].list[oIndex] = {
				type: "item",
				value: data.uuid,
				selected: false
			};

			return this.item.update({
				"system.progression": progression
			});
		}
	}

	/* -------------------------------------------- */

	/** @override */
	_getHeaderButtons() {
		let buttons = super._getHeaderButtons();
		if (this.object.type === "magia" && (this.actor?.getFlag("tormenta20", "createScroll") || game.user.isGM)) {
			buttons.unshift({
				label: game.i18n.localize("T20.WriteScroll"),
				class: "create-scroll",
				icon: "fas fa-scroll",
				onclick: () => this._createScroll()
			});
		}
		return buttons;
	}

	/* -------------------------------------------- */

	/**
	 * Get status text for itens;
	 * @retun {string}
	 */
	_getItemStatus() {
		if (this.item.type === "classe") {
			return game.i18n.localize(this.item.system.inicial ? "T20.ClassOriginal" : "");
		} else if (this.item.type === "magia") {
			return game.i18n.localize(this.item.system.preparada ? "T20.SpellPrepPrepared" : "");
		} else if (["arma"].includes(this.item.type)) {
			if (game.settings.get("tormenta20", "equipmentSlots")) {
				return game.i18n.localize(
					this.item.system.equipado2.slot
						? parseInt(this.item.system.equipado2.slot) === 12
							? "T20.WieldedDual"
							: "T20.Wielded"
						: ""
				);
			}
			return game.i18n.localize(
				this.item.system.equipado ? (this.item.system.equipado === 2 ? "T20.WieldedDual" : "T20.Wielded") : ""
			);
		} else if (["equipamento"].includes(this.item.type)) {
			if (game.settings.get("tormenta20", "equipmentSlots")) {
				return game.i18n.localize(this.item.system.equipado2.slot ? "T20.Weared" : "");
			}
			return game.i18n.localize(this.item.system.equipado ? "T20.Weared" : "");
		}
		return "";
	}

	/* -------------------------------------------- */

	/**
	 * Get the Array of item properties which are used in the small sidebar of the description tab
	 * @return {Array}
	 * @private
	 */
	_getItemProperties() {
		const props = [];
		const labels = this.item.labels;
		if (this.item.type === "arma") {
			props.push(
				...Object.entries(this.item.system.propriedades)
					.filter((e) => e[1] === true)
					.map((e) => CONFIG.T20.weaponProperties[e[0]])
			);
		} else if (this.item.type === "magia") {
			let hTags = {
				ativacao: "T20.ActivationCost",
				range: "T20.Range",
				target: "T20.Target",
				area: "T20.Area",
				effect: "T20.Effect",
				duration: "T20.Duration",
				save: "T20.Resistance"
			};

			for (let [h, tag] of Object.entries(hTags)) {
				hTags[h] = game.i18n.localize(tag);
			}
			props.push(
				labels.ativacao ? `<b>${hTags.ativacao}:</b> ${labels.ativacao}` : null,
				labels.range ? `<b>${hTags.range}:</b> ${labels.range}` : null,
				labels.alvo ? `<b>${hTags.target}:</b> ${labels.alvo}` : null,
				labels.area ? `<b>${hTags.area}:</b> ${labels.area}` : null,
				labels.effect ? `<b>${hTags.effect}:</b> ${labels.effect}` : null,
				labels.duration ? `<b>${hTags.duration}:</b> ${labels.duration}` : null,
				labels.save ? `<b>${hTags.save}:</b> ${labels.save}` : null
			);
		}
		return props.filter(Boolean);
	}

	/* -------------------------------------------- */

	/**
	 *	Get consummable resources;
	 * @param {Object} item		Item being displayed
	 * @returns {{string: string}} An object of valid consummable resources;
	 */
	_getConsummableResources(item) {
		const consume = item.system.consume || {};
		if (!consume.type) return [];
		const actor = this.item.actor;
		if (!actor) return {};

		// Ammunition
		if (consume.type === "ammo") {
			return actor.itemTypes.consumivel.reduce(
				(ammo, i) => {
					if (i.system.consumableType === "ammo") {
						ammo[i.id] = `${i.name} (${i.system.quantidade})`;
					}
					return ammo;
				},
				{ [item._id]: `${item.name} (${item.system.quantidade})` }
			);
		}

		// Attributes
		else if (consume.type === "attribute") {
			const attributes = Object.values(CombatTrackerConfig.prototype.getAttributeChoices())[0]; // Bit of a hack
			return attributes.reduce((obj, a) => {
				obj[a] = a;
				return obj;
			}, {});
		}

		// Materials
		else if (consume.type === "material") {
			return actor.items.reduce((obj, i) => {
				if (["consumivel", "tesouro"].includes(i.type) && !i.system.ativacao) {
					obj[i.id] = `${i.name} (${i.system.consumivel})`;
				}
				return obj;
			}, {});
		}
		return {};
	}

	/* -------------------------------------------- */

	/**
	 * Add or remove a roll part from the roll formula
	 * @param {Event} event     The original click event
	 * @return {Promise}
	 * @private
	 */
	async _onPartsControl(event) {
		event.preventDefault();
		const a = event.currentTarget;
		// Add new damage component
		if (a.classList.contains("add-part") && a.dataset.rollId) {
			await this._onSubmit(event); // Submit any unsaved changes
			const key = a.dataset.rollId;
			const rolls = this.item.system.toObject().rolls;
			rolls[key].parts.push(["", "", ""]);
			return await this.item.update({ "system.rolls": rolls });
		}

		// Remove a damage component
		if (a.classList.contains("delete-part") && a.dataset.rollId) {
			await this._onSubmit(event); // Submit any unsaved changes
			const key = a.dataset.rollId;
			const li = a.closest(".roll-part");
			const rolls = this.item.system.toObject().rolls;
			rolls[key].parts.splice(Number(li.dataset.rollPart), 1);
			return this.item.update({ "system.rolls": rolls });
		}
	}

	async _onRollsControl(event) {
		event.preventDefault();
		const a = event.currentTarget;
		// Add new roll component
		if (a.classList.contains("add-roll")) {
			// await this._onSubmit(event);  // Submit any unsaved changes
			let rolltype = a.dataset.rollType;
			let roll = foundry.utils.deepClone(this.item.system.rolls);
			const r = {
				parts: [],
				name: rolltype.capitalize(),
				type: rolltype,
				key: rolltype
			};
			if (rolltype === "dano") {
				r.parts = [["1d6", "dano"], [""]];
				r.adaptavel = "";
			}
			roll.push(r);
			return this.item.update({ "system.rolls": roll });
		}

		// Remove a roll component
		if (a.classList.contains("delete-roll") && a.dataset.rollId) {
			let rolls = foundry.utils.deepClone(this.item.system.rolls);
			rolls.splice(Number(a.dataset.rollId), 1);
			return this.item.update({ "system.rolls": rolls });
		}
	}

	/* -------------------------------------------- */

	/**
	 * Handle spawning the TraitSelector application for selection various options.
	 * @param {Event} event   The click event which originated the selection
	 * @private
	 */
	_onConfigureTraits(event) {
		event.preventDefault();
		const a = event.currentTarget;
		const label = a.parentElement;

		let options = {
			name: a.dataset.target,
			title: label.innerText,
			choices: [],
			allowCustom: false
		};

		switch (a.dataset.options) {
			case "pericias": {
				const skills = this.item.system.pericias;
				const choiceSet = skills.escolhas?.length ? skills.escolhas : Object.keys(CONFIG.T20.pericias);
				options.choices = Object.fromEntries(
					Object.entries(CONFIG.T20.pericias).filter(([skill]) => choiceSet.includes(skill))
				);
				options.allowCustom = true;
				options.minimum = skills.numero;
				options.maximum = skills.numero;
				break;
			}
		}

		new TraitSelector(this.item, options).render(true);
	}

	/* -------------------------------------------- */

	/**
	 * Replicate the spell as a consumable scroll item.
	 * @param {Event} event   The click event which originated the selection
	 * @private
	 */
	_createScroll() {
		let itemData = this.object.toObject();
		delete itemData._id;
		delete itemData.stats;

		itemData.type = "consumivel";
		itemData.name = game.i18n.format("T20.ConsumableSpellName", {
			item: game.i18n.localize("T20.ConsumableSubtypeScroll"),
			name: this.object.name
		});
		itemData.img = "systems/tormenta20/icons/itens/itens-magicos/pergaminho.webp";
		itemData.flags = {
			core: {
				sourceId: this.object.uuid
			}
		};
		itemData.system.qtd = 1;
		itemData.system.espacos = 0.5;
		itemData.system.preco = 30 * itemData.system.ativacao.custo ** 2;
		itemData.system.ativacao.custo = 0;
		itemData.system.tipo = "scroll";
		if (this.actor) {
			this.actor.createEmbeddedDocuments("Item", [itemData]);
			if (this.actor.type === "character") {
				let msg = game.i18n.format("T20.ConsumableCreated", {
					actor: this.actor.name,
					name: itemData.name
				});
				ChatMessage.create({ content: msg });
			}
		} else {
			ItemT20.create(itemData);
		}
	}

	async _createEffect(upgrade) {
		const availableEffects = this._availableEffects;
		if (!availableEffects || !availableEffects[upgrade]) return;

		const effect = {
			...availableEffects[upgrade],
			name: game.i18n.localize(availableEffects[upgrade].name),
			description: game.i18n.localize(availableEffects[upgrade].description ?? ""),
			icon: this.item.img,
			origin: this.item.uuid,
			// We need to internationalize the items list
			flags: {
				...availableEffects[upgrade].flags,
				tormenta20: {
					...availableEffects[upgrade].flags.tormenta20,
					items: (availableEffects[upgrade].flags.tormenta20.items || "")
						.split(";")
						.map((i) => i.trim())
						.filter((i) => !!i)
						.map((i) => game.i18n.localize(i))
						.join(";")
				}
			}
		};

		if (!effect) return;

		if (effect.transfer) await this.item.actor?.createEmbeddedDocuments("ActiveEffect", [effect], { render: false });
		await this.item.createEmbeddedDocuments("ActiveEffect", [effect], { render: false });
	}

	async _deleteEffect(upgrade) {
		const effectsToDelete = [
			this.item.getEmbeddedCollection("ActiveEffect").contents,
			this.item.actor?.getEmbeddedCollection("ActiveEffect").contents
		]
			.flat()
			.filter((e) => !!e && e.flags?.tormenta20?.upgrade === upgrade && e.origin === this.item.uuid);

		// Delete old effects
		if (effectsToDelete.length) {
			const actorEffectsToDelete = effectsToDelete.filter((e) => e.parent.id === this.item.actor?.id).map((e) => e.id);
			const itemEffectsToDelete = effectsToDelete.filter((e) => e.parent.id === this.item.id).map((e) => e.id);

			await this.item.actor?.deleteEmbeddedDocuments("ActiveEffect", actorEffectsToDelete, { render: false });
			await this.item.deleteEmbeddedDocuments("ActiveEffect", itemEffectsToDelete, { render: false });
		}
	}

	get _itemUpgradeStatus() {
		const status = this._upgradeStatus;
		if (!status || !this.item.system?.upgrades) return "";

		const statusByType = {};

		Object.values(this.item.system.upgrades).forEach((v) => {
			if (!v || !v.length) return;
			statusByType[v] = status[v] === "DONE" ? "implemented" : "not-implemented";
		});

		return statusByType;
	}

	get _availableEffects() {
		if (!this._isUpgradable) return null;

		const upgrades = { ...T20.upgrades.general };

		if (this.item.type === "arma") {
			return Object.assign(upgrades, T20.upgrades.weapon);
		}

		if (this.item.system.tipo === "ammo") {
			return Object.assign(upgrades, T20.upgrades.ammo);
		}

		if (this.item.system.tipo === "esoterico") {
			return Object.assign(upgrades, T20.upgrades.esoteric);
		}

		if (["traje", "ferramenta"].includes(this.item.system.tipo)) {
			return Object.assign(upgrades, T20.upgrades.tools);
		}

		return Object.assign(upgrades, T20.upgrades.armor.general, T20.upgrades.armor[this.item.system.tipo]);
	}

	get _upgradeStatus() {
		if (!this._isUpgradable) return null;

		const status = { ...T20.upgrades.general.status };

		if (this.item.type === "arma") {
			return Object.assign(status, T20.upgrades.weapon.status);
		}

		if (this.item.system.tipo === "ammo") {
			return Object.assign(status, T20.upgrades.ammo.status);
		}

		if (this.item.system.tipo === "esoterico") {
			return Object.assign(status, T20.upgrades.esoteric.status);
		}

		if (["traje", "ferramenta"].includes(this.item.system.tipo)) {
			return Object.assign(status, T20.upgrades.tools.status);
		}

		return Object.assign(status, T20.upgrades.armor.status);
	}

	get _isUpgradable() {
		if (!["arma", "equipamento", "consumivel"].includes(this.item.type)) return false;
		if (
			this.item.system.tipo
			&& !["esoterico", "pesada", "leve", "escudo", "ferramenta", "traje", "ammo"].includes(this.item.system.tipo)
		)
			return false;

		return true;
	}
}

class RaceSheetT20 extends ItemSheetT20 {
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			dragDrop: [{ dragSelector: ".choiceset-item .item", dropSelector: ".choiceset" }]
		});
	}

	get unsupportedItemTypes() {
		return new Set(["comodo", "mobilia", "race", "classe"]);
	}

	async getData() {
		const context = await super.getData();
		await Promise.all(
			this.item.system.grants.map(async (cs, index) => {
				const choices = await Promise.all(
					cs.choices.map(async (c) => {
						const item = await fromUuid(c.uuid);
						if (!item) return null;
						c.img = item.img;
						c.name = item.name;
						return c;
					})
				);
				cs.choices = choices.filter(Boolean);
				this.item.system.grants[index] = cs;
			})
		);
		return context;
	}

	_cache = {};

	/* -------------------------------------------- */

	async activateListeners(html) {
		super.activateListeners(html);
		html.find(".item .item-name > label, .item .item-description").click((event) => this._onItemSummary(event));

		html.find("[data-action='add-choiceset']").on("click", this._onAddChoiceSet.bind(this));
		html.find("[data-action='delete-choiceset']").on("click", this._onDeleteChoiceSet.bind(this));
		html.find("[data-action='delete-item']").on("click", this._onDeleteItem.bind(this));
		// @todo add click event on item's img/label to render the item
	}

	async _onItemSummary(event) {
		event.preventDefault();
		let li = $(event.currentTarget).parents(".choiceset-item");
		const uuid = li.data("uuid");
		// fromUuid é custoso e pouco responsivo, por isso vale a pena usar cache
		let item = this._cache[uuid] ?? (await fromUuid(uuid));
		if (!item) return;
		this._cache[uuid] = item;
		let chatData = await item.getChatData();
		if (!chatData.description.value) return;
		// Toggle summary
		if (li.hasClass("expanded")) {
			let summary = li.children(".item-summary");
			summary.slideUp(200, () => summary.remove());
		} else {
			let div = $(`<div class="item-summary">${chatData.description.value}</div>`);
			let props = $("<div class='item-properties'></div>");
			div.append(props);
			li.append(div.hide());
			div.slideDown(200);
		}
		li.toggleClass("expanded");
	}

	_onAddChoiceSet(event) {
		event.preventDefault();
		const grants = this.item.system.grants ?? [];
		// @todo add Creation Dialog
		grants.push({
			title: "",
			desc: "",
			type: "multi",
			choices: []
		});
		this.item.update({ "system.grants": grants });
	}

	_onDeleteChoiceSet(event) {
		event.preventDefault();
		const { id } = event.target.closest(".choiceset").dataset;
		if (!id) return;
		const grants = this.item.system.grants.filter((item, index) => index !== Number(id));
		this.item.update({ "system.grants": grants });
	}

	_onDeleteItem(event) {
		event.preventDefault();
		const { id: index } = event.target.closest(".choiceset-item").dataset;
		const { id } = event.target.closest(".choiceset").dataset;
		if (!index || !id) return;
		const grants = this.item.system.grants;
		grants[id].choices = grants[id].choices.filter((item, _index) => _index !== Number(index));
		this.item.update({ "system.grants": grants });
	}

	/* -------------------------------------------- */

	async _onDragStart(event) {
		const li = event.currentTarget;
		if (event.target.classList.contains("content-link")) return;
		if (!li.closest(".choiceset-item").dataset.uuid) return super._onDragStart(event);

		const dragData = this._getEntryDragData(li.closest(".choiceset-item").dataset.uuid);
		if (!dragData) return;

		// Set data transfer
		event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
	}

	_getEntryDragData(entryId) {
		const entry = this.item.system.grants.findIndex((cs) => cs.choices.find((c) => c.uuid === entryId));
		if (Number.isNumeric(entry)) {
			return {
				choiceSet: entry,
				type: "Item",
				uuid: entryId
			};
		}
	}

	async _onDrop(event) {
		const data = foundry.applications.ux.TextEditor.implementation.getDragEventData(event);
		if (!["Item", "Folder"].includes(data.type)) return super._onDrop(event, data);

		if (data.type === "Folder") return this._onDropFolder(event, data);
		return await this._onDropItem(event, data);
	}

	async _onDropFolder(event, data) {
		const folder = await Folder.implementation.fromDropData(data);
		if (!this.item.isOwner || folder.type !== "Item") return [];

		await Promise.all(
			folder.contents.map(async (item) => {
				if (!(item instanceof Item)) item = await fromUuid(item.uuid);
				if (this.unsupportedItemTypes.has(item.type)) return;
				return this._onDropItem(event, item.toDragData());
			})
		);
	}

	async _onDropItem(event, data) {
		// name não será guardado pois ele é lido sempre que a ficha é renderizada para evitar problemas ao renomear o item original
		const item = await Item.implementation.fromDropData(data);
		const { img, name, type, uuid } = item;

		const { id: setId } = event.target.closest(".choiceset").dataset;
		const grants = this.item.system.grants;

		if (this.unsupportedItemTypes.has(type)) return false;
		// if (data.choiceSet === Number(setId)) return false; // return this._onSortItem(event, item, setId);
		if (data.choiceSet === Number(setId)) return this._onSortItem(event, item, setId);
		if (grants[setId].choices.find((c) => c.uuid === uuid)) {
			ui.notifications.warn("T20.RepeatedGrant", { localize: true });
			return false;
		}
		if ("choiceSet" in data && data.choiceSet !== Number(setId)) {
			grants[data.choiceSet].choices = grants[data.choiceSet].choices.filter((c) => c.uuid !== uuid);
		}
		grants[setId].choices.push({ uuid });
		grants[setId].choices.sort((a, b) => a.name.localeCompare(b.name));

		return await this.item.update({ "system.grants": grants });
	}

	_onSortItem(event, item, setId) {
		const newPos = event.target.closest(".choiceset-item");
		if (!newPos) return false;
		const grants = this.item.system.grants;
		const choices = grants[setId].choices;
		const oldIndex = choices.findIndex((c) => c.uuid === item.uuid);
		const newIndex = Number(newPos.dataset.id);
		if (oldIndex === newIndex || choices[oldIndex].advancement > choices[newIndex].advancement) return false;
		this._sortArray(choices, newIndex, oldIndex);
		return this.item.update({ "system.grants": grants });
	}

	_sortArray(array, newIndex, oldIndex) {
		if (newIndex >= array.length) {
			let k = newIndex - array.length + 1;
			while (k--) {
				array.push(undefined);
			}
		}
		array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
	}
}

class CharacterProgression extends FormApplication {
	constructor(object = {}, options = {}) {
		super(object, options);
	}

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "character-progression",
			classes: ["tormenta20"],
			title: game.i18n.localize("T20.CharacterProgression"),
			template: "systems/tormenta20/templates/apps/character-progression.hbs",
			width: 700,
			height: 700, // "auto",
			choices: {},
			allowCustom: true,
			minimum: 0,
			maximum: null
		});
	}

	getData() {
		this.object;
		return {
			race: {},
			devotion: {},
			background: {},
			levels: {
				1: {
					class: "",
					items: []
				}
			},
			config: CONFIG.T20
		};
	}

	async _updateObject(event, formData) {
		// const data = foundry.utils.expandObject(formData);
		// delete data.classes;
		// await this.object.setFlag("tormenta20", "lvlconfig", data);
	}
}

/**
 * An interface for displaying the content of a CompendiumCollection.
 * @extends {Application}
 * @param {CompendiumCollection} collection  The {@link CompendiumCollection} object represented by this interface.
 * @param {ApplicationOptions} [options]     Application configuration options.
 */
class CompendiumT20 extends foundry.applications.sidebar.apps.Compendium {
	constructor(collection, options) {
		super(collection, options);

		if (options.query) {
			this.query = options.query;
		}
	}

	/* inheritDoc */
	async getData(options = {}) {
		const context = await super.getData();
		if (this.query) {
			const queryKey = Object.entries(this.query)[0][0];
			const queryVal = Object.entries(this.query)[0][1];
			context.index = context.index.filter((i) => foundry.utils.getProperty(i, queryKey) == queryVal);
		}
		return context;
	}
}

class ResourceConfig extends FormApplication {
	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "trait-selector",
			classes: ["tormenta20", "resource-config"],
			title: "Configuração de Nível",
			template: "systems/tormenta20/templates/apps/resource-config.hbs",
			width: 500,
			height: "auto",
			choices: {},
			allowCustom: true,
			minimum: 0,
			maximum: null
		});
	}

	getData() {
		let classes = [];
		let flags = this.object.flags.tormenta20 || {};
		const con = this.object.system.atributos.con;
		const cls = this.object.items.filter((i) => i.type === "classe");
		const resources = {
			pv: this.object._source.system.attributes.pv,
			pm: this.object._source.system.attributes.pm
		};
		if (cls) {
			for (let [key, data] of Object.entries(cls)) {
				let c = data.system;
				let iniPV = c.inicial ? c.pvPorNivel * 3 : 0;
				classes[key] = {
					label: data.name,
					pvPorNivel: c.pvPorNivel,
					pmPorNivel: c.pmPorNivel,
					niveis: c.niveis,
					pvTotal: Number(iniPV) + Number(c.niveis) * (Number(c.pvPorNivel) + con.base + con.racial),
					pmTotal: c.niveis * c.pmPorNivel
				};
			}
		}
		return {
			actor: this.object,
			classes: classes,
			flags: flags,
			con: con.base + con.racial,
			config: CONFIG.T20,
			resources: resources
		};
	}

	async _updateObject(event, formData) {
		const data = foundry.utils.expandObject(formData);
		return await this.object.update(data);
	}
}

class TokenHUDT20 extends foundry.applications.hud.TokenHUD {
	static PARTS = {
		hud: {
			root: true,
			template: "systems/tormenta20/templates/apps/hud/token-hud.hbs"
		}
	};
}

class Tormenta20TypeData extends foundry.abstract.TypeDataModel {
	/** @inheritDoc */
	static defineSchema() {
		return {};
	}

	/* -------------------------------------------- */

	/* -------------------------------------------- */
	/*  Getters/Setters                             */
	/* -------------------------------------------- */

	get getDataFields() {
		const doc = this.parent;
		const schema = doc.system.schema;
		const dataFields = foundry.utils.flattenObject(doc.system.toObject());

		dataFields.name = doc.schema.getField("name");
		dataFields.img = doc.schema.getField("img");

		for (const [fieldPath, value] of Object.entries(dataFields)) {
			dataFields[fieldPath] = schema.getField(fieldPath);
			if (dataFields[fieldPath]?.choices) {
				let choices = dataFields[fieldPath].choices;
				dataFields[fieldPath].valueLabel = choices[value]?.label ?? choices[value];
				// sheetCategory
			}
		}

		return foundry.utils.expandObject(dataFields);
	}

	get document() {
		let parent = this.parent;
		while (parent) {
			if (parent.documentName) break;
			parent = parent.parent;
		}
		return parent;
	}

	// Children must implement their actions;
	get contextMenu() {
		return [];
	}

	/* -------------------------------------------- */
	/*  System Operations                           */
	/* -------------------------------------------- */

	/* -------------------------------------------- */
	/* Data Preparation                             */
	/* -------------------------------------------- */

	/** @inheritDoc */
	prepareBaseData() {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	prepareDerivedData() {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	async toEmbed(config, options = {}) {
		return null;
	}

	/* -------------------------------------------- */
	/*  Database Operations                         */
	/* -------------------------------------------- */

	/** @inheritDoc */
	async _preCreate(data, options, user) {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	_onCreate(data, options, userId) {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	async _preUpdate(changes, options, user) {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	_onUpdate(changed, options, userId) {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	async _preDelete(options, user) {}

	/* -------------------------------------------- */

	/** @inheritDoc */
	_onDelete(options, userId) {}
}

const fields$d = foundry.data.fields;
class BasesData extends Tormenta20TypeData {
	/** @inheritDoc */
	static defineSchema() {
		const _fields = tormenta20.data.fields;
		return {
			tipo: new fields$d.StringField({
				required: true,
				initial: "",
				label: "T20.BasesType"
			}),
			porte: new fields$d.StringField({
				required: true,
				nullable: false,
				blank: false,
				initial: "min",
				label: "T20.BasesSize",
				choices: Object.keys(T20.porteType)
			}),
			seguranca: new fields$d.SchemaField({
				base: new fields$d.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					integer: true,
					min: 0,
					label: "T20.BasesSecurity"
				}),
				bonus: new fields$d.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					integer: true,
					label: "T20.BasesSecurityBonus"
				}),
				total: new fields$d.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					integer: true,
					min: 0,
					label: "T20.BasesSecurityTotal"
				})
			}),
			residentes: new fields$d.SetField(new fields$d.ForeignDocumentField(foundry.documents.BaseActor, { idOnly: true })),
			rooms: new fields$d.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				integer: true,
				min: 0,
				label: "T20.BasesRoomsNumber"
			}),
			detalhes: new fields$d.SchemaField({
				biography: new fields$d.SchemaField({
					value: new fields$d.HTMLField({
						required: true,
						nullable: false,
						initial: "",
						label: "T20.BasesDescription"
					})
				})
			}),
			attributes: new fields$d.SchemaField({
				movement: new fields$d.EmbeddedDataField(_fields.MovementData, {
					initial: {
						walk: { base: 0, bonus: [] },
						climb: { base: 0, bonus: [] },
						burrow: { base: 0, bonus: [] },
						swim: { base: 0, bonus: [] },
						fly: { base: 0, bonus: [] },
						hover: false,
						tags: [],
						unit: "m"
					}
				})
			})
		};
	}

	prepareDerivedData() {
		super.prepareDerivedData?.();

		// Calculate seguranca.total
		const base = this.seguranca?.base ?? 0;
		const bonus = this.seguranca?.bonus ?? 0;
		this.seguranca.total = base + bonus;
	}
}

const fields$c = foundry.data.fields;

class CreatureData extends Tormenta20TypeData {
	static actorType;

	/** @inheritDoc */
	static defineSchema(type) {
		type ??= this.actorType;
		const fields = foundry.data.fields;
		tormenta20.data.fields;
		return {
			...super.defineSchema(),
			atributos: this.schemaAbilities(type),
			attributes: this.schemaAttributes(type),
			detalhes: this.schemaDetails(type),
			dinheiro: this.schemaCurrency(type),
			modificadores: this.schemaModifiers(type),
			pericias: new MappingField(new fields.EmbeddedDataField(SkillData), {
				initialKeys: T20.pericias,
				initialValue: this._initialSkillValue.bind(this),
				initialKeysOnly: false
			}),
			resources: new fields.TypedObjectField(
				new fields.SchemaField({
					value: new fields.NumberField({
						required: true,
						nullable: false,
						initial: 0,
						step: 1,
						integer: true,
						label: "T20.ResourceValue",
						hint: "T20.ResourceValueHint"
					}),
					max: new fields.NumberField({
						required: true,
						nullable: false,
						initial: 0,
						integer: true,
						label: "T20.ResourceMaxValue",
						hint: "T20.ResourceMaxValueHint"
					}),
					label: new fields.StringField({
						required: true,
						nullable: false,
						initial: ""
					})
				}),
				{
					initial: {
						primary: {
							value: 0,
							max: 0,
							label: game.i18n.localize(T20.resources.primary)
						},
						secondary: {
							value: 0,
							max: 0,
							label: game.i18n.localize(T20.resources.secondary)
						},
						tertiary: {
							value: 0,
							max: 0,
							label: game.i18n.localize(T20.resources.tertiary)
						},
						deathsave: {
							value: 0,
							max: 3,
							label: game.i18n.localize(T20.resources.deathsave)
						},
						shadow: {
							value: 0,
							max: 5,
							label: game.i18n.localize(T20.resources.shadow)
						},
						catarse: {
							value: 0,
							max: 3,
							label: game.i18n.localize(T20.resources.catarse)
						}
					}
				}
			),
			tracos: this.schemaTraits()
		};
	}

	/** @inheritdoc */
	static migrateData(data) {

		// TODO: remover essas migrações na V14
		if (data.resources && !Object.keys(data.resources).length) {
			data.resources = foundry.utils.deepClone(this.schema.fields.resources.initial);
		}
		if (data.tracos?.ic?.value?.includes('atordoamento')) {
			data.tracos.ic.value = data.tracos.ic.value.filter(i => i != 'atordoamento');
			data.tracos.ic.value.push('atordoado');
		}
		if (data?.attributes?.movement) {
			const movement = data.attributes.movement;
			for (const move of Object.keys(T20.movementTypes)) {
				const current = movement[move];
				if (Number.isNumeric(current)) {
					movement[move] = { base: current > 0 ? current : 0, bonus: [] };
				}
			}
		}
		return super.migrateData(data);
	}

	static _initialSkillValue(key, initial, existing) {
		const config = T20.pericias[key];
		if (!config) return existing ?? initial;
		const target = foundry.utils.deepClone(existing ?? initial);
		target.atributo = config.abl ?? initial.atributo;
		target.pda = config.armorPenalty ?? initial.st;
		target.st = config.trainedOnly ?? initial.pda;
		target.size = config.sizeMod ?? initial.size;
		target.custom = config.custom ?? initial.custom;
		return target;
	}

	/* ACTOR SCHEMAS */
	static schemaAbilities(type = "character") {
		let getSchema = () => {
			return new fields$c.SchemaField({
				value: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					min: -5,
					label: "T20.AbilityValue",
					hint: "T20.AbilityValueHint"
				}),
				base: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.AbilityBaseValue",
					hint: "T20.AbilityBaseValueHint"
				}),
				racial: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.AbilityRacialValue",
					hint: "T20.AbilityRacialValueHint"
				}),
				bonus: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.AbilityBonusValue",
					hint: "T20.AbilityBonusValueHint"
				})
			});
		};

		let schema = {};
		Object.keys(T20.atributos).forEach((abl) => (schema[abl] = getSchema()));
		return new fields$c.SchemaField(schema);
	}

	static schemaDefense(type = "character") {
		let schema = {
			atributo: new fields$c.StringField({
				required: true,
				blank: false,
				choices: T20.atributos,
				initial: "des",
				label: "T20.DefenseAbilityBonus",
				hint: "T20.DefenseAbilityBonusHint"
			}),
			pda: new PenaltyField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.DefenseArmorPenalty",
				hint: "T20.DefenseArmorPenaltyHint"
			}),
			value: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 10,
				label: "T20.DefenseValue",
				hint: "T20.DefenseValueHint"
			}),
			base: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 10,
				label: "T20.DefenseBaseValue",
				hint: "T20.DefenseBaseValueHint"
			}),
			outros: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.DefenseOtherValue",
				hint: "T20.DefenseOtherValueHint"
			}),
			condi: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.DefenseStatusEffectsValue",
				hint: "T20.DefenseStatusEffectsValueHint"
			}),
			bonus: new fields$c.ArrayField(new fields$c.StringField(), {
				label: "T20.DefenseEffectValues",
				hint: "T20.DefenseEffectValuesHint"
			})
		};
		if (type === "npc") ; else if (type === "simple") {
			delete schema.atributo;
			delete schema.pda;
			delete schema.base;
			delete schema.outros;
			delete schema.condi;
		}
		return new fields$c.SchemaField(schema);
	}

	static schemaEncumbrance(type = "character") {
		return new fields$c.SchemaField({
			value: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.EncumbranceValue",
				hint: "T20.EncumbranceValueHint"
			}),
			atributo: new fields$c.StringField({
				required: true,
				nullable: false,
				blank: false,
				choices: T20.atributos,
				initial: "for"
			}),
			base: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 10,
				min: 0,
				label: "T20.EncumbranceBase",
				hint: "T20.EncumbranceBaseHint"
			}),
			bonus: new fields$c.ArrayField(new fields$c.StringField(), {
				label: "T20.EncumbranceEffectsValues",
				hint: "T20.EncumbranceEffectsValuesHint"
			}),
			limit: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.EncumbranceLimit",
				hint: "T20.EncumbranceLimitHint"
			}),
			max: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.EncumbranceMax",
				hint: "T20.EncumbranceMaxHint"
			}),
			pct: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.EncumbrancePercentage",
				hint: "T20.EncumbrancePercentageHint"
			}),
			encumbered: new fields$c.BooleanField({ label: "T20.EncumbranceStatus", hint: "T20.EncumbranceStatusHint" })
		});
	}

	static schemaLevel(type = "character") {
		let schema = {
			value: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				max: 20,
				label: "T20.LevelValue",
				hint: "T20.LevelValueHint"
			}),
			xp: new fields$c.SchemaField({
				value: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					integer: true,
					label: "T20.ExperienceValue",
					hint: "T20.ExperienceValueHint"
				}),
				pct: new fields$c.NumberField({
					initial: 0,
					integer: true,
					max: 100,
					label: "T20.ExperiencePercentege",
					hint: "T20.ExperiencePercentegeHint"
				}),
				proximo: new fields$c.NumberField({
					initial: 0,
					integer: true,
					label: "T20.ExperienceToNextLevel",
					hint: "T20.ExperienceToNextLevelHint"
				})
			})
		};
		if (type === "npc" || type === "bases") {
			delete schema.pct;
			delete schema.proximo;
		}
		return new fields$c.SchemaField(schema);
	}

	static schemaSenses(type = "character") {
		return new fields$c.SchemaField({
			value: new fields$c.SetField(new fields$c.StringField(), {
				label: "T20.SensesList",
				hint: "T20.SensesListHint"
			}),
			custom: new fields$c.StringField({
				label: "T20.SensesCustom",
				hint: "T20.SensesCustomHint"
			})
		});
	}

	// label: "T20.Value", hint: "T20.Hint"
	static schemaResources(type = "character") {
		return new fields$c.SchemaField({
			value: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				step: 1,
				integer: true,
				label: "T20.ResourceValue",
				hint: "T20.ResourceValueHint"
			}),
			temp: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				step: 1,
				integer: true,
				label: "T20.ResourceTemporaryValue",
				hint: "T20.ResourceTemporaryHint"
			}),
			min: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				integer: true,
				label: "T20.ResourceMinValue",
				hint: "T20.ResourceMinValueHint"
			}),
			max: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				integer: true,
				label: "T20.ResourceMaxValue",
				hint: "T20.ResourceMaxValueHint"
			})
		});
	}

	static schemaAttributes(type = "character") {
		const _fields = tormenta20.data.fields;
		let schema = {
			carga: this.schemaEncumbrance(),
			cd: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 10,
				label: "T20.AttributeDCValue",
				hint: "T20.AttributeDCValueHint"
			}),
			conjuracao: new fields$c.StringField({
				blank: true,
				choices: T20.atributos,
				initial: "int",
				label: "T20.AttributeSpellcastingAbl",
				hint: "T20.AttributeSpellcastingAblHint"
			}),
			defesa: this.schemaDefense(),
			// movement: this.schemaMovement(),
			movement: new fields$c.EmbeddedDataField(_fields.MovementData),
			nivel: this.schemaLevel(type),
			pv: this.schemaResources(),
			pm: this.schemaResources(),
			sentidos: this.schemaSenses(),
			treino: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				label: "T20.AttributeTrainingValue",
				hint: "T20.AttributeTrainingValueHint"
			})
		};
		if (type === "character") {
			for (const key of ["pv", "pm"]) {
				schema[key].fields.atributos = new fields$c.SchemaField(
					Object.fromEntries(
						Object.keys(T20.atributos)
							.filter((atr) => key !== "pv" || atr !== "con")
							.map((abl) => [abl, new fields$c.BooleanField()])
					)
				);
				schema[key].fields.bonus = new fields$c.SchemaField({
					nivel: new fields$c.ArrayField(new fields$c.StringField(), {
						min: 1,
						initial: ["0"]
					}),
					nivelPar: new fields$c.ArrayField(new fields$c.StringField(), {
						min: 1,
						initial: ["0"]
					}),
					nivelImpar: new fields$c.ArrayField(new fields$c.StringField(), {
						min: 1,
						initial: ["0"]
					}),
					total: new fields$c.ArrayField(new fields$c.StringField(), {
						min: 1,
						initial: ["0"]
					})
				});
			}
		} else if (type === "npc") {
			schema.nd = new fields$c.StringField({
				required: true,
				nullable: false,
				initial: "1",
				label: "T20.FoeCRValue",
				hint: "T20.FoeCRValueHint"
			});
		} else if (type === "simple") {
			delete schema.cd;
			delete schema.conjuracao;
			delete schema.nivel;
			delete schema.treino;
		}

		return new fields$c.SchemaField(schema);
	}

	static schemaCurrency(type = "character") {
		return new fields$c.SchemaField({
			tc: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.CurrencyCopperValue",
				hint: "T20.CurrencyCopperValueHint"
			}),
			tl: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.CurrencyPlatinumValue",
				hint: "T20.CurrencyPlatinumValueHint"
			}),
			to: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.CurrencyGoldValue",
				hint: "T20.CurrencyGoldValueHint"
			}),
			tp: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.CurrencySilverValue",
				hint: "T20.CurrencySilverValueHint"
			})
		});
	}

	static schemaDetails(type = "character") {
		let schema = {
			origem: new fields$c.StringField({
				initial: "",
				label: "T20.DetailsBackground",
				hint: "T20.DetailsBackgroundHint"
			}),
			info: new fields$c.StringField({
				initial: "",
				label: "T20.DetailsNotes",
				hint: "T20.DetailsNotesHint"
			}),
			divindade: new fields$c.StringField({
				initial: "",
				label: "T20.DetailsDeity",
				hint: "T20.DetailsDeityHint"
			}),
			raca: new fields$c.StringField({
				initial: "",
				label: "T20.DetailsRace",
				hint: "T20.DetailsRaceHint"
			}),
			tipo: new fields$c.StringField({
				required: true,
				choices: T20.creatureTypes,
				initial: "hum",
				label: "T20.DetailsCreatureType",
				hint: "T20.DetailsCreatureTypeHint"
			}),
			biography: new fields$c.SchemaField({
				value: new fields$c.HTMLField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.DetailsBiography",
					hint: "T20.DetailsBiographyHint"
				}),
				public: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsBiographyPublic",
					hint: "T20.DetailsBiographyPublicHint"
				})
			}),
			diario: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			}),
			diario1: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			}),
			diario2: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			}),
			diario3: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			}),
			diario4: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			}),
			diario5: new fields$c.SchemaField({
				name: new fields$c.StringField({
					initial: "",
					label: "T20.DetailsJournalName",
					hint: "T20.DetailsJournalNameHint"
				}),
				value: new fields$c.HTMLField({
					initial: "",
					label: "T20.DetailsJournal",
					hint: "T20.DetailsJournalHint"
				})
			})
		};

		if (type === "npc") {
			schema.equipamento = new fields$c.StringField({
				initial: "",
				label: "T20.FoeEquipment",
				hint: "T20.FoeEquipmentHint"
			});
			schema.resistencias = new fields$c.StringField({
				initial: "",
				label: "T20.FoeResistances",
				hint: "T20.FoeResistancesHint"
			});
			schema.movimento = new fields$c.StringField({
				initial: "",
				label: "T20.FoeMovement",
				hint: "T20.FoeMovementHint"
			});
			schema.ataquescac = new fields$c.StringField({
				initial: "",
				label: "T20.FoeMelee",
				hint: "T20.FoeMeleeHint"
			});
			schema.ataquesad = new fields$c.StringField({
				initial: "",
				label: "T20.FoeRanged",
				hint: "T20.FoeRangedHint"
			});
			schema.tesouro = new fields$c.StringField({
				initial: "",
				label: "T20.FoeTreasure",
				hint: "T20.FoeTreasureHint"
			});
			schema.role = new fields$c.StringField({
				initial: "",
				label: "T20.FoeRole",
				hint: "T20.FoeRoleHint"
			});
			delete schema.info;
			delete schema.diario;
			delete schema.diario1;
			delete schema.diario2;
			delete schema.diario3;
			delete schema.diario4;
			delete schema.diario5;
		} else if (type === "simple") {
			delete schema.origem;
			delete schema.info;
			delete schema.divindade;
			delete schema.raca;
			delete schema.tipo;
			delete schema.diario;
			delete schema.diario1;
			delete schema.diario2;
			delete schema.diario3;
			delete schema.diario4;
			delete schema.diario5;
		}

		return new fields$c.SchemaField(schema);
	}

	static schemaModifiers(type = "character") {
		return new fields$c.SchemaField({
			custoPM: new fields$c.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ModsMPExtraValue",
				hint: "T20.ModsMPExtraValueHint"
			}),
			atributos: new fields$c.SchemaField({
				for: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityStrEffectsValues",
					hint: "T20.ModsAbilityStrEffectsValuesHint"
				}),
				des: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityDexEffectsValues",
					hint: "T20.ModsAbilityDexEffectsValuesHint"
				}),
				con: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityConEffectsValues",
					hint: "T20.ModsAbilityConEffectsValuesHint"
				}),
				int: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityIntEffectsValues",
					hint: "T20.ModsAbilityIntEffectsValuesHint"
				}),
				sab: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityWisEffectsValues",
					hint: "T20.ModsAbilityWisEffectsValuesHint"
				}),
				car: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityChaEffectsValues",
					hint: "T20.ModsAbilityChaEffectsValuesHint"
				}),
				fisicos: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityPhysicalEffectsValues",
					hint: "T20.ModsAbilityPhysicalEffectsValuesHint"
				}),
				mentais: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityMentalEffectsValues",
					hint: "T20.ModsAbilityMentalEffectsValuesHint"
				}),
				geral: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsAbilityGeneralEffectsValues",
					hint: "T20.ModsAbilityGeneralEffectsValuesHint"
				})
			}),
			ataque: new fields$c.SchemaField({
				geral: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageRangedEffectsValues",
					hint: "T20.ModsDamageRangedEffectsValuesHint"
				}),
				cac: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageRangedEffectsValues",
					hint: "T20.ModsDamageRangedEffectsValuesHint"
				}),
				ad: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageRangedEffectsValues",
					hint: "T20.ModsDamageRangedEffectsValuesHint"
				})
			}),
			cura: new fields$c.SchemaField({
				geral: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageGeneralEffectsValues",
					hint: "T20.ModsDamageGeneralEffectsValuesHint"
				}),
				mag: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageSpellEffectsValues",
					hint: "T20.ModsDamageSpellEffectsValuesHint"
				})
			}),
			dano: new fields$c.SchemaField({
				ad: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageRangedEffectsValues",
					hint: "T20.ModsDamageRangedEffectsValuesHint"
				}),
				alq: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageAlchemyEffectsValues",
					hint: "T20.ModsDamageAlchemyEffectsValuesHint"
				}),
				cac: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageMeleeEffectsValues",
					hint: "T20.ModsDamageMeleeEffectsValuesHint"
				}),
				geral: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageGeneralEffectsValues",
					hint: "T20.ModsDamageGeneralEffectsValuesHint"
				}),
				mag: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsDamageSpellEffectsValues",
					hint: "T20.ModsDamageSpellEffectsValuesHint"
				})
			}),
			pericias: new fields$c.SchemaField({
				geral: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsSkillsGeneralEffectsValues",
					hint: "T20.ModsSkillsGeneralEffectsValuesHint"
				}),
				resistencia: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsSkillsSavesEffectsValues",
					hint: "T20.ModsSkillsSavesEffectsValuesHint"
				}),
				semataque: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsSkillsNotAttackEffectsValues",
					hint: "T20.ModsSkillsNotAttackEffectsValuesHint"
				}),
				ataque: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.ModsSkillsAttackEffectsValues",
					hint: "T20.ModsSkillsAttackEffectsValuesHint"
				}),
				atr: new fields$c.SchemaField({
					for: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsStrEffectsValues",
						hint: "T20.ModsSkillsStrEffectsValuesHint"
					}),
					des: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsDexEffectsValues",
						hint: "T20.ModsSkillsDexEffectsValuesHint"
					}),
					con: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsConEffectsValues",
						hint: "T20.ModsSkillsConEffectsValuesHint"
					}),
					int: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsIntEffectsValues",
						hint: "T20.ModsSkillsIntEffectsValuesHint"
					}),
					sab: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsWisEffectsValues",
						hint: "T20.ModsSkillsWisEffectsValuesHint"
					}),
					car: new fields$c.ArrayField(new fields$c.StringField(), {
						label: "T20.ModsSkillsChaEffectsValues",
						hint: "T20.ModsSkillsChaEffectsValuesHint"
					})
				})
			})
		});
	}

	static schemaResistances(type = "character") {
		let getSchema = () => {
			return new fields$c.SchemaField({
				value: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					min: 0,
					label: "T20.DamageReductionValue",
					hint: "T20.DamageReductionValueHint"
				}),
				base: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					min: 0,
					label: "T20.DamageReductionBaseValue",
					hint: "T20.DamageReductionBaseValueHint"
				}),
				bonus: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.DamageReductionEffectValues",
					hint: "T20.DamageReductionEffectValuesHint"
				}),
				excecao: new fields$c.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					min: 0,
					label: "T20.DamageReductionException",
					hint: "T20.DamageReductionExceptionHint"
				}),
				imunidade: new fields$c.BooleanField({ label: "T20.DamageReductionImunity", hint: "T20.DamageReductionImunityHint" }),
				vulnerabilidade: new fields$c.BooleanField({ label: "T20.DamageReductionVulnerability", hint: "T20.DamageReductionVulnerabilityHint" }),
				danoPorDado: new fields$c.BooleanField()
			});
		};

		let schema = {};
		Object.keys(T20.damageTypes).forEach((dmg) => (schema[dmg] = getSchema()));
		return new fields$c.SchemaField(schema);
	}

	static schemaTraits(type = "character") {
		let schema = {
			ic: new fields$c.SchemaField({
				value: new fields$c.SetField(new fields$c.StringField(), {
					label: "T20.TraitsConditionsImunitiesList",
					hint: "T20.TraitsConditionsImunitiesListHint"
				}),
				custom: new fields$c.StringField({
					label: "T20.TraitsConditionsImunitiesCustom",
					hint: "T20.TraitsConditionsImunitiesCustomHint"
				})
			}),
			idiomas: new fields$c.SchemaField({
				value: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.TraitsLangaguesProficienciesList",
					hint: "T20.TraitsLangaguesProficienciesListHint"
				}),
				custom: new fields$c.StringField({
					label: "T20.TraitsLangaguesProficienciesCustom",
					hint: "T20.TraitsLangaguesProficienciesCustomHint"
				})
			}),
			profArmaduras: new fields$c.SchemaField({
				value: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.TraitsArmorProficienciesList",
					hint: "T20.TraitsArmorProficienciesListHint"
				}),
				custom: new fields$c.StringField({
					label: "T20.TraitsArmorProficienciesCustom",
					hint: "T20.TraitsArmorProficienciesCustomHint"
				})
			}),
			profArmas: new fields$c.SchemaField({
				value: new fields$c.ArrayField(new fields$c.StringField(), {
					label: "T20.TraitsWeaponProficienciesList",
					hint: "T20.TraitsWeaponProficienciesListHint"
				}),
				custom: new fields$c.StringField({
					label: "T20.TraitsWeaponProficienciesCustom",
					hint: "T20.TraitsWeaponProficienciesCustomHint"
				})
			}),
			resistencias: this.schemaResistances(),
			tamanho: new fields$c.StringField({
				required: true,
				nullable: false,
				choices: T20.actorSizes,
				initial: "med",
				label: "T20.TraitActorSize",
				hint: "T20.TraitActorSizeHint"
			})
		};
		if (type !== "character") {
			delete schema.idiomas;
			delete schema.profArmaduras;
			delete schema.profArmas;
		}

		return new fields$c.SchemaField(schema);
	}

	/** Calcula os atributos sem bônus, para cálculo de PV/PM */
	prepareBaseAtributos() {
		this.parent.flags.tormenta20 ?? {};
		for (const [key, atr] of Object.entries(this.atributos)) {
			atr.value = atr.base + atr.racial;
		}
	}

	prepareAtributos({ rollData = {} } = {}) {
		this.parent.flags.tormenta20 ?? {};
		for (const [key, atr] of Object.entries(this.atributos)) {
			atr.value += atr.bonus;
			rollData[key] = atr.value;
		}
	}

	prepareSkills({ rollData = {} } = {}) {
		for (const [id, skillData] of Object.entries(this.pericias)) {
			this.prepareSkill(id, { skillData, rollData });
		}
	}

	prepareSkill(skillId, { skillData, rollData, atributo } = {}) {
		if (skillId === "ofic") return;

		const parts = ["@meionivel"];

		skillData ??= foundry.utils.deepClone(this.pericias[skillId]);
		rollData ??= this.parent.getRollData();
		atributo ??= skillData.atributo;
		skillData.atributo = atributo;

		skillData.label ||= CONFIG.T20.pericias[skillId]?.label || skillId;

		parts.push(`@${skillData.atributo}`);
		if (skillData.treinado) parts.push("@treino");
		if (skillData.bonus.length) parts.push(...skillData.bonus);
		if (skillData.pda && rollData.pda) parts.push("@pda");
		if (skillData.size && rollData.tamanho) parts.push("@tamanho");
		if (skillData.outros) parts.push(skillData.outros);
		if (skillData.condi) parts.push(skillData.condi);

		// GET GLOBAL ACTOR MODIFIERS
		const bonuses = foundry.utils.getProperty(this, "modificadores.pericias") || {};
		if (bonuses.geral?.filter(Boolean).length) parts.push("@pericia");
		if (Object.keys(CONFIG.T20.resistencias).includes(skillId) && bonuses.resistencia?.filter(Boolean).length) {
			parts.push("@resistencia");
		}
		else if (!["luta", "pont"].includes(skillId) && bonuses.semataque?.filter(Boolean).length) parts.push("@semataque");
		else if (["luta", "pont"].includes(skillId) && bonuses.ataque?.filter(Boolean).length) parts.push("@ataque");
		if (bonuses.atr && bonuses.atr[skillData.atributo]?.filter(Boolean).length) {
			parts.push(...bonuses.atr[skillData.atributo]);
		}

		const result = simplifyRollFormula(parts.join("+"), rollData, {
			}).trim();
		skillData.value = parseInt(result) || 0;

		return skillData;
	}
}

class AttributesFields {
	static prepareDefense(rollData) {
		const actor = this.parent;
		const defesa = this.attributes.defesa;
		const parts = [defesa.base];

		let pda = 0;

		if (this.parent.type === "character" && game.settings.get("tormenta20", "progressiveDefense")) {
			parts.push("@meionivel");
		}

		const equipmentSlots = game.settings.get("tormenta20", "equipmentSlots");
		const items = actor.itemTypes.equipamento.filter(
			(i) => (equipmentSlots ? i.system.equipado2.slot : i.system.equipado)
		);

		const armor = items.find((i) => ["leve", "pesada"].includes(i.system.tipo));
		const shield = items.find((i) => i.type === "equipamento" && i.system.tipo === "escudo");
		const accessories = items.filter((i) => !["escudo", "leve", "pesada"].includes(i.system.tipo));
		const accDef = accessories.map((m) => m.system.armadura.value).reduce((sum, v) => sum + v, 0);
		const accPda = accessories.map((m) => m.system.armadura.penalidade).reduce((sum, v) => sum + v, 0);
		const maxAtr = armor ? armor.system.armadura.maxAtr : 0;
		const atributo = Math.clamp(this.atributos[defesa.atributo].value, 0, maxAtr);

		if (accDef) parts.push(accDef);
		pda += armor ? armor.system.armadura.penalidade : 0;
		pda += shield ? shield.system.armadura.penalidade : 0;
		pda += accPda ?? 0;
		parts.push(...defesa.bonus);
		if (armor?.system.tipo !== "pesada") parts.push(`@${defesa.atributo}`);
		else if (atributo) parts.push(atributo);
		if (armor) parts.push(armor.system.armadura.value);
		if (shield) parts.push(shield.system.armadura.value);
		if (defesa.outros) parts.push(defesa.outros);
		if (defesa.condi) parts.push(defesa.condi);

		const result = simplifyRollFormula(parts.join("+"), rollData, {
			}).trim();

		defesa.value = parseInt(result);
		defesa.pda += pda;
		rollData.pda = defesa.pda;
	}

	static prepareMovement(rollData) {
		const equipmentSlots = game.settings.get("tormenta20", "equipmentSlots");
		const items = this.parent.itemTypes.equipamento.filter(
			(i) => (equipmentSlots ? i.system.equipado2.slot : i.system.equipado)
		);
		const armor = items.find((i) => i.system.tipo === "pesada");
		const encumbered = this.attributes?.carga?.encumbered ?? false;
		const moveData = this.attributes.movement;
		const ignoreArmor = moveData.tags.has('ignora-armadura');
		const ignoreWeight = moveData.tags.has('ignora-carga');
		const isSlowed = this.document?.statuses.has('lento');
		const isProne = this.document?.statuses.has('caido');

		for (const [key, move] of Object.entries(this.attributes.movement)) {
			if (!T20.movementTypes[key]) continue;
			if (move.base > 0) {
				const parts = [move.base, ...move.bonus];
				if (armor && !ignoreArmor) parts.push(-3);
				if (encumbered && !ignoreWeight) parts.push(-3);
				const total = simplifyRollFormula(parts.join("+"), rollData, { }).trim();
				move.value = Number(total);
				if (isSlowed) {
					move.value = Math.max(1.5, (move.value / 2).toNearest(1.5, 'floor'));
				}
				if (isProne) move.value = Math.min(move.value, 1.5);
			} else {
				move.value = 0;
			}
		}

	}

	static prepareEncumbrance(rollData) {
		if (!game.settings.get("tormenta20", "carryWeight")) return;
		const inventarioOrganizado = this.parent.getFlag("tormenta20", "inventarioOrganizado");

		const weight = this.attributes.carga;
		// { value: 0, max: 20, pct: 0, encumbered: false };
		const physicalItems = ["arma", "equipamento", "consumivel", "tesouro"];
		// Get the total weight from items
		weight.value = this.parent.items.reduce((weight, i) => {
			if (!physicalItems.includes(i.type) || !i.system.carregado || i.system.container) return weight;
			const q = i.system.qtd || 0;
			const w = (inventarioOrganizado && i.system.espacos === 0.5 ? 0.25 : i.system.espacos) || 0;
			// const w = i.system.espacos || 0;
			return weight + q * w;
		}, 0);
		// Get the total weight from coins (1 === 1000)
		if (game.settings.get("tormenta20", "currencyWeight")) {
			const coins = Object.values(this.dinheiro).reduce((a, b) => a + b);
			weight.value = weight.value + Math.floor(coins / 1000);
		}
		// weight.value = Math.floor( weight.value );
		if (["vehicle", "simple"].includes(this.parent.type)) {
			weight.encumbered = weight > weight.max / 2;
			weight.pct = Math.clamp((weight.value * 100) / weight.max, 0, 100);
			return;
		}
		// Compute Encumbrance percentage
		const atr = this.atributos[weight.atributo].value;
		const parts = [weight.base, ...weight.bonus];
		const base = simplifyRollFormula(parts.join("+"), rollData, {
			}).trim();
		const limit = (Number(base) || 10) + (atr > 0 ? atr * 2 : atr);
		weight.limit = limit;
		weight.max = limit * 2;
		weight.encumbered = weight.value > limit;
		weight.pct = Math.clamp((weight.value * 100) / weight.max, 0, 100);
	}

	static prepareDamageResistances(rollData) {
		for (const [key, res] of Object.entries(this.tracos.resistencias)) {
			let parts = [res.base, ...res.bonus].filter(Boolean);
			const result = simplifyRollFormula(parts.join("+"), rollData, {
				}).trim();
			this.tracos.resistencias[key].value = Number(result) === Number.prototype ? Number(result) : result;
		}
	}

	static preparePVPM(rollData) {
		let lvlc = this.parent.getFlag("tormenta20", "lvlconfig");
		if (lvlc?.manual) return;

		const nivel = Number(this.attributes.nivel.value);
		if (!nivel) return;
		const { substituirCon = "con" } = this.parent.flags.tormenta20 ?? {};
		for (const type of ["pv", "pm"]) {
			let soma = 0;
			const { atributos, bonus } = this.attributes[type];
			const bonusPorNivel = {
				nivel: bonus.nivel.reduce((sum, value) => sum + Number(simplifyRollFormula(value, rollData)), 0),
				nivelPar: bonus.nivelPar.reduce((sum, value) => sum + Number(simplifyRollFormula(value, rollData)), 0),
				nivelImpar: bonus.nivelImpar.reduce((sum, value) => sum + Number(simplifyRollFormula(value, rollData)), 0)
			};
			let levelSum = 0;
			for (const classe of this.parent.itemTypes.classe) {
				const c = classe.system;
				for (let i = 1; i < c.niveis + 1; i++) {
					levelSum++;
					let sum = 0;
					if (type === "pv" && c.inicial && i === 1) sum += 4 * Number(c[`${type}PorNivel`]);
					else sum += Number(c[`${type}PorNivel`]);
					sum += bonusPorNivel.nivel;
					sum += levelSum % 2 === 0 ? bonusPorNivel.nivelPar : bonusPorNivel.nivelImpar;
					if (type === "pv") {
						sum += this.atributos[substituirCon].value;
						sum = Math.max(sum, 1);
					}
					soma += sum;
				}
			}
			Object.entries(atributos)
				.filter(([atr, value]) => value)
				.forEach(([atr, value]) => {
					soma += this.atributos[atr].value;
				});
			bonus.total.forEach((value) => (soma += Number(simplifyRollFormula(value, rollData))));
			if (type === "pv") this.attributes[type].min = -Math.floor(soma / 2);
			this.attributes[type].max = Math.floor(soma);
		}
	}
}

class CharacterData extends CreatureData {
	static actorType = "character";

	/** @override */
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			...super.defineSchema(),
			equipamentos: new fields.SchemaField({
				limiteEmpunhado: new fields.NumberField({
					required: true,
					nullable: false,
					initial: 2,
					min: 1
				}),
				limiteVestido: new fields.NumberField({
					required: true,
					nullable: false,
					initial: 4,
					min: 1
				})
			})
		};
	}

	/** @inheritdoc */
	static migrateData(data) {
		// console.warn('migrateData', data);
		if (data.detalhes?.tipo && !Object.keys(T20.creatureTypes).includes(data.detalhes.tipo)) {
			let cType = Object.keys(T20.creatureTypes).find((c) => data.detalhes.tipo.match(c));
			data.detalhes.tipo = cType ?? "hum";
		}
		return super.migrateData(data);
	}

	prepareBaseData() {
		const nivel = this.parent.nivel;
		this.attributes.nivel.value = nivel;
		this.attributes.treino = nivel > 14 ? 6 : nivel > 6 ? 4 : 2;
		this.attributes.cd = 10 + Math.floor((this.attributes.nivel?.value || 0) / 2);

		// Experience required for next level
		const xp = this.attributes.nivel.xp;
		xp.proximo = this.parent.getLevelExp(nivel || 1);
		const anterior = this.parent.getLevelExp(nivel - 1 || 0);
		const necessario = xp.proximo - anterior;
		const pct = Math.round(((xp.value - anterior) * 100) / necessario);
		xp.pct = Math.clamp(pct, 0, 100);

		this.prepareBaseAtributos();
	}

	prepareDerivedData() {
		// Pontos são calculados primeiro pois ignoram bônus de Atributo
		// Defesa é calculada antes de Perícias para calcular a Penalidade de Armadura
		const rollData = this.parent.getRollData();
		AttributesFields.preparePVPM.call(this, rollData);
		this.prepareAtributos({ rollData });
		AttributesFields.prepareDefense.call(this, rollData);
		this.prepareSkills({ rollData });

		// Encumbrance affects movement
		AttributesFields.prepareEncumbrance.call(this, rollData);
		AttributesFields.prepareMovement.call(this, rollData);
		AttributesFields.prepareDamageResistances.call(this, rollData);
	}
}

class HazardData extends Tormenta20TypeData {
	static actorType = "hazard";

	/** @inheritdoc */
	static defineSchema() {
		const fields = foundry.data.fields;
		return {
			attributes: new fields.SchemaField({
				nd: new fields.StringField({
					required: true,
					nullable: false,
					initial: "1",
					label: "T20.FoeCRValue",
					hint: "T20.FoeCRValueHint"
				})
			}),

			detalhes: new fields.SchemaField({
				actions: new fields.HTMLField({
					required: false,
					nullable: true,
					initial: ""
				}),

				effects: new fields.HTMLField({
					required: false,
					nullable: true,
					initial: "",
					label: "T20.DetailsEffects",
					hint: "T20.DetailsEffectsHint"
				}),

				goal: new fields.HTMLField({
					required: false,
					nullable: true,
					initial: "",
					label: "T20.DetailsGoal",
					hint: "T20.DetailsGoalHint"
				})
			})
		};
	}
}

class MenaceData extends CreatureData {
	static actorType = "npc";

	/** @inheritdoc */
	static migrateData(data) {
		if (data.detalhes?.tipo && !Object.keys(T20.creatureTypes).includes(data.detalhes.tipo)) {
			let cType = Object.keys(T20.creatureTypes).find((c) => data.detalhes.tipo.match(c));
			data.detalhes.tipo = cType ?? "hum";
		}

		if (data.detalhes?.nd && data.detalhes.nd > data.attributes.nd) {
			data.attributes.nd = data.detalhes.nd;
		}

		if (data.attributes?.nivel && (isNaN(data.attributes?.nivel.value) || !isFinite(data.attributes?.nivel.value))) {
			data.attributes.nivel.value = 1;
		}
		return super.migrateData(data);
	}

	prepareBaseData() {
		const flags = this.parent.flags;
		let npcFlags = {};
		if (this.parent.getFlag("tormenta20", "showCD") === undefined) npcFlags.showCD = true;

		let nd = this.attributes.nd;
		// const crData = T20.NPCParams(nd);
		if (["S", "S+"].includes(nd)) this.attributes.nivel.value = 20;
		else this.attributes.nivel.value = Number(nd) || 1;
		const nivel = this.attributes.nivel.value;

		this.attributes.treino = nivel > 14 ? 6 : nivel > 6 ? 4 : 2;
		this.attributes.meionivel = Math.floor(this.attributes.nivel.value / 2);
		// Experience Reward
		this.attributes.defesa.condi = 0;
		this.attributes.nivel.xp.value = Math.floor(parseFraction(nivel) * 1000);

		if (this.biography?.value) {
			this.detalhes.biography.value += this.biography.value;
		}

		let baseFlags = { tormenta20: npcFlags };
		if (!foundry.utils.isEmpty(npcFlags)) foundry.utils.mergeObject(flags, baseFlags);

		this.prepareBaseAtributos();
	}

	prepareDerivedData() {
		const rollData = this.parent.getRollData();
		this.prepareAtributos({ rollData });
		AttributesFields.prepareDefense.call(this, rollData);
		this.prepareSkills({ rollData });

		AttributesFields.prepareEncumbrance.call(this, rollData);
		AttributesFields.prepareMovement.call(this);
		AttributesFields.prepareDamageResistances.call(this, rollData);
		this.attributes.pv.min = Math.floor(this.attributes.pv.max / 2) * -1;
	}
}

class SimpleData extends CreatureData {
	static actorType = "simple";

	prepareBaseData() {
		this.prepareBaseAtributos();
	}

	prepareDerivedData() {
		const rollData = this.parent.getRollData();
		this.prepareAtributos({ rollData });
		AttributesFields.prepareDefense.call(this, rollData);
		this.prepareSkills({ rollData });

		AttributesFields.prepareEncumbrance.call(this, rollData);
		AttributesFields.prepareMovement.call(this);
		AttributesFields.prepareDamageResistances.call(this, rollData);
	}
}

const fields$b = foundry.data.fields;

class Tormenta20ItemData extends Tormenta20TypeData {
	/** @inheritDoc */
	static defineSchema() {
		return {
			description: new fields$b.SchemaField({
				value: new fields$b.HTMLField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemDescription",
					hint: "T20.ItemDescriptionHint"
				}),
				unidentified: new fields$b.HTMLField({
					initial: "",
					label: "T20.ItemUnidentifiedDescription",
					hint: "T20.ItemUnidentifiedDescriptionHint"
				})
			}),
			source: new fields$b.StringField({
				initial: "",
				label: "T20.ItemSourceReference",
				hint: "T20.ItemSourceReferenceHint"
			}),
			origin: new fields$b.StringField({
				initial: "",
				label: "T20.ItemOrigin",
				hint: "T20.ItemOriginHint"
			}),
			tags: new fields$b.ArrayField(new fields$b.StringField(), {
				label: "T20.ItemTagsList",
				hint: "T20.ItemTagsListHint"
			}),
			rolltags: new fields$b.ArrayField(new fields$b.StringField(), {
				label: "T20.ItemTagsList",
				hint: "T20.ItemTagsListHint"
			}),
			automationtags: new fields$b.ArrayField(new fields$b.StringField(), {
				label: "T20.ItemAutomationTags",
				hint: "T20.ItemAutomationTagsHint"
			}),
			chatFlavor: new fields$b.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemChatFlavor",
				hint: "T20.ItemChatFlavorHint"
			}),
			chatGif: new fields$b.StringField({
				initial: "",
				label: "T20.ItemChatGif",
				hint: "T20.ItemChatGifHint"
			})
		};
	}

	/* ITEM SCHEMAS */
	static schemaPhysicalItem(type = "arma") {
		let schema = {
			carregado: new fields$b.BooleanField({
				required: true,
				nullable: false,
				initial: true,
				label: "T20.ItemCarrying",
				hint: "T20.ItemCarryingHint"
			}),
			espacos: new fields$b.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemSlot",
				hint: "T20.ItemSlotsHint"
			}),
			peso: new fields$b.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemWeight",
				hint: "T20.ItemWeightHint"
			}),
			qtd: new fields$b.NumberField({
				required: true,
				nullable: false,
				initial: 1,
				min: 0,
				label: "T20.ItemQuantity",
				hint: "T20.ItemQuantityHint"
			}),
			preco: new fields$b.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemPrice",
				hint: "T20.ItemPriceHint"
			}),
			pv: new fields$b.SchemaField({
				value: new fields$b.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					step: 1,
					min: 0,
					integer: true,
					label: "T20.ItemHitPoints",
					hint: "T20.ItemHitPointsHint"
				}),
				max: new fields$b.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					integer: true,
					label: "T20.ItemHitPointsMax",
					hint: "T20.ItemHitPointsMaxHint"
				})
			}),
			rd: new fields$b.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemDamageReduction",
				hint: "T20.ItemDamageReductionHint"
			})
		};
		return schema;
	}

	static schemaActivation(type = "arma") {
		let schema = {
			// ativacao
			ativacao: new fields$b.SchemaField({
				custo: new fields$b.NumberField({
					required: true,
					initial: 0,
					label: "T20.ItemActivationCost",
					hint: "T20.ItemActivationCostHint"
				}),
				condicao: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemActivationCondition",
					hint: "T20.ItemActivationConditionHint"
				}),
				execucao: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "passive",
					label: "T20.ItemActivationAction",
					hint: "T20.ItemActivationActionHint"
				}),
				qtd: new fields$b.StringField({
					initial: "",
					label: "T20.ItemActivationActionQuantity",
					hint: "T20.ItemActivationActionQuantityHint"
				}),
				special: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemActivationSpecial",
					hint: "T20.ItemActivationSpecialHint"
				})
			}),
			// consume
			consume: new fields$b.SchemaField({
				amount: new fields$b.NumberField({
					initial: 0,
					label: "T20.ItemConsuptionQuantity",
					hint: "T20.ItemConsuptionQuantityHint"
				}),
				mpMultiplier: new fields$b.BooleanField({
					label: "T20.ItemConsuptionMultiplier",
					hint: "T20.ItemConsuptionMultiplierHint"
				}),
				target: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemConsuptionTarget",
					hint: "T20.ItemConsuptionTargetHint"
				}),
				type: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemConsuptionType",
					hint: "T20.ItemConsuptionTypeHint"
				})
			}),
			// duracao
			duracao: new fields$b.SchemaField({
				units: new fields$b.StringField({
					required: true,
					nullable: false,
					blank: false,
					initial: "inst",
					choices: T20.timePeriods,
					label: "T20.ItemDurationUnit",
					hint: "T20.ItemDurationUnitHint"
				}),
				value: new fields$b.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemDurationValue",
					hint: "T20.ItemDurationValueHint"
				}),
				special: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemDurationSpecial",
					hint: "T20.ItemDurationSpecialHint"
				})
			}),
			// range
			range: new fields$b.SchemaField({
				units: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemRangeUnits",
					hint: "T20.ItemRangeUnitsHint"
				}),
				value: new fields$b.NumberField({
					initial: 0,
					label: "T20.ItemRangeValue",
					hint: "T20.ItemRangeValueHint"
				})
			}),

			alcance: new fields$b.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemRangeDescription"
			}),
			alvo: new fields$b.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemTargetDescription",
				hint: "T20.ItemTargetDescriptionHint"
			}),
			area: new fields$b.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemAreaOfEffectDescription",
				hint: "T20.ItemAreaOfEffectDescriptionHint"
			}),
			efeito: new fields$b.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemEffectDescription",
				hint: "T20.ItemEffectDescriptionHint"
			})
		};

		if (type === "arma") {
			delete schema.duracao;
			delete schema.range;
			delete schema.alvo;
			delete schema.area;
			delete schema.efeito;
			delete schema.ativacao.condicao;
			delete schema.ativacao.execucao;
			delete schema.ativacao.qtd;
			delete schema.ativacao.special;
		} else if (type === "equipamento") {
			delete schema.duracao;
			delete schema.range;
			delete schema.alvo;
			delete schema.area;
			delete schema.alcance;
			delete schema.efeito;
			delete schema.consume;
			delete schema.ativacao.condicao;
			delete schema.ativacao.execucao;
			delete schema.ativacao.qtd;
			delete schema.ativacao.special;
		} else if (type === "poder") {
			delete schema.consume;
			delete schema.alvo;
			delete schema.ativacao.condicao;
			delete schema.ativacao.execucao;
			delete schema.ativacao.qtd;
			delete schema.ativacao.special;
		}
		return schema;
	}

	static schemaRolls(type) {
		const schema = {};
		if (type === "arma") {
			schema.rolls = new fields$b.ArrayField(new fields$b.EmbeddedDataField(RollData), {
				initial: () => [
					{
						parts: [[], ["luta", ""], [""]], // [[vazio], [perícia, atributo], [bonus]]
						name: "Ataque",
						type: "ataque",
						key: "ataque"
					},
					{
						parts: [["1d6", "dano"], ["padrao"]], // [[dano, tipo], [atributo]]
						adaptavel: "",
						name: "Dano",
						type: "dano",
						key: "dano"
					}
				]
			});
		} else {
			schema.rolls = new fields$b.ArrayField(new fields$b.EmbeddedDataField(RollData));
		}
		return schema;
	}

	static schemaSavingThrow(type = "arma") {
		let schema = {
			resistencia: new fields$b.SchemaField({
				txt: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemSavingThrowDescription",
					hint: "T20.ItemSavingThrowDescriptionHint"
				}),
				pericia: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemSavingThrowSkill",
					hint: "T20.ItemSavingThrowSkillHint"
				}),
				atributo: new fields$b.StringField({
					required: true,
					nullable: false,
					initial: "",
					label: "T20.ItemSavingThrowDCAbility",
					hint: "T20.ItemSavingThrowDCAbilityHint"
				}),
				bonus: new fields$b.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemSavingThrowDCBonus",
					hint: "T20.ItemSavingThrowDCBonusHint"
				})
			})
		};
		return schema;
	}

	static schemaUpgrades(type = "arma") {
		let schema = {
			upgrades: new fields$b.SchemaField({
				melhoria1: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemSuperiorUpgrades",
					hint: "T20.ItemSuperiorUpgradesHint"
				}),
				melhoria2: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemSuperiorUpgrades",
					hint: "T20.ItemSuperiorUpgradesHint"
				}),
				melhoria3: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemSuperiorUpgrades",
					hint: "T20.ItemSuperiorUpgradesHint"
				}),
				melhoria4: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemSuperiorUpgrades",
					hint: "T20.ItemSuperiorUpgradesHint"
				}),
				material: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemSpecialMaterial",
					hint: "T20.ItemSpecialMaterialHint"
				}),
				encanto1: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemEnchantmentUpgrade",
					hint: "T20.ItemEnchantmentUpgradeHint"
				}),
				encanto2: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemEnchantmentUpgrade",
					hint: "T20.ItemEnchantmentUpgradeHint"
				}),
				encanto3: new fields$b.StringField({
					required: true,
					blank: true,
					initial: "",
					label: "T20.ItemEnchantmentUpgrade",
					hint: "T20.ItemEnchantmentUpgradeHint"
				})
			}),
			// melhorias: new fields.ObjectField(),
			// encantos: new fields.ObjectField(),
			enableAutoUpgrades: new fields$b.BooleanField({
				required: false,
				nullable: false,
				initial: true,
				label: "T20.EnhancementsAutomationEnable",
				hint: "T20.EnhancementsAutomationEnableHint"
			})
		};
		return schema;
	}

	static schemaItemGrants(type = "classe") {
		let schema = {};

		if (type === "race") {
			schema.grants = new foundry.data.fields.ArrayField(
				new foundry.data.fields.SchemaField({
					title: new foundry.data.fields.StringField({ initial: "", required: true }),
					desc: new foundry.data.fields.StringField({ initial: "", required: true }),
					type: new foundry.data.fields.StringField({ initial: "multi", choices: ["single", "multi"] }),
					choices: new foundry.data.fields.ArrayField(
						new foundry.data.fields.SchemaField({
							uuid: new foundry.data.fields.DocumentUUIDField({ type: "Item", embedded: false })
						})
					)
				})
			);
			schema.skills = new foundry.data.fields.ArrayField(
				new foundry.data.fields.SchemaField({
					title: new foundry.data.fields.StringField({ initial: "", required: true }),
					desc: new foundry.data.fields.StringField({ initial: "", required: true }),
					type: new foundry.data.fields.StringField({ initial: "multi", choices: ["single", "multi"] }),
					choices: new fields$b.SetField(new fields$b.StringField({ required: true, blank: false }))
				})
			);
		}
		return schema;
	}

	static migrateData(source) {
		if (typeof source.description === "string") {
			source.description = { value: source.description, unidentified: "" };
		}
		return source;
	}

	prepareBaseData() {
		const item = this.parent;
		// TODO move to another file
		if (item.isOwned && item.parent === "character" && game.settings.get("tormenta20", "equipmentSlots")) {
			if (this.equipado && this.equipado2.slot === 0) {
				const equip2 = this.equipado2;
				if (this.equipado2.type === "hand" && this.equipado === 2) {
					this.equipado2.slot = 12.1;
				} else {
					let equips = this.actor.items.filter((it) => it.equipado && it.equipado2.type === equip2.type);
					let limite = equip2.type === "hand" ? "limiteEmpunhado" : "limiteVestido";
					equips = equips.map((it) => it.id);
					this.equipado2.slot =
						(equip2.type === "hand" ? 1.1 : 1.2) + Math.min(equips.indexOf(this.id), this.actor.equipamentos[limite]);
				}
			}
		} else if (!item.isOwned && ["arma", "equipamento"].includes(item.type)) {
			this.equipado = false;
		}
		if (this.resistencia) this.resistencia.cd = 0;
	}

	prepareDerivedData() {
		const item = this.parent;
		if (!["arma", "classe", "equipamento", "race", "comodo", "mobilia"].includes(item.type)) {
			this.prepareDuration();
		}
	}

	prepareDuration() {
		if (["inst", "perm", "scene", "sust"].includes(this.duracao.units)) this.duracao.value = 0;
	}

	prepareFinalAttributes() {
		const item = this.parent;
		const actor = item.parent ?? {};
		if (!item.isOwned) return;
		if ((this.resistencia?.atributo || actor.type === "npc") && this.resistencia?.txt) {
			const atr = foundry.utils.getProperty(actor.system, `atributos.${this.resistencia.atributo}.value`);
			const nvl = Math.floor(foundry.utils.getProperty(actor.system, "attributes.nivel.value") / 2);
			if (actor.type === "npc") this.resistencia.cd = actor.system.attributes.cd;
			else this.resistencia.cd = 10 + nvl + atr + this.resistencia.bonus;
		}
	}
}

const fields$a = foundry.data.fields;

class ConsumableData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "consumivel";
		let schema = {
			...super.defineSchema(),
			...this.schemaPhysicalItem(type),
			...this.schemaActivation(type),
			...this.schemaSavingThrow(type),
			...this.schemaUpgrades(type),
			...this.schemaRolls(),
			tipo: new fields$a.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemType",
				hint: "T20.ItemTypeHint"
			}),
			subtipo: new fields$a.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemSubType",
				hint: "T20.ItemSubTypeHint"
			})
		};

		return schema;
	}
}

const fields$9 = foundry.data.fields;

class EquipmentData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "equipamento";
		return {
			...super.defineSchema(),
			...this.schemaPhysicalItem(type),
			...this.schemaActivation(type),
			...this.schemaUpgrades(type),
			...this.schemaRolls(),
			equipado: new fields$9.BooleanField({ label: "T20.ItemEquipped", hint: "T20.ItemEquippedHint" }),
			equipado2: new fields$9.SchemaField({
				slot: new fields$9.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemSlot",
					hint: "T20.ItemSlotHint"
				}),
				type: new fields$9.StringField({
					required: true,
					blank: false,
					initial: "body",
					choices: ["hand", "body", "both"],
					label: "T20.ItemSlotType",
					hint: "T20.ItemSlotTypeHint"
				})
			}),
			armadura: new fields$9.SchemaField({
				maxAtr: new fields$9.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemEquipmentDefenseMaxAbility",
					hint: "T20.ItemEquipmentDefenseMaxAbilityHint"
				}),
				penalidade: new PenaltyField({
					required: true,
					nullable: false,
					initial: 0,
					max: 0,
					label: "T20.ItemEquipmentArmorPenalty",
					hint: "T20.ItemEquipmentArmorPenaltyHint"
				}),
				value: new fields$9.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemEquipmentDefenseValue",
					hint: "T20.ItemEquipmentDefenseValueHint"
				})
			}),
			tipo: new fields$9.StringField({
				required: true,
				nullable: false,
				initial: "leve",
				label: "T20.ItemType",
				hint: "T20.ItemTypeHint"
			})
		};
	}
}

const fields$8 = foundry.data.fields;

class LootData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "tesouro";
		return {
			...super.defineSchema(),
			...this.schemaPhysicalItem(type),
			...this.schemaActivation(type),
			...this.schemaSavingThrow(type),
			...this.schemaRolls(),
			container: new fields$8.BooleanField({ label: "T20.ItemIsContainer", hint: "T20.ItemIsContainerHint" })
		};
	}
}

const fields$7 = foundry.data.fields;

/* ITEM TYPES */
class WeaponData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "arma";
		return {
			...super.defineSchema(),
			...this.schemaPhysicalItem(type),
			...this.schemaActivation(type),
			...this.schemaUpgrades(type),
			...this.schemaRolls(type),
			ataques: new fields$7.NumberField({
				initial: 0,
				label: "T20.ItemAttackQuantity",
				hint: "T20.ItemAttackQuantityHint"
			}),
			equipado: new fields$7.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				max: 2,
				label: "T20.ItemEquipped",
				hint: "T20.ItemEquippedHint"
			}),
			equipado2: new fields$7.SchemaField({
				slot: new fields$7.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemSlot",
					hint: "T20.ItemSlotHint"
				}),
				type: new fields$7.StringField({
					required: true,
					blank: true,
					initial: "",
					choices: ["hand", "body", "both"],
					label: "T20.ItemSlotType",
					hint: "T20.ItemSlotTypeHint"
				})
			}),
			tipoUso: new fields$7.StringField({ initial: "sim" }),
			proficiencia: new fields$7.StringField({
				required: true,
				nullable: false,
				blank: false,
				choices: Object.keys(T20.weaponTypes),
				initial: "simples",
				label: "T20.ItemWeaponProficiency",
				hint: "T20.ItemWeaponProficiencyHint"
			}),
			proposito: new fields$7.StringField({
				required: true,
				nullable: false,
				blank: false,
				choices: Object.keys(T20.weaponPurposeTypes),
				initial: "corpo-a-corpo",
				label: "T20.ItemWeaponPurpose",
				hint: "T20.ItemWeaponPurposeHint"
			}),
			empunhadura: new fields$7.StringField({
				required: true,
				nullable: false,
				blank: false,
				choices: Object.keys(T20.weaponWieldingTypes),
				initial: "leve",
				label: "T20.ItemWeaponWielding",
				hint: "T20.ItemWeaponWieldingHint"
			}),
			criticoM: new fields$7.NumberField({
				required: true,
				nullable: false,
				initial: 20,
				label: "T20.ItemWeaponCriticalRange",
				hint: "T20.ItemWeaponCriticalRangeHint"
			}),
			criticoX: new fields$7.NumberField({
				required: true,
				nullable: false,
				initial: 2,
				label: "T20.ItemWeaponCriticalMultiplier",
				hint: "T20.ItemWeaponCriticalMultiplierHint"
			}),
			propriedades: new fields$7.ObjectField(),
			size: new fields$7.StringField({
				required: true,
				nullable: false,
				initial: "normal",
				label: "T20.ItemWeaponSize",
				hint: "T20.ItemWeaponSizeHint"
			})
		};
	}

	/** @inheritdoc */
	static migrateData(data) {
		if (typeof data.equipado === "boolean") {
			data.equipado = data.equipado ? 1 : 0;
		}
		if (!data.proficiencia && foundry.utils.hasProperty(data, "tipoUso") && data.tipoUso) {
			let proficiencia = {
				sim: "simples",
				mar: "marcial",
				exo: "exotica",
				fog: "fogo",
				nat: "natural",
				imp: "improvisada"
			};
			data.proficiencia = proficiencia[data.tipoUso];
			data.tipoUso = null;
		}

		if (
			!data.proposito
			&& foundry.utils.hasProperty(data.propriedades, "arr")
			&& foundry.utils.hasProperty(data.propriedades, "mun")
			&& foundry.utils.hasProperty(data.propriedades, "dst")
		) {
			let proposito = data.propriedades.arr
				? "arremesso"
				: data.propriedades.mun
					? "disparo"
					: data.propriedades.dst
						? "disparo"
						: "corpo-a-corpo";
			data.proposito = proposito;
			delete data.propriedades.arr;
			delete data.propriedades.mun;
			delete data.propriedades.dst;
		}
		if (
			!data.empunhadura
			&& foundry.utils.hasProperty(data.propriedades, "lev")
			&& foundry.utils.hasProperty(data.propriedades, "dms")
		) {
			let empunhadura = data.propriedades.lev ? "leve" : data.propriedades.dms ? "duas" : "uma";
			data.empunhadura = empunhadura;
			delete data.propriedades.lev;
			delete data.propriedades.dms;
		}

		if (!data.equipado2) {
			data.equipado2 = {};
			if (data.empunhadura || ["escudo", "esoterico", "ferramenta"].includes(data.tipo)) {
				data.equipado2.type = "hand";
			} else if (["leve", "pesada", "traje", "acessorio"].includes(data.tipo)) {
				data.equipado2.type = "body";
			} else if (["eng"].includes(data.tipo) && data.escola) {
				data.equipado2.type = "both";
			}
			// data.equipado2.slot = data.equipado ?
		}
		return super.migrateData(data);
	}
}

const fields$6 = foundry.data.fields;

class PowerData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "poder";
		return {
			...super.defineSchema(),
			...this.schemaActivation(type),
			...this.schemaSavingThrow(type),
			...this.schemaRolls(),
			tipo: new fields$6.StringField({
				required: true,
				nullable: false,
				blank: false,
				initial: "geral",
				choices: CONFIG.T20.powerType,
				label: "T20.ItemType",
				hint: "T20.ItemTypeHint"
			}),
			subtipo: new fields$6.StringField({
				required: true,
				nullable: false,
				initial: "",
				label: "T20.ItemSubType",
				hint: "T20.ItemSubTypeHint"
			})
		};
	}
}

const fields$5 = foundry.data.fields;

class SpellData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		let type = "magia";
		return {
			...super.defineSchema(),
			...this.schemaActivation(type),
			...this.schemaSavingThrow(type),
			...this.schemaRolls(),
			circulo: new fields$5.NumberField({
				required: true,
				nullable: false,
				initial: 1,
				choices: CONFIG.T20.spellLevels,
				label: "T20.ItemSpellCircle",
				hint: "T20.ItemSpellCircleHint"
			}),
			escola: new fields$5.StringField({
				required: true,
				nullable: false,
				blank: false,
				initial: Object.keys(CONFIG.T20.spellSchools)[0],
				choices: CONFIG.T20.spellSchools,
				label: "T20.ItemSpellSchool",
				hint: "T20.ItemSpellSchoolHint"
			}),
			tipo: new fields$5.StringField({
				required: true,
				nullable: false,
				blank: false,
				initial: Object.keys(CONFIG.T20.spellType)[0],
				choices: CONFIG.T20.spellType,
				label: "T20.ItemType",
				hint: "T20.ItemTypeHint"
			}),
			preparada: new fields$5.BooleanField({
				required: true,
				nullable: false,
				initial: false,
				label: "T20.ItemSpellPrepared",
				hint: "T20.ItemSpellPreparedHint"
			}),
			equipado2: new fields$5.SchemaField({
				slot: new fields$5.NumberField({
					required: true,
					nullable: false,
					initial: 0,
					label: "T20.ItemSlot",
					hint: "T20.ItemSlotHint"
				}),
				type: new fields$5.StringField({
					required: true,
					blank: true,
					initial: "",
					choices: ["hand", "body", "both"],
					label: "T20.ItemSlotType",
					hint: "T20.ItemSlotTypeHint"
				})
			})
		};
	}
}

class IdentityData extends Tormenta20ItemData {
	/** @inheritDoc */
	static defineSchema() {
		foundry.data.fields;
		tormenta20.data.fields;
		return Object.assign(super.defineSchema({ unidentified: false }), {});
	}
}

class BackgroundData extends IdentityData {
	/** @inheritDoc */
	static defineSchema() {
		foundry.data.fields;
		tormenta20.data.fields;
		return Object.assign(super.defineSchema(), {
			// progressao: new _fields.MappingField(),
		});
	}
}

const fields$4 = foundry.data.fields;

// , label:"T20.Value", hint:"T20.Hint"
class ClassData extends IdentityData {
	/** @override */
	static defineSchema() {
		return {
			...super.defineSchema(),
			...this.schemaRolls(),
			pericias: new fields$4.SchemaField({
				inatas: new fields$4.StringField({
					required: true,
					nullable: false,
					initial: ""
				}),
				numero: new fields$4.NumberField({
					required: true,
					nullable: false,
					initial: 0
				})
			}),
			niveis: new fields$4.NumberField({
				required: true,
				initial: 1,
				label: "T20.ItemClassLevels",
				hint: "T20.ItemClassLevelsHint"
			}),
			pvPorNivel: new fields$4.NumberField({
				required: true,
				initial: 1,
				label: "T20.ItemClassHPLevel",
				hint: "T20.ItemClassHPLevelHint"
			}),
			pmPorNivel: new fields$4.NumberField({
				required: true,
				initial: 1,
				label: "T20.ItemClassMPLevel",
				hint: "T20.ItemClassMPLevelHint"
			}),
			inicial: new fields$4.BooleanField({ label: "T20.ItemClassIsInitial", hint: "T20.ItemClassIsInitialHint" })
		};
	}

	prepareDerivedData() {
		super.prepareDerivedData();
		const maxLvl = game.settings.get("tormenta20", "gameSystem") === "Skyfall" ? 10 : 20;
		this.niveis = Math.clamp(this.niveis, 1, maxLvl);
	}
}

class DevotionData extends IdentityData {
	/** @inheritDoc */
	static defineSchema() {
		foundry.data.fields;
		tormenta20.data.fields;
		return Object.assign(super.defineSchema(), {
			// progressao: new _fields.MappingField(),
		});
	}
}

const fields$3 = foundry.data.fields;
class RaceData extends IdentityData {
	/** @inheritDoc */
	static defineSchema() {
		tormenta20.data.fields;
		return {
			...super.defineSchema(),
			...this.schemaItemGrants("race"),
			atributos: new fields$3.SchemaField(
				Object.fromEntries(
					Object.keys(T20.atributos).map((abl) => [
						abl,
						new fields$3.NumberField({
							required: true,
							nullable: false,
							initial: 0,
							min: -5
						})
					])
				)
			),
			atributosDinamicos: new fields$3.SchemaField({
				value: new fields$3.SetField(new fields$3.StringField({ required: true, blank: false })),
				description: new fields$3.StringField({
					required: true,
					nullable: false,
					initial: game.i18n.localize("T20.DynamicAbilitiesDesc")
				})
			})
			// progressao: new _fields.MappingField(),
		};
	}
}

const fields$2 = foundry.data.fields;

class FurnitureData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		return {
			...super.defineSchema(),
			preco: new fields$2.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemPrice",
				hint: "T20.ItemPriceHint"
			}),
			residentes: new fields$2.BooleanField({ initial: true })
		};
	}
}

const fields$1 = foundry.data.fields;

class RoomData extends Tormenta20ItemData {
	/** @override */
	static defineSchema() {
		return {
			...super.defineSchema(),
			preco: new fields$1.NumberField({
				required: true,
				nullable: false,
				initial: 0,
				min: 0,
				label: "T20.ItemPrice",
				hint: "T20.ItemPriceHint"
			}),
			residentes: new fields$1.BooleanField({ initial: true })
		};
	}
}

var models = /*#__PURE__*/Object.freeze({
	__proto__: null,
	BackgroundData: BackgroundData,
	BasesData: BasesData,
	CharacterData: CharacterData,
	ClassData: ClassData,
	ConsumableData: ConsumableData,
	DevotionData: DevotionData,
	EquipmentData: EquipmentData,
	FurnitureData: FurnitureData,
	HazardData: HazardData,
	LootData: LootData,
	MenaceData: MenaceData,
	PowerData: PowerData,
	RaceData: RaceData,
	RoomData: RoomData,
	SimpleData: SimpleData,
	SpellData: SpellData,
	WeaponData: WeaponData
});

class Tormenta20DataModel extends foundry.abstract.DataModel {
	get document() {
		let parent = this.parent;
		while (parent) {
			if (parent.documentName) break;
			parent = parent.parent;
		}
		return parent;
	}

	get getDataFields() {
		const data = this;
		const schema = data.schema;
		const dataFields = foundry.utils.flattenObject(data.toObject());

		for (const fieldPath of Object.keys(dataFields)) {
			dataFields[fieldPath] = schema.getField(fieldPath);
			if (foundry.utils.hasProperty(dataFields[fieldPath], "fieldPath")) continue;
		}

		return foundry.utils.expandObject(dataFields);
	}
}

class MovementData extends Tormenta20DataModel {
	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		const schema = {};
		for (const move of Object.keys(T20.movementTypes)) {
			schema[move] = new fields.SchemaField(
				{
					base: new fields.NumberField({
						required: true,
						initial: move == "walk" ? 9 : 0,
						min: 0
					}),
					bonus: new fields.ArrayField(new fields.StringField(), {
						required: true,
						initial: []
					})
				},
				{
					label: `T20.Movement${move.titleCase()}`
				}
			);
		}
		schema.hover = new fields.BooleanField({
			label: "T20.MovementHoverStatus",
			hint: "T20.MovementHoverStatusHint"
		});
		schema.unit = new fields.StringField({
			initial: "m",
			label: "T20.MovementUnitType",
			hint: "T20.MovementUnitTypeHint"
		});
		schema.tags = new fields.SetField(new fields.StringField(), {
			label: "T20.Tag"
		});
		return schema;
	}

	/* -------------------------------------------- */
	/*  Getters/Setters                             */
	/* -------------------------------------------- */

	get sheet() {
		return new ActorMovementConfig(this.document).render(true);
	}

	/* -------------------------------------------- */
	/*  System Operations                           */
	/* -------------------------------------------- */
}

var fields = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AbilitiesSchema: AbilitiesSchema,
	FormulaField: FormulaField,
	MappingField: MappingField,
	MovementData: MovementData,
	ResistanceSchema: ResistanceSchema,
	RollData: RollData,
	SkillData: SkillData,
	Tormenta20DataModel: Tormenta20DataModel,
	_resourceSchema: _resourceSchema,
	getActivationItemData: getActivationItemData,
	getObjectBaseData: getObjectBaseData,
	getObjectItemData: getObjectItemData,
	getSaveItemData: getSaveItemData
});

const endSegment = async function (app, html) {
	if (game.user.isGM && !app.element.querySelector(".scene-segment")) {
		const button = document.createElement("button");
		button.className = "scene-segment flexF";
		button.title = "Terminar a Cena";
		button.innerHTML = "<i class='fa-solid fa-clapperboard'></i> Terminar Cena";

		button.addEventListener("click", async function () {
			let historico = "";
			for await (const token of canvas.tokens.placeables) {
				const actor = !token.actorLink ? token.actor : game.actors.get(token.actor.id);
				if (actor.type != "character") continue;
				let efeitos = token.actor.effects.filter((e) => e.getFlag("tormenta20", "durationScene")).map((e) => e.id);
				let labels = token.actor.effects
					.filter((e) => e.getFlag("tormenta20", "durationScene"))
					.map((e) => `<i>${e.name}</i>`);
				if (efeitos.length) {
					historico += `<br><b>${token.actor.name}</b> ${labels.join(", ")}`;
					await actor.deleteEmbeddedDocuments("ActiveEffect", efeitos);
				}
			}

			let toChat = (message) => {
				let chatData = {
					user: game.user._id,
					type: CONST.CHAT_MESSAGE_STYLES.OTHER,
					content: message,
					speaker: ChatMessage.getSpeaker()
				};
				ChatMessage.create(chatData);
			};
			let outputHistorico = "";
			if (historico) {
				outputHistorico = ` Os seguintes efeitos foram removidos:${historico}`;
			}

			let chatMessage = `<div class='tormenta20 chat-card item-card'>
				<header class='card-header flexrow'>
					<h3 class="item-name">
						<i class="fa-solid fa-clapperboard" style=""></i> Cena Finalizada
					</h3>
				</header>
				<div class='card-content'>A cena atual foi terminada pelo mestre.${outputHistorico}</div>
			</div>`;
			toChat(chatMessage);
		});

		const footer = html.querySelector(".combat-controls");
		footer.classList.add("flexrow");
		footer.appendChild(button);
	}
};

/* -------------------------------------------- */
/*  Chat Message Overrides                      */
/* -------------------------------------------- */

/**
 * Render Action Buttons Over chat-card
 */
const ApplyButtons = function (app, html, data) {
	let chatHTML = html.querySelector(".message-content"); // .find(".tormenta20.chat-card");
	if (!chatHTML) return;

	let button;
	// let btnparent;
	let btncontainer;
	// Get Element To Append to;
	// btnparent = chatHTML.querySelectorAll('.roll:not(.roll--dano) .dice-formula')[0];
	let btnCreate = function (text = "", classes = [], title = "", data = []) {
		let b = document.createElement("button");
		b.innerHTML = text;
		b.classList.add(...classes);
		b.title = title;
		for (const d of data) {
			if (Array.isArray(d) && d[0] && d[1]) {
				b.dataset[d[0]] = d[1];
			}
		}
		return b;
	};

	// btnparent = chatHTML.querySelectorAll(".roll:not(.roll--dano)")[0];

	// if (false && btnparent) {
	// 	btncontainer = document.createElement("span");
	// 	btncontainer.classList.add("dice-btn", "formula", "right");

	// 	button = btnCreate('<i class="fas fa-redo"></i>', ["chat-reroll"], "Re-rolar");
	// 	btncontainer.append(button);

	// 	btnparent.append(btncontainer);
	// }

	// Get Element To Append to;
	// btnparent = chatHTML.querySelectorAll('.roll--dano .dice-total')[0];
	// btnparent = chatHTML.querySelectorAll('.roll.roll--dano')[0];
	let btnparents = chatHTML.querySelectorAll(".roll.roll--dano");

	for (const btnparent of btnparents) {
		if (btnparent) {
			// Buttons Left
			btncontainer = document.createElement("span");
			btncontainer.classList.add("dice-btn", "result", "left");

			// Button Apply Damage
			button = btnCreate('<i class="fas fa-user-minus"></i>', ["apply-dmg"], "Aplicar Dano", [["mod", 1]]);
			btncontainer.append(button);

			// Button Apply Damage Double
			button = btnCreate("2x", ["apply-dmg"], "Aplicar Dano em Dobro", [["mod", 2]]);
			btncontainer.append(button);

			btnparent.append(btncontainer);

			// Buttons Right
			btncontainer = document.createElement("span");
			btncontainer.classList.add("dice-btn", "result", "right");

			// Button Apply Damage Half
			button = btnCreate("½", ["apply-dmg"], "Aplicar Metade do Dano", [["mod", 0.5]]);
			btncontainer.append(button);

			// Button Apply Damage as Heal
			button = btnCreate('<i class="fas fa-user-plus"></i>', ["apply-dmg"], "Aplicar Cura", [["mod", -1]]);
			btncontainer.append(button);

			btnparent.append(btncontainer);
		}
	}
};

const hideDieFlavor = function (ChatMessage, html, data) {
	const coreMessage = !$(html).find(".tormenta20")[0];
	const haveDamageRoll = ChatMessage.rolls.find(
		(r) => r._formula.match(/\[(\w+)\]/) && game.tormenta20.config.damageTypes[r._formula.match(/\[(\w+)\]/)[1]]
	);
	const rolls = $(html).find(".dice-roll");
	if (coreMessage && haveDamageRoll) {
		$(html).find(".message-content").append('<div class="roll roll--dano"></div>');
		$(html).find(".message-content").addClass("tormenta20 chat-card item-card");

		for (const roll of rolls) {
			$(roll).find(".dice-formula")[0].textContent = $(roll)
				.find(".dice-formula")[0]
				.textContent.replace(/\[\w+\]/g, "");
			$(html).find(".roll.roll--dano").append($(roll));
		}
	}
};

/* -------------------------------------------- */
/*  Chat Message Helpers                        */
/* -------------------------------------------- */

/**
 * TODO [Delayed to V10 to use Message With Multi Rolls]
 * Call Reroll Method for selected roll and update chat card
 * @param {HTMLElement} roll The chat entry which contains the roll data
 */
// function _onChatReRoll(event) {
// 	event.preventDefault();
// 	const btn = event.currentTarget;
// 	const chatCardId = btn.closest(".chat-message").dataset.messageId;
// 	const message = game.messages.get(chatCardId);
// }

// function _onChatSpendCatarse(event) {
// 	event.preventDefault();
// 	const btn = event.currentTarget;
// 	const chatCardId = btn.closest(".chat-message").dataset.messageId;
// 	const message = game.messages.get(chatCardId);
// }

function _callApplyDamage(roll, multiplier, type = "dano") {
	if (canvas.tokens.controlled.length) {
		return Promise.all(canvas.tokens.controlled.map((tk) => tk.actor.applyDamageV2(roll, multiplier, type)));
	}
	ui.notifications.warn("É necessario selecionar um ou mais tokens, para aplicar os valores rolados");
}

/**
 * Get rolled damage value and call Actor apply damage Method
 */
function _onChatApplyDamage(event) {
	event.preventDefault();
	const btn = event.currentTarget;
	const amount = Number(btn.closest(".roll").querySelector(".dice-total").innerText);
	const multiplier = Number(btn.dataset.mod);
	const chatCardId = btn.closest(".chat-message").dataset.messageId;
	const message = game.messages.get(chatCardId);
	const rollTitle = btn.closest(".roll").dataset.rollTitle;
	const roll = message.rolls.find(
		(r) => r.options.title === rollTitle && (!r.options.type || r.options.type === "damage")
	);

	if (amount && multiplier) {
		if (canvas.tokens.controlled.length) {
			return Promise.all(
				canvas.tokens.controlled.map((tk) => {
					if (roll) return tk.actor.applyDamageV2(roll, multiplier);
					return tk.actor.applyDamage(amount, multiplier, true);
				})
			);
		}
		ui.notifications.warn("É necessario selecionar um ou mais tokens, para aplicar os valores rolados");
	}
}

/**
 * Apply rolled dice damage to the token or tokens which are currently controlled.
 * This allows for damage to be scaled by a multiplier to account for healing, critical hits, or resistance
 *
 * @param {HTMLElement} li The chat entry which contains the roll data
 * @param {Number} multiplier A damage multiplier to apply to the rolled damage.
 * @return {Promise}
 */
async function applyChatCardDamage(li, multiplier, type = "dano") {
	const message = game.messages.get(li.dataset.messageId);
	const rolls = message.rolls;
	let roll;
	if (rolls.length > 1) {
		let options = rolls.map((r) => `<option value="${r.options.title}">${r.options.title} (${r.total})</option>`);
		let chosen;
		await new Dialog({
			title: "Escolha a rolagem",
			content: `<select name="roll" style="width:30%; margin:10px 35%;">${options.join()}</select>`,
			buttons: {
				yes: {
					label: "Confirma",
					callback: (html) => {
						chosen = html.find("[name=roll]")[0].value;
						roll = rolls.find((r) => r.options.title === chosen);
						if (roll) _callApplyDamage(roll, multiplier, type);
					}
				},
				no: { label: "Cancela" }
			}
		}).render(true);
	} else {
		_callApplyDamage(rolls[0], multiplier, type);
	}
}

// function applyChatCardDamageOld(message, multiplier) {
// 	if (canvas.tokens.controlled.length) {
// 		let roll = message.find(".roll--dano") ?? message.find(".dice-roll");
// 		const amount = roll.find(".dice-total").text();
// 		return Promise.all(
// 			canvas.tokens.controlled.map((t) => {
// 				const a = t.actor;
// 				return a.applyDamage(amount, multiplier, true);
// 			})
// 		);
// 	}
// 	ui.notifications.warn("É necessario selecionar um ou mais tokens, para aplicar os valores rolados");
// }

/**
 * Get mana cost value and call Actor spend mana Method
 * @param {Event} event   The originating click event
 * @private
 */
function _onChatSpendMana(event) {
	event.preventDefault();
	const btn = event.currentTarget;
	const amount = Number(btn.value);
	if (canvas.tokens.controlled.length) {
		return Promise.all(
			canvas.tokens.controlled.map((tk) => {
				const actor = tk.actor;
				return actor.spendMana(amount, 0, false);
			})
		);
	}

	ui.notifications.warn("É necessario selecionar um ou mais tokens, para aplicar os gastos de mana");
}

/**
 * Apply mana points spent to the token or tokens which are currently controlled.
 * This allows for damage to be adjusted due to reduced or expanded cost
 *
 * @param {HTMLElement} message The chat entry which contains the mana cost
 * @param {Number} adjust A adjust value to apply to the cost.
 * @return {Promise}
 */
function applyChatManaSpend(message, adjust = 0, recover = false) {
	if (canvas.tokens.controlled.length) {
		const amount =
			message.querySelector(".chat-spend-mana")?.value ?? game.messages.get(message.dataset.messageId).rolls[0].total;
		return Promise.all(
			canvas.tokens.controlled.map((tk) => {
				const actor = tk.actor;
				return actor.spendMana(amount, adjust, recover);
			})
		);
	}
	ui.notifications.warn("É necessario selecionar um ou mais tokens, para aplicar os gastos de mana");
}

/**
 * Handle toggling the visibility of chat card content when the name is clicked
 * @param {Event} event   The originating click event
 * @private
 */
function _onChatCardToggleContent(event) {
	event.preventDefault();
	const chatCard = event.currentTarget.closest(".chat-message");
	const content = chatCard.querySelector(".card-content");
	if (content.textContent.trim()) content.style.display = content.style.display === "none" ? "block" : "none";
}

function _onChatCardToggleDamage(event) {
	event.preventDefault();
	const chatCard = event.currentTarget.closest(".chat-message");
	const minimal = chatCard.querySelector(".card-damage");
	const details = chatCard.querySelector(".card-damage-details");
	if (minimal && details) {
		minimal.style.display = minimal.style.display === "none" ? "block" : "none";
		details.style.display = details.style.display === "none" ? "block" : "none";
	}
}

/**
 * Retrieve AbilityTemplate data and Draw on Canvas
 * @param {Event} event   The originating click event
 * @private
 */
function _onChatPlaceTemplate(event) {
	event.preventDefault();
	const chatCardId = event.currentTarget.closest(".chat-message").dataset.messageId;
	const chatCard = game.messages.get(chatCardId);
	const button = event.currentTarget;
	const card = button.closest(".chat-card");

	const actor = game.actors.get(card.dataset.actorId);
	if (!actor) return;

	// const storedData = chatCard.getFlag("tormenta20", "itemData");
	const storedTemplate = chatCard.getFlag("tormenta20", "template");
	// let item = new game.tormenta20.entities.ItemT20(storedData, {name:'temp',type:'tesouro',parent: actor});
	let item = { system: storedTemplate, actor: actor };
	// new game.tormenta20.entities.ItemT20()
	// new game.tormenta20.canvas.AbilityTemplate()
	if (!item) return;
	item.system.area = storedTemplate.area;
	item.system.alcance = storedTemplate.alcance;

	const template = game.tormenta20.canvas.AbilityTemplate.fromItem(item);
	if (template) {
		template.drawPreview();
	}
}

/**
 * Handle Active Effetcs Applying on Tokens
 * @param {Event} event   The originating click event
 * @private
 */
async function _onChatCardApplyEffect(event) {
	event.preventDefault();
	const chatCardId = event.currentTarget.closest(".chat-message").dataset.messageId;
	// const actorId = event.currentTarget.closest(".item-card").dataset.actorId;
	const buttonId = event.currentTarget.dataset.effectIndex;
	const actors = canvas.tokens.controlled;
	if (actors.length && buttonId >= 0) {
		const chatEffect = game.messages.get(chatCardId).flags.tormenta20?.effects[buttonId];
		if (chatEffect[0].duration.seconds) {
			chatEffect[0].duration.startTime = game.time.worldTime;
		}

		let toChat = true;
		for (let ac of actors) {
			await ac.actor.createEmbeddedDocuments("ActiveEffect", [...chatEffect], {
				toChat: toChat
			});
			toChat = false;
		}
	} else if (actors.length === 0) {
		ui.notifications.warn("Você precisa selecionar pelo menos um token.");
	}
}

/* -------------------------------------------- */
/*  Macros Scripts                              */
/* -------------------------------------------- */
const macroScripts = {
	SKILL: 'game.tormenta20.rollSkillMacro("{label}","{subtype}");',
	ITEM: 'game.tormenta20.rollItemMacro("{name}");',
	WEAPON: `
//UTILIZE OS CAMPOS ABAIXO PARA MODIFICAR um ATAQUE
//VALORES SERÃO SOMADOS A CARACTEÍSTICA.
//INICIAR COM "=" SUBSTITUIRÁ O BÔNUS DA FICHA DA ARMA
game.tormenta20.rollItemMacro("{name}",{
  'atq' : "0",
  'dadoDano' : "",
  'dano' : "0",
  'margemCritico' : "0",
  'multCritico' : "0",
  'atributoAtq' : "",
  'atributoDano' : "",
  'pericia' : "",
});`,
	EFFECT: `// Ativar/Desativar Efeito;
if(actor) {
  let effect = actor.effects.find(ef => ef.label == "{label}");

  if(effect){
    effect.update({disabled: !effect.disabled});
  }
}`,
	EQUIPMENT: `// Equipa/Desequipa Equipamento;
if(actor){
  let item = actor.items.find( it => it.name == "{name}");
  if(item){
    item.update({'system.equipado': !item.system.equipado});
  }
}`
};

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
async function createT20Macro(data, slot) {
	// Create the macro command
	let command = "";
	if (data.type === "Pericia") {
		const item = data.data;
		command = macroScripts.SKILL.replace("{label}", item.label).replace("{subtype}", data.subtype);
		let macro = game.macros.find((m) => m.name === item.label && m.command === command);
		if (!macro) {
			macro = await Macro.create({
				name: item.label,
				type: "script",
				command: command
			});
		}
		game.user.assignHotbarMacro(macro, slot);
		return false;
	}

	if (data.type === "Item") {
		let item = await fromUuid(data.uuid);
		if (!(item instanceof ItemT20)) return ui.notifications.warn("Não há uma macro para este tipo de item.");

		if (item.type === "arma") {
			command = macroScripts.WEAPON.replace("{name}", item.name);
		} else if (item.type === "equipamento") {
			command = macroScripts.EQUIPMENT.replace("{name}", item.name);
		} else {
			command = macroScripts.ITEM.replace("{name}", item.name);
		}

		let macro = game.macros.find((m) => m.name === item.name && m.command === command && m.isAuthor);
		if (!macro) {
			macro = await Macro.create({
				name: item.name,
				type: "script",
				img: item.img,
				command: command,
				flags: {
					"tormenta20.itemMacro": true
				}
			});
		}
		game.user.assignHotbarMacro(macro, slot);
		return true;
	}

	if (data.type === "ActiveEffect") {
		let effect = await fromUuid(data.uuid);
		if (!(effect instanceof ActiveEffect)) return ui.notifications.warn("Não há uma macro para este tipo de item.");

		command = macroScripts.EFFECT.replace("{label}", effect.name);
		let macro = game.macros.find((m) => m.name === effect.name && m.command === command);
		if (!macro) {
			macro = await Macro.create({
				name: effect.name,
				type: "script",
				img: effect.icon,
				command: command
			});
		}
		game.user.assignHotbarMacro(macro, slot);
	}
}

/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} itemName
 * @return {Promise}
 */
async function rollItemMacro(itemName, extra = {}) {
	const speaker = ChatMessage.getSpeaker();
	let actor;
	if (speaker.token) actor = game.actors.tokens[speaker.token];
	if (!actor) actor = game.actors.get(speaker.actor);

	// Get matching items
	const items = actor ? actor.items.filter((i) => i.name === itemName) : [];
	if (items.length > 1) {
		ui.notifications.warn(
			`O personagem ${actor.name} possui mais de um Item ${itemName}. O primeiro encontrado será usado.`
		);
	} else if (items.length === 0) {
		return ui.notifications.warn(`O personagem selecionado não possui um Item chamado ${itemName}`);
	}
	if (items[0].type === "arma" && (extra.atq.match(/^=/) || extra.dano.match(/^=/))) {
		ui.notifications.warn('Substituir bonus de ataque e dano (ie: "=15") não é suportado no momento.');
	}
	const item = items[0];

	const rollConfigs = {};
	const UsageConfig = game.settings.get("tormenta20", "UsageConfig");
	if (UsageConfig === "default") {
		rollConfigs.configureDialog = !event.shiftKey;
	} else {
		rollConfigs.configureDialog = event.shiftKey;
	}
	rollConfigs.extra = extra;
	// Trigger the item roll
	return item.roll(rollConfigs);
}

async function rollSkillMacro(skillName) {
	const speaker = ChatMessage.getSpeaker();
	let actor;
	if (speaker.token) actor = game.actors.tokens[speaker.token];
	if (!actor) actor = game.actors.get(speaker.actor);
	if (!actor) return ui.notifications.warn("Selecione um personagem.");

	let pericias = Object.entries(actor.system.pericias);
	let skl = pericias.find((p) => p[1].label === skillName)[0];
	await actor.rollPericia(skl, { message: true, event: event });
}

async function msgFromJournal(name, source, sourceName) {
	let journal;
	let page;
	let style = "";
	if (source && sourceName) {
		const pack = await game.packs.get(source).getDocuments();
		journal = pack.find((i) => i.name === sourceName);
		page = journal.pages.find((p) => p.name === name);
	} else if (source) {
		const pack = await game.packs.get(source).getDocuments();
		journal = pack.find((i) => i.name === name);
	} else {
		journal = game.journal.getName(name);
	}
	if (!journal) return;
	if (game.tormenta20.config.statusEffectIcons.find((i) => i.label === name)) {
		style =
			'style="position:relative; background: #ddd9d5;padding: 0.5rem; margin-left:-7px;margin-right:-7px;margin-bottom:-7px;margin-top:-27px"';
	}
	if (!page) return;

	let chatData = {
		speaker: null,
		content: `<div ${style} >${page.text.content}</div>`
	};
	ChatMessage.create(chatData, {});
}

/**
 * Create Standard rollChatMessage
 *
 * */
async function rollChatMessage({
	rolls = [],
	templateData = {
		item: { name: "Teste", img: "icons/svg/dice-target.svg" },
		system: { description: { value: "Teste" } }
	}
}) {
	templateData.rolls = [];
	// Render dice rolls
	for (let roll of Object.values(rolls)) {
		roll.tipo = roll.dice[0]?.faces !== 20 ? "roll--dano" : roll._critical ? "critico" : roll._fumble ? "falha" : "";
		roll.options.title = roll.options.title || "-";
		await roll.render().then((r) => {
			templateData.rolls.push({ template: r, roll: roll });
		});
	}

	// Render the chat card template
	let template = "systems/tormenta20/templates/chat/chat-card.hbs";
	const html = await foundry.applications.handlebars.renderTemplate(template, templateData);

	// Create the ChatMessage data object
	const chatData = {
		user: game.user._id,
		// type: CONST.CHAT_MESSAGE_STYLES.ROLL,
		content: html,
		rolls: rolls,
		speaker: ChatMessage.getSpeaker()
	};

	// Apply the roll mode to adjust message visibility
	ChatMessage.applyRollMode(chatData, game.settings.get("core", "rollMode"));

	// Create the Chat Message or return its data
	ChatMessage.create(chatData);
}

var macros = /*#__PURE__*/Object.freeze({
	__proto__: null,
	createT20Macro: createT20Macro,
	msgFromJournal: msgFromJournal,
	rollChatMessage: rollChatMessage,
	rollItemMacro: rollItemMacro,
	rollSkillMacro: rollSkillMacro
});

function hooks () {
	/**
	 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
	 */
	Hooks.once("ready", async function () {
		// Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
		Hooks.on("hotbarDrop", (bar, data, slot) => {
			if (["Item", "ActiveEffect"].includes(data.type)) {
				createT20Macro(data, slot);
				return false;
			}
		});

		ui.compendium.compileSearchIndex();

		if (game.user.isGM) {
			const systemMigrationVersion = game.settings.get("tormenta20", "systemMigrationVersion");
			// Define o padrão dos token de PJ
			if (systemMigrationVersion < "1.5.000") {
				const prototypeTokenOverrides = game.settings.get("core", "prototypeTokenOverrides");
				await game.settings.set(
					"core",
					"prototypeTokenOverrides",
					foundry.utils.mergeObject(prototypeTokenOverrides.toObject(), {
						character: { disposition: CONST.TOKEN_DISPOSITIONS.FRIENDLY, sight: { enabled: true } }
					})
				);
			}
			if (systemMigrationVersion && systemMigrationVersion < "1.5.006") {
				const packs = game.packs.filter((p) => p.metadata.type === "Actor" && p.metadata.packageType !== "system");
				const consertaAtores = async (actors, pack) => {
					for (const actor of actors) {
						if (actor.type !== "npc") continue;
						const treino = actor.treino;
						const changes = {};
						try {
							for (const pericia of Object.keys(CONFIG.T20.resistencias)) {
								const { outros, value } = actor.system.pericias[pericia];
								const newBonus = 2 * outros - value;
								changes[`system.pericias.${pericia}.outros`] = newBonus;
							}
							if (actor.items.size) {
								const pericias = new Set();
								const bonus = {};

								for (const arma of actor.itemTypes.arma) {
									const rolls = arma.toObject().system.rolls;
									const index = rolls.findIndex((r) => r.type === "ataque");
									if (index === -1) continue;
									const ataque = rolls[index];
									const pericia = ataque.parts[1][0];
									pericias.add(pericia);
									if (!bonus[pericia]) bonus[pericia] = [];
									bonus[pericia].push(ataque.parts[2][0]);
								}
								for (const pericia of pericias) {
									const value = actor.system.pericias[pericia].value;
									const menorBonus = Math.min(...bonus[pericia]);
									const newBonus = menorBonus - value - treino;
									changes[`system.pericias.${pericia}.treinado`] = true;
									changes[`system.pericias.${pericia}.outros`] = newBonus;
								}
								for (const arma of actor.itemTypes.arma) {
									const rolls = arma.toObject().system.rolls;

									const index = rolls.findIndex((r) => r.type === "ataque");
									if (index === -1) continue;
									const ataque = rolls[index];
									const pericia = ataque.parts[1][0];
									ataque.parts[2][0] = Number(ataque.parts[2][0]) - Math.min(...bonus[pericia]);
									await arma.update({ [`system.rolls`]: rolls });
								}
							}
							await actor.update(changes);
						} catch (err) {
							if (pack) {
								err.message = `Falha ao migrar o ator ${actor.name} no compêndio ${pack.collection}: ${err.message}`;
							} else err.message = `Falha ao migrar o ator ${actor.name}`;
							console.error(err);
						}
					}
				};
				ui.notifications.info(
					"Iniciando conserto de resistências e ataques em Ameaças. Espere um momento e não feche o jogo",
					{
						console: false,
						permanent: true
					}
				);
				for (const pack of packs) {
					const wasLocked = pack.locked;
					try {
						await pack.configure({ locked: false });
						const actors = await pack.getDocuments();
						await consertaAtores(actors, pack);
					} finally {
						await pack.configure({ locked: wasLocked });
					}
				}
				await consertaAtores(game.actors.filter((a) => a.type === "npc"));
				ui.notifications.info("Conserto concluído", { console: false, permanent: true });
			}
			if (systemMigrationVersion && systemMigrationVersion < "1.5.007") {
				const packs = game.packs.filter((p) => p.metadata.type === "Actor" && p.metadata.packageType !== "system");
				const consertaAtores = async (actors, pack) => {
					for (const actor of actors) {
						if (actor.type !== "npc") continue;
						const changes = {};
						try {
							if (actor.system.atributos.des.value !== 0) {
								const defBase = actor.system.attributes.defesa.base;
								changes["system.attributes.defesa.base"] = defBase - actor.system.atributos.des.value;
							}
							await actor.update(changes);
						} catch (err) {
							if (pack) {
								err.message = `Falha ao migrar o ator ${actor.name} no compêndio ${pack.collection}: ${err.message}`;
							} else err.message = `Falha ao migrar o ator ${actor.name}`;
							console.error(err);
						}
					}
				};
				ui.notifications.info("Iniciando conserto de defesas em Ameaças. Espere um momento e não feche o jogo", {
					console: false,
					permanent: true
				});
				for (const pack of packs) {
					const wasLocked = pack.locked;
					try {
						await pack.configure({ locked: false });
						const actors = await pack.getDocuments();
						await consertaAtores(actors, pack);
					} finally {
						await pack.configure({ locked: wasLocked });
					}
				}
				await consertaAtores(game.actors.filter((a) => a.type === "npc"));
				ui.notifications.info("Conserto concluído", { console: false, permanent: true });
			}
			if (systemMigrationVersion && systemMigrationVersion < "1.5.010") {
				const packs = game.packs.filter((p) => p.metadata.type === "Actor" && p.metadata.packageType !== "system");
				const consertaAtores = async (actors, pack) => {
					for (const actor of actors) {
						if (!actor.system.pericias) continue;
						const changes = {};
						try {
							const initial = new tormenta20.data.fields.SkillData();
							const cls = CONFIG.Actor.dataModels[actor.type];
							if (actor.system.pericias.ofi0) changes["system.pericias.-=ofi0"] = null;
							if (actor.system.pericias._pc0) changes["system.pericias.-=_pc0"] = null;
							if (
								actor.system.pericias.acro?.st
								&& actor.system.pericias.reli?.pda
								&& actor.system.pericias.guer?.pda
							) {
								for (const [key, value] of Object.entries(actor.system.pericias)) {
									changes[`system.pericias.${key}`] = cls._initialSkillValue(key, initial, value);
								}
							}
							for (const key of CONFIG.T20.oficios) {
								if (!actor.system.pericias[key]) {
									changes[`system.pericias.${key}`] = cls._initialSkillValue(key, initial, CONFIG.T20.pericias[key]);
								}
							}
							await actor.update(changes);
						} catch (err) {
							if (pack) {
								err.message = `Falha ao migrar o ator ${actor.name} no compêndio ${pack.collection}: ${err.message}`;
							} else err.message = `Falha ao migrar o ator ${actor.name}`;
							console.error(err);
						}
					}
				};
				ui.notifications.info(
					"Iniciando migração do sistema Tormenta20 1.5.010. Espere um momento e não feche o jogo",
					{
						console: false,
						permanent: true
					}
				);
				for (const pack of packs) {
					const wasLocked = pack.locked;
					try {
						await pack.configure({ locked: false });
						const actors = await pack.getDocuments();
						await consertaAtores(actors, pack);
					} finally {
						await pack.configure({ locked: wasLocked });
					}
				}
				await consertaAtores(game.actors.filter((a) => !!a.system.pericias));
				ui.notifications.info("Migração concluída", { console: false, permanent: true });
			}
			if (systemMigrationVersion && systemMigrationVersion < "1.5.012") {
				// Fix Skills with Armor Penalty
				const fixed = new CONFIG.Actor.dataModels.character();

				const updateData = {};
				Object.entries(fixed.pericias).reduce((acc, [key, value]) => {
					acc[`system.pericias.${key}.pda`] = value.pda;
					acc[`system.pericias.${key}.st`] = value.st;
					return acc;
				}, updateData);

				const characters = game.actors.filter((i) => i.type == "character");
				for (let character of characters) {
					try {
						await character.update(updateData);
					} catch (err) {
						err.message = `Falha ao migrar o ator ${character.name}: ${err.message}`;
						console.error(err);
					}
				}
			}
			game.actors
				.filter((f) => !f._stats.systemVersion || f._stats.systemVersion < "1.5.000")
				.forEach((actor) => {
					actor.items
						.filter((item) => item.flags?.favorito)
						.forEach((item) => item.setFlag("tormenta20", "favorito", true));
				});
			let oldActors = game.actors.filter((f) => !f._stats.systemVersion || f._stats.systemVersion < "1.4.100");
			// Migration
			for (const actor of oldActors) {
				// Perigos Complexos (hazard) e Bases herdam Tormenta20TypeData direto e não possuem
				// system.atributos, então não há atributos a migrar nesses tipos.
				const atributos = actor._source.system.atributos;
				if (!atributos) continue;
				let updateData = {};
				try {
					for (let [key, ability] of Object.entries(atributos)) {
						updateData[`system.atributos.${key}.base`] = Math.floor((ability.value - 10) / 2);
						updateData[`system.atributos.${key}.bonus`] = ability.bonus !== 0 ? ability.bonus / 2 : 0;
					}

					if (actor.type === "npc") {
						updateData["system.attributes.defesa.base"] = 10 + actor._source.system.attributes.defesa.outros;
						updateData["system.attributes.defesa.outros"] = 0;
					}
					await actor.update(updateData);
				} catch (err) {
					err.message = `Falha ao migrar o ator ${actor.name}: ${err.message}`;
					console.error(err);
				}
			}
			return game.settings.set("tormenta20", "systemMigrationVersion", game.system.version);
		}
	});

	/* -------------------------------------------- */
	/*  Other Hooks                                 */
	/* -------------------------------------------- */

	// Render Sidebar
	Hooks.on("renderSettings", (app, html) => {
		const documentation = html.querySelector(".documentation.flexcol");
		const section = document.createElement("section");
		section.classList.add("flexcol");

		const divider = document.createElement("h4");
		divider.classList.add("divider");
		divider.textContent = "Visite";

		const jambo = document.createElement("a");
		jambo.classList.add("button");
		jambo.href = "https://jamboeditora.com.br/";
		jambo.rel = "nofollow noopener";
		jambo.target = "_blank";
		jambo.textContent = "Jambô Editora";

		documentation.insertAdjacentElement("afterend", section);
		section.appendChild(divider);
		section.appendChild(jambo);
	});

	/* Chat Hooks */
	Hooks.on("renderChatMessageHTML", (app, html, data) => {
		hideDieFlavor(app, html);
		ApplyButtons(app, html);
		// Highlight critical success or failure die
		// chat.highlightCriticalSuccessFailure(app, html, data);

		// Optionally collapse the content
		const cardContent = html.querySelector(".card-content");
		const cardDamageDetails = html.querySelector(".card-damage-details");
		if (cardContent && (!cardContent.textContent.trim() || game.settings.get("tormenta20", "autoCollapseItemCards"))) {
			cardContent.style.display = "none";
		}

		if (cardDamageDetails) cardDamageDetails.style.display = "none";

		html
			.querySelectorAll(".item-name")
			.forEach((el) => el.addEventListener("click", _onChatCardToggleContent.bind(this)));
		html
			.querySelectorAll(".chat-message")
			.forEach((el) => el.addEventListener("click", _onChatCardToggleDamage.bind(this)));
		html
			.querySelectorAll(".chat-apply-ae")
			.forEach((el) => el.addEventListener("click", _onChatCardApplyEffect.bind(this)));
		html
			.querySelectorAll(".chat-place-template")
			.forEach((el) => el.addEventListener("click", _onChatPlaceTemplate.bind(this)));

		html
			.querySelectorAll(".apply-dmg")
			.forEach((el) => el.addEventListener("click", _onChatApplyDamage.bind(this)));
		html
			.querySelectorAll(".chat-spend-mana")
			.forEach((el) => el.addEventListener("click", _onChatSpendMana.bind(this)));
	});

	/* Add hook for End of Scene */
	Hooks.on("renderCombatTracker", async (app, html) => endSegment(app, html));

	/* Debug hook */
	// Hooks.on("modifyTokenAttribute", async (attribute, value, isDelta, isBar) => {
	// console.log("Debug hook: Debug hook");
	// }) ;
	/* Measured Templates*/
	// Hooks.on("preCreateActiveEffect", (ActiveEffect, object, options, userId) => {

	// });

	Hooks.on("getSceneControlButtons", (controls) => {
		controls.tokens.tools.range = {
			active: game.settings.get("tormenta20", "drawRanges"),
			icon: "fa-regular fa-circle-dot",
			name: "range",
			order: 5,
			title: "Alcances",
			visible: true,
			toggle: true,
			onChange: (_event, active) => {
				canvas.tokens.controlled.forEach((t) => t.renderFlags.set({ refreshState: true }));
				game.settings.set("tormenta20", "drawRanges", active);
			}
		};
	});

	Hooks.on("closeCompendiumT20", (compendium, html) => {
		compendium.collection.apps = [new Compendium(compendium.collection)];
	});

	Hooks.on("renderDialogV2", (_dialog, html) => {
		if (html.classList.contains("dialog-item-create")) {
			const select = html.querySelector("select[name=type]");
			const option = select?.querySelector("option");
			if (select && option) {
				const localize = (str) => game.i18n.localize(`T20.Item.CreationDialog.Categories.${str}`);
				select.append(extractOptGroup(select, localize("Physical"), ["arma", "equipamento", "consumivel", "tesouro"]));
				select.append(extractOptGroup(select, localize("Character"), ["classe", "poder", "race"]));
				select.append(extractOptGroup(select, localize("Other")));
				option.selected = true;
			}
		}
	});
}

function extractOptGroup(select, label, types) {
	const options = select.querySelectorAll(":scope > option");
	const filtered = [...options.values()].filter((option) => !types || types.includes(option.value));
	const optgroup = document.createElement("optgroup");
	optgroup.label = label;
	for (const physicalElement of filtered) {
		optgroup.appendChild(physicalElement);
	}

	return optgroup;
}

/** ************************************************************/
/* Module: Drag Ruler																				 */
/** ************************************************************/
Hooks.once("dragRuler.ready", (SpeedProvider) => {
	class Tormenta20SpeedProvider extends SpeedProvider {
		get colors() {
			return [
				{ id: "walk", default: 0x3222c7, name: "Deslocamento" },
				{ id: "dash", default: 0xffec07, name: "Dobro" },
				{ id: "run", default: 0xc033e0, name: "Triplo" },
				{ id: "run2", default: 0x1bcad8, name: "Quádruplo" }
			];
		}

		getRanges(token) {
			const baseSpeed = token.actor.system.attributes.movement.walk.base;
			const enjoadoLento = token.actor.system.referencias?.find(
				(condicao) => condicao.label === "Enjoado" || condicao.label === "Lento"
			);
			let runMultiplier = this.getSetting("dashMultiplier");
			if (enjoadoLento) runMultiplier = 1;
			const ranges = [
				{ range: baseSpeed, color: "walk" },
				{ range: baseSpeed * 2, color: "dash" },
				{ range: baseSpeed * 3, color: "run" },
				{ range: baseSpeed * 4, color: "run2" }
			];
			for (let i = runMultiplier, len = ranges.length; i < len; i++) {
				ranges.pop();
			}
			return ranges;
		}

		get settings() {
			return [
				{
					id: "dashMultiplier",
					name: "drag-ruler.genericSpeedProvider.settings.dashMultiplier.name",
					hint: "drag-ruler.genericSpeedProvider.settings.dashMultiplier.hint",
					scope: "world",
					config: true,
					type: Number,
					default: 2
				}
			];
		}
	}
	dragRuler.registerSystem("tormenta20", Tormenta20SpeedProvider);
});

// Module: Item Piles
Hooks.once("item-piles-ready", async () => {
	await game.itempiles.API.addSystemIntegration({
		VERSION: "1.0.0",
		ACTOR_CLASS_TYPE: "character",
		ITEM_CLASS_LOOT_TYPE: "tesouro",
		ITEM_CLASS_WEAPON_TYPE: "arma",
		ITEM_CLASS_EQUIPMENT_TYPE: "equipamento",
		ITEM_QUANTITY_ATTRIBUTE: "system.qtd",
		ITEM_PRICE_ATTRIBUTE: "system.preco",
		ITEM_FILTERS: [
			{
				path: "type",
				filters: "magia,poder,classe"
			},
			{
				path: "system.tipoUso",
				filters: "nat"
			}
		],
		ITEM_SIMILARITIES: ["name", "type"],
		CURRENCIES: [
			{
				type: "attribute",
				name: "Ouro",
				img: "icons/commodities/currency/coin-embossed-insect-gold.webp",
				abbreviation: "{#}TO",
				data: {
					path: "system.dinheiro.to"
				},
				primary: false,
				exchangeRate: 10,
				index: 0,
				id: "system.dinheiro.to"
			},
			{
				type: "attribute",
				name: "Prata",
				img: "icons/commodities/currency/coin-embossed-unicorn-silver.webp",
				abbreviation: "{#}TP",
				data: {
					path: "system.dinheiro.tp"
				},
				primary: true,
				exchangeRate: 1,
				index: 1,
				id: "system.dinheiro.tp"
			},
			{
				type: "attribute",
				name: "Cobre",
				img: "icons/commodities/currency/coin-engraved-waves-copper.webp",
				abbreviation: "{#}TC",
				data: {
					path: "system.dinheiro.tc"
				},
				primary: false,
				exchangeRate: 0.1,
				index: 2,
				id: "system.dinheiro.tc"
			}
		]
	});
});

class ActorDirectoryTormenta20 extends foundry.applications.sidebar.tabs.ActorDirectory {
	static _entryPartial = "systems/tormenta20/templates/sidebar/actor-document-partial.hbs";

	static DEFAULT_OPTIONS = {
		collection: "Actor",
		renderUpdateKeys: ["name", "img", "ownership", "sort", "folder", "system.attributes.nivel.value"]
	};
}

class ChatLogTormenta20 extends foundry.applications.sidebar.tabs.ChatLog {
	_getEntryContextOptions() {
		const context = super._getEntryContextOptions();
		const canApply = (li) => {
			const message = game.messages.get(li.dataset.messageId);
			return (
				(li.querySelector(".roll--dano") || message?.isRoll)
				&& message.rolls.some(
					(r) =>
						r.total
						&& r.options?.type !== "attack"
						&& r.terms.some((t) => !["curapv", "curatpv", "curapm", "curatpm"].includes(t.options?.flavor))
				)
				&& message?.isContentVisible
				&& canvas.tokens?.controlled.length
			);
		};
		const canApplyHeal = (li) => {
			const message = game.messages.get(li.dataset.messageId);
			return (
				(li.querySelector(".roll--dano") || message?.isRoll)
				&& message.rolls.some((r) => r.total)
				&& message?.isContentVisible
				&& canvas.tokens?.controlled.length
			);
		};
		const canApplyMana = (li) => {
			const message = game.messages.get(li.dataset.messageId);
			return (
				(li.querySelector(".mana-cost, .chat-spend-mana")
					|| (message?.isRoll
						&& message.rolls.some(
							(r) => r.total && r.options?.type !== "attack" && r.terms.every((t) => !t.options?.flavor)
						)))
				&& message.rolls.some((r) => r.total)
				&& message?.isContentVisible
				&& canvas.tokens?.controlled.length
			);
		};
		return [
			...context,
			{
				name: "Aplicar Dano",
				icon: '<i class="fas fa-user-minus" style="color: #CC0000;"></i>',
				value: 1,
				condition: canApply,
				callback: (li) => applyChatCardDamage(li, 1)
			},
			{
				name: "Aplicar Dano em Dobro",
				icon: '<i style="color: #CC0000;">2x </i>',
				condition: canApply,
				callback: (li) => applyChatCardDamage(li, 2)
			},
			{
				name: "Aplicar Dano pela Metade",
				icon: '<i style="color: #CC0000;">½ </i>',
				condition: canApply,
				callback: (li) => applyChatCardDamage(li, 0.5)
			},
			{
				name: "Aplicar Cura",
				icon: '<i class="fas fa-user-plus" style="color: #00AA00;"></i>',
				condition: canApplyHeal,
				callback: (li) => applyChatCardDamage(li, -1, "curapv")
			},
			{
				name: "Gastar Mana",
				icon: '<i class="fas fa-star" style="color: #33A0FF;"></i>',
				condition: canApplyMana,
				callback: (li) => applyChatManaSpend(li, 0)
			}
		];
	}
}

/** @ignore */
const ENTRIES = 'ENTRIES';
/** @ignore */
const KEYS = 'KEYS';
/** @ignore */
const VALUES = 'VALUES';
/** @ignore */
const LEAF = '';
/**
 * @private
 */
class TreeIterator {
    constructor(set, type) {
        const node = set._tree;
        const keys = Array.from(node.keys());
        this.set = set;
        this._type = type;
        this._path = keys.length > 0 ? [{ node, keys }] : [];
    }
    next() {
        const value = this.dive();
        this.backtrack();
        return value;
    }
    dive() {
        if (this._path.length === 0) {
            return { done: true, value: undefined };
        }
        const { node, keys } = last$1(this._path);
        if (last$1(keys) === LEAF) {
            return { done: false, value: this.result() };
        }
        const child = node.get(last$1(keys));
        this._path.push({ node: child, keys: Array.from(child.keys()) });
        return this.dive();
    }
    backtrack() {
        if (this._path.length === 0) {
            return;
        }
        const keys = last$1(this._path).keys;
        keys.pop();
        if (keys.length > 0) {
            return;
        }
        this._path.pop();
        this.backtrack();
    }
    key() {
        return this.set._prefix + this._path
            .map(({ keys }) => last$1(keys))
            .filter(key => key !== LEAF)
            .join('');
    }
    value() {
        return last$1(this._path).node.get(LEAF);
    }
    result() {
        switch (this._type) {
            case VALUES: return this.value();
            case KEYS: return this.key();
            default: return [this.key(), this.value()];
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}
const last$1 = (array) => {
    return array[array.length - 1];
};

/* eslint-disable no-labels */
/**
 * @ignore
 */
const fuzzySearch = (node, query, maxDistance) => {
    const results = new Map();
    if (query === undefined)
        return results;
    // Number of columns in the Levenshtein matrix.
    const n = query.length + 1;
    // Matching terms can never be longer than N + maxDistance.
    const m = n + maxDistance;
    // Fill first matrix row and column with numbers: 0 1 2 3 ...
    const matrix = new Uint8Array(m * n).fill(maxDistance + 1);
    for (let j = 0; j < n; ++j)
        matrix[j] = j;
    for (let i = 1; i < m; ++i)
        matrix[i * n] = i;
    recurse(node, query, maxDistance, results, matrix, 1, n, '');
    return results;
};
// Modified version of http://stevehanov.ca/blog/?id=114
// This builds a Levenshtein matrix for a given query and continuously updates
// it for nodes in the radix tree that fall within the given maximum edit
// distance. Keeping the same matrix around is beneficial especially for larger
// edit distances.
//
//           k   a   t   e   <-- query
//       0   1   2   3   4
//   c   1   1   2   3   4
//   a   2   2   1   2   3
//   t   3   3   2   1  [2]  <-- edit distance
//   ^
//   ^ term in radix tree, rows are added and removed as needed
const recurse = (node, query, maxDistance, results, matrix, m, n, prefix) => {
    const offset = m * n;
    key: for (const key of node.keys()) {
        if (key === LEAF) {
            // We've reached a leaf node. Check if the edit distance acceptable and
            // store the result if it is.
            const distance = matrix[offset - 1];
            if (distance <= maxDistance) {
                results.set(prefix, [node.get(key), distance]);
            }
        }
        else {
            // Iterate over all characters in the key. Update the Levenshtein matrix
            // and check if the minimum distance in the last row is still within the
            // maximum edit distance. If it is, we can recurse over all child nodes.
            let i = m;
            for (let pos = 0; pos < key.length; ++pos, ++i) {
                const char = key[pos];
                const thisRowOffset = n * i;
                const prevRowOffset = thisRowOffset - n;
                // Set the first column based on the previous row, and initialize the
                // minimum distance in the current row.
                let minDistance = matrix[thisRowOffset];
                const jmin = Math.max(0, i - maxDistance - 1);
                const jmax = Math.min(n - 1, i + maxDistance);
                // Iterate over remaining columns (characters in the query).
                for (let j = jmin; j < jmax; ++j) {
                    const different = char !== query[j];
                    // It might make sense to only read the matrix positions used for
                    // deletion/insertion if the characters are different. But we want to
                    // avoid conditional reads for performance reasons.
                    const rpl = matrix[prevRowOffset + j] + +different;
                    const del = matrix[prevRowOffset + j + 1] + 1;
                    const ins = matrix[thisRowOffset + j] + 1;
                    const dist = matrix[thisRowOffset + j + 1] = Math.min(rpl, del, ins);
                    if (dist < minDistance)
                        minDistance = dist;
                }
                // Because distance will never decrease, we can stop. There will be no
                // matching child nodes.
                if (minDistance > maxDistance) {
                    continue key;
                }
            }
            recurse(node.get(key), query, maxDistance, results, matrix, i, n, prefix + key);
        }
    }
};

/* eslint-disable no-labels */
/**
 * A class implementing the same interface as a standard JavaScript
 * [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * with string keys, but adding support for efficiently searching entries with
 * prefix or fuzzy search. This class is used internally by {@link MiniSearch}
 * as the inverted index data structure. The implementation is a radix tree
 * (compressed prefix tree).
 *
 * Since this class can be of general utility beyond _MiniSearch_, it is
 * exported by the `minisearch` package and can be imported (or required) as
 * `minisearch/SearchableMap`.
 *
 * @typeParam T  The type of the values stored in the map.
 */
class SearchableMap {
    /**
     * The constructor is normally called without arguments, creating an empty
     * map. In order to create a {@link SearchableMap} from an iterable or from an
     * object, check {@link SearchableMap.from} and {@link
     * SearchableMap.fromObject}.
     *
     * The constructor arguments are for internal use, when creating derived
     * mutable views of a map at a prefix.
     */
    constructor(tree = new Map(), prefix = '') {
        this._size = undefined;
        this._tree = tree;
        this._prefix = prefix;
    }
    /**
     * Creates and returns a mutable view of this {@link SearchableMap},
     * containing only entries that share the given prefix.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set("unicorn", 1)
     * map.set("universe", 2)
     * map.set("university", 3)
     * map.set("unique", 4)
     * map.set("hello", 5)
     *
     * let uni = map.atPrefix("uni")
     * uni.get("unique") // => 4
     * uni.get("unicorn") // => 1
     * uni.get("hello") // => undefined
     *
     * let univer = map.atPrefix("univer")
     * univer.get("unique") // => undefined
     * univer.get("universe") // => 2
     * univer.get("university") // => 3
     * ```
     *
     * @param prefix  The prefix
     * @return A {@link SearchableMap} representing a mutable view of the original
     * Map at the given prefix
     */
    atPrefix(prefix) {
        if (!prefix.startsWith(this._prefix)) {
            throw new Error('Mismatched prefix');
        }
        const [node, path] = trackDown(this._tree, prefix.slice(this._prefix.length));
        if (node === undefined) {
            const [parentNode, key] = last(path);
            for (const k of parentNode.keys()) {
                if (k !== LEAF && k.startsWith(key)) {
                    const node = new Map();
                    node.set(k.slice(key.length), parentNode.get(k));
                    return new SearchableMap(node, prefix);
                }
            }
        }
        return new SearchableMap(node, prefix);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
     */
    clear() {
        this._size = undefined;
        this._tree.clear();
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
     * @param key  Key to delete
     */
    delete(key) {
        this._size = undefined;
        return remove(this._tree, key);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
     * @return An iterator iterating through `[key, value]` entries.
     */
    entries() {
        return new TreeIterator(this, ENTRIES);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
     * @param fn  Iteration function
     */
    forEach(fn) {
        for (const [key, value] of this) {
            fn(key, value, this);
        }
    }
    /**
     * Returns a Map of all the entries that have a key within the given edit
     * distance from the search key. The keys of the returned Map are the matching
     * keys, while the values are two-element arrays where the first element is
     * the value associated to the key, and the second is the edit distance of the
     * key to the search key.
     *
     * ### Usage:
     *
     * ```javascript
     * let map = new SearchableMap()
     * map.set('hello', 'world')
     * map.set('hell', 'yeah')
     * map.set('ciao', 'mondo')
     *
     * // Get all entries that match the key 'hallo' with a maximum edit distance of 2
     * map.fuzzyGet('hallo', 2)
     * // => Map(2) { 'hello' => ['world', 1], 'hell' => ['yeah', 2] }
     *
     * // In the example, the "hello" key has value "world" and edit distance of 1
     * // (change "e" to "a"), the key "hell" has value "yeah" and edit distance of 2
     * // (change "e" to "a", delete "o")
     * ```
     *
     * @param key  The search key
     * @param maxEditDistance  The maximum edit distance (Levenshtein)
     * @return A Map of the matching keys to their value and edit distance
     */
    fuzzyGet(key, maxEditDistance) {
        return fuzzySearch(this._tree, key, maxEditDistance);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
     * @param key  Key to get
     * @return Value associated to the key, or `undefined` if the key is not
     * found.
     */
    get(key) {
        const node = lookup(this._tree, key);
        return node !== undefined ? node.get(LEAF) : undefined;
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
     * @param key  Key
     * @return True if the key is in the map, false otherwise
     */
    has(key) {
        const node = lookup(this._tree, key);
        return node !== undefined && node.has(LEAF);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
     * @return An `Iterable` iterating through keys
     */
    keys() {
        return new TreeIterator(this, KEYS);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
     * @param key  Key to set
     * @param value  Value to associate to the key
     * @return The {@link SearchableMap} itself, to allow chaining
     */
    set(key, value) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        const node = createPath(this._tree, key);
        node.set(LEAF, value);
        return this;
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
     */
    get size() {
        if (this._size) {
            return this._size;
        }
        /** @ignore */
        this._size = 0;
        const iter = this.entries();
        while (!iter.next().done)
            this._size += 1;
        return this._size;
    }
    /**
     * Updates the value at the given key using the provided function. The function
     * is called with the current value at the key, and its return value is used as
     * the new value to be set.
     *
     * ### Example:
     *
     * ```javascript
     * // Increment the current value by one
     * searchableMap.update('somekey', (currentValue) => currentValue == null ? 0 : currentValue + 1)
     * ```
     *
     * If the value at the given key is or will be an object, it might not require
     * re-assignment. In that case it is better to use `fetch()`, because it is
     * faster.
     *
     * @param key  The key to update
     * @param fn  The function used to compute the new value from the current one
     * @return The {@link SearchableMap} itself, to allow chaining
     */
    update(key, fn) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        const node = createPath(this._tree, key);
        node.set(LEAF, fn(node.get(LEAF)));
        return this;
    }
    /**
     * Fetches the value of the given key. If the value does not exist, calls the
     * given function to create a new value, which is inserted at the given key
     * and subsequently returned.
     *
     * ### Example:
     *
     * ```javascript
     * const map = searchableMap.fetch('somekey', () => new Map())
     * map.set('foo', 'bar')
     * ```
     *
     * @param key  The key to update
     * @param initial  A function that creates a new value if the key does not exist
     * @return The existing or new value at the given key
     */
    fetch(key, initial) {
        if (typeof key !== 'string') {
            throw new Error('key must be a string');
        }
        this._size = undefined;
        const node = createPath(this._tree, key);
        let value = node.get(LEAF);
        if (value === undefined) {
            node.set(LEAF, value = initial());
        }
        return value;
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
     * @return An `Iterable` iterating through values.
     */
    values() {
        return new TreeIterator(this, VALUES);
    }
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
     */
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * Creates a {@link SearchableMap} from an `Iterable` of entries
     *
     * @param entries  Entries to be inserted in the {@link SearchableMap}
     * @return A new {@link SearchableMap} with the given entries
     */
    static from(entries) {
        const tree = new SearchableMap();
        for (const [key, value] of entries) {
            tree.set(key, value);
        }
        return tree;
    }
    /**
     * Creates a {@link SearchableMap} from the iterable properties of a JavaScript object
     *
     * @param object  Object of entries for the {@link SearchableMap}
     * @return A new {@link SearchableMap} with the given entries
     */
    static fromObject(object) {
        return SearchableMap.from(Object.entries(object));
    }
}
const trackDown = (tree, key, path = []) => {
    if (key.length === 0 || tree == null) {
        return [tree, path];
    }
    for (const k of tree.keys()) {
        if (k !== LEAF && key.startsWith(k)) {
            path.push([tree, k]); // performance: update in place
            return trackDown(tree.get(k), key.slice(k.length), path);
        }
    }
    path.push([tree, key]); // performance: update in place
    return trackDown(undefined, '', path);
};
const lookup = (tree, key) => {
    if (key.length === 0 || tree == null) {
        return tree;
    }
    for (const k of tree.keys()) {
        if (k !== LEAF && key.startsWith(k)) {
            return lookup(tree.get(k), key.slice(k.length));
        }
    }
};
// Create a path in the radix tree for the given key, and returns the deepest
// node. This function is in the hot path for indexing. It avoids unnecessary
// string operations and recursion for performance.
const createPath = (node, key) => {
    const keyLength = key.length;
    outer: for (let pos = 0; node && pos < keyLength;) {
        for (const k of node.keys()) {
            // Check whether this key is a candidate: the first characters must match.
            if (k !== LEAF && key[pos] === k[0]) {
                const len = Math.min(keyLength - pos, k.length);
                // Advance offset to the point where key and k no longer match.
                let offset = 1;
                while (offset < len && key[pos + offset] === k[offset])
                    ++offset;
                const child = node.get(k);
                if (offset === k.length) {
                    // The existing key is shorter than the key we need to create.
                    node = child;
                }
                else {
                    // Partial match: we need to insert an intermediate node to contain
                    // both the existing subtree and the new node.
                    const intermediate = new Map();
                    intermediate.set(k.slice(offset), child);
                    node.set(key.slice(pos, pos + offset), intermediate);
                    node.delete(k);
                    node = intermediate;
                }
                pos += offset;
                continue outer;
            }
        }
        // Create a final child node to contain the final suffix of the key.
        const child = new Map();
        node.set(key.slice(pos), child);
        return child;
    }
    return node;
};
const remove = (tree, key) => {
    const [node, path] = trackDown(tree, key);
    if (node === undefined) {
        return;
    }
    node.delete(LEAF);
    if (node.size === 0) {
        cleanup(path);
    }
    else if (node.size === 1) {
        const [key, value] = node.entries().next().value;
        merge(path, key, value);
    }
};
const cleanup = (path) => {
    if (path.length === 0) {
        return;
    }
    const [node, key] = last(path);
    node.delete(key);
    if (node.size === 0) {
        cleanup(path.slice(0, -1));
    }
    else if (node.size === 1) {
        const [key, value] = node.entries().next().value;
        if (key !== LEAF) {
            merge(path.slice(0, -1), key, value);
        }
    }
};
const merge = (path, key, value) => {
    if (path.length === 0) {
        return;
    }
    const [node, nodeKey] = last(path);
    node.set(nodeKey + key, value);
    node.delete(nodeKey);
};
const last = (array) => {
    return array[array.length - 1];
};

const OR = 'or';
const AND = 'and';
const AND_NOT = 'and_not';
/**
 * {@link MiniSearch} is the main entrypoint class, implementing a full-text
 * search engine in memory.
 *
 * @typeParam T  The type of the documents being indexed.
 *
 * ### Basic example:
 *
 * ```javascript
 * const documents = [
 *   {
 *     id: 1,
 *     title: 'Moby Dick',
 *     text: 'Call me Ishmael. Some years ago...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 2,
 *     title: 'Zen and the Art of Motorcycle Maintenance',
 *     text: 'I can see by my watch...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 3,
 *     title: 'Neuromancer',
 *     text: 'The sky above the port was...',
 *     category: 'fiction'
 *   },
 *   {
 *     id: 4,
 *     title: 'Zen and the Art of Archery',
 *     text: 'At first sight it must seem...',
 *     category: 'non-fiction'
 *   },
 *   // ...and more
 * ]
 *
 * // Create a search engine that indexes the 'title' and 'text' fields for
 * // full-text search. Search results will include 'title' and 'category' (plus the
 * // id field, that is always stored and returned)
 * const miniSearch = new MiniSearch({
 *   fields: ['title', 'text'],
 *   storeFields: ['title', 'category']
 * })
 *
 * // Add documents to the index
 * miniSearch.addAll(documents)
 *
 * // Search for documents:
 * let results = miniSearch.search('zen art motorcycle')
 * // => [
 * //   { id: 2, title: 'Zen and the Art of Motorcycle Maintenance', category: 'fiction', score: 2.77258 },
 * //   { id: 4, title: 'Zen and the Art of Archery', category: 'non-fiction', score: 1.38629 }
 * // ]
 * ```
 */
class MiniSearch {
    /**
     * @param options  Configuration options
     *
     * ### Examples:
     *
     * ```javascript
     * // Create a search engine that indexes the 'title' and 'text' fields of your
     * // documents:
     * const miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * ```
     *
     * ### ID Field:
     *
     * ```javascript
     * // Your documents are assumed to include a unique 'id' field, but if you want
     * // to use a different field for document identification, you can set the
     * // 'idField' option:
     * const miniSearch = new MiniSearch({ idField: 'key', fields: ['title', 'text'] })
     * ```
     *
     * ### Options and defaults:
     *
     * ```javascript
     * // The full set of options (here with their default value) is:
     * const miniSearch = new MiniSearch({
     *   // idField: field that uniquely identifies a document
     *   idField: 'id',
     *
     *   // extractField: function used to get the value of a field in a document.
     *   // By default, it assumes the document is a flat object with field names as
     *   // property keys and field values as string property values, but custom logic
     *   // can be implemented by setting this option to a custom extractor function.
     *   extractField: (document, fieldName) => document[fieldName],
     *
     *   // tokenize: function used to split fields into individual terms. By
     *   // default, it is also used to tokenize search queries, unless a specific
     *   // `tokenize` search option is supplied. When tokenizing an indexed field,
     *   // the field name is passed as the second argument.
     *   tokenize: (string, _fieldName) => string.split(SPACE_OR_PUNCTUATION),
     *
     *   // processTerm: function used to process each tokenized term before
     *   // indexing. It can be used for stemming and normalization. Return a falsy
     *   // value in order to discard a term. By default, it is also used to process
     *   // search queries, unless a specific `processTerm` option is supplied as a
     *   // search option. When processing a term from a indexed field, the field
     *   // name is passed as the second argument.
     *   processTerm: (term, _fieldName) => term.toLowerCase(),
     *
     *   // searchOptions: default search options, see the `search` method for
     *   // details
     *   searchOptions: undefined,
     *
     *   // fields: document fields to be indexed. Mandatory, but not set by default
     *   fields: undefined
     *
     *   // storeFields: document fields to be stored and returned as part of the
     *   // search results.
     *   storeFields: []
     * })
     * ```
     */
    constructor(options) {
        if ((options === null || options === void 0 ? void 0 : options.fields) == null) {
            throw new Error('MiniSearch: option "fields" must be provided');
        }
        const autoVacuum = (options.autoVacuum == null || options.autoVacuum === true) ? defaultAutoVacuumOptions : options.autoVacuum;
        this._options = {
            ...defaultOptions,
            ...options,
            autoVacuum,
            searchOptions: { ...defaultSearchOptions, ...(options.searchOptions || {}) },
            autoSuggestOptions: { ...defaultAutoSuggestOptions, ...(options.autoSuggestOptions || {}) }
        };
        this._index = new SearchableMap();
        this._documentCount = 0;
        this._documentIds = new Map();
        this._idToShortId = new Map();
        // Fields are defined during initialization, don't change, are few in
        // number, rarely need iterating over, and have string keys. Therefore in
        // this case an object is a better candidate than a Map to store the mapping
        // from field key to ID.
        this._fieldIds = {};
        this._fieldLength = new Map();
        this._avgFieldLength = [];
        this._nextId = 0;
        this._storedFields = new Map();
        this._dirtCount = 0;
        this._currentVacuum = null;
        this._enqueuedVacuum = null;
        this._enqueuedVacuumConditions = defaultVacuumConditions;
        this.addFields(this._options.fields);
    }
    /**
     * Adds a document to the index
     *
     * @param document  The document to be indexed
     */
    add(document) {
        const { extractField, tokenize, processTerm, fields, idField } = this._options;
        const id = extractField(document, idField);
        if (id == null) {
            throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
        }
        if (this._idToShortId.has(id)) {
            throw new Error(`MiniSearch: duplicate ID ${id}`);
        }
        const shortDocumentId = this.addDocumentId(id);
        this.saveStoredFields(shortDocumentId, document);
        for (const field of fields) {
            const fieldValue = extractField(document, field);
            if (fieldValue == null)
                continue;
            const tokens = tokenize(fieldValue.toString(), field);
            const fieldId = this._fieldIds[field];
            const uniqueTerms = new Set(tokens).size;
            this.addFieldLength(shortDocumentId, fieldId, this._documentCount - 1, uniqueTerms);
            for (const term of tokens) {
                const processedTerm = processTerm(term, field);
                if (Array.isArray(processedTerm)) {
                    for (const t of processedTerm) {
                        this.addTerm(fieldId, shortDocumentId, t);
                    }
                }
                else if (processedTerm) {
                    this.addTerm(fieldId, shortDocumentId, processedTerm);
                }
            }
        }
    }
    /**
     * Adds all the given documents to the index
     *
     * @param documents  An array of documents to be indexed
     */
    addAll(documents) {
        for (const document of documents)
            this.add(document);
    }
    /**
     * Adds all the given documents to the index asynchronously.
     *
     * Returns a promise that resolves (to `undefined`) when the indexing is done.
     * This method is useful when index many documents, to avoid blocking the main
     * thread. The indexing is performed asynchronously and in chunks.
     *
     * @param documents  An array of documents to be indexed
     * @param options  Configuration options
     * @return A promise resolving to `undefined` when the indexing is done
     */
    addAllAsync(documents, options = {}) {
        const { chunkSize = 10 } = options;
        const acc = { chunk: [], promise: Promise.resolve() };
        const { chunk, promise } = documents.reduce(({ chunk, promise }, document, i) => {
            chunk.push(document);
            if ((i + 1) % chunkSize === 0) {
                return {
                    chunk: [],
                    promise: promise
                        .then(() => new Promise(resolve => setTimeout(resolve, 0)))
                        .then(() => this.addAll(chunk))
                };
            }
            else {
                return { chunk, promise };
            }
        }, acc);
        return promise.then(() => this.addAll(chunk));
    }
    /**
     * Removes the given document from the index.
     *
     * The document to remove must NOT have changed between indexing and removal,
     * otherwise the index will be corrupted.
     *
     * This method requires passing the full document to be removed (not just the
     * ID), and immediately removes the document from the inverted index, allowing
     * memory to be released. A convenient alternative is {@link
     * MiniSearch#discard}, which needs only the document ID, and has the same
     * visible effect, but delays cleaning up the index until the next vacuuming.
     *
     * @param document  The document to be removed
     */
    remove(document) {
        const { tokenize, processTerm, extractField, fields, idField } = this._options;
        const id = extractField(document, idField);
        if (id == null) {
            throw new Error(`MiniSearch: document does not have ID field "${idField}"`);
        }
        const shortId = this._idToShortId.get(id);
        if (shortId == null) {
            throw new Error(`MiniSearch: cannot remove document with ID ${id}: it is not in the index`);
        }
        for (const field of fields) {
            const fieldValue = extractField(document, field);
            if (fieldValue == null)
                continue;
            const tokens = tokenize(fieldValue.toString(), field);
            const fieldId = this._fieldIds[field];
            const uniqueTerms = new Set(tokens).size;
            this.removeFieldLength(shortId, fieldId, this._documentCount, uniqueTerms);
            for (const term of tokens) {
                const processedTerm = processTerm(term, field);
                if (Array.isArray(processedTerm)) {
                    for (const t of processedTerm) {
                        this.removeTerm(fieldId, shortId, t);
                    }
                }
                else if (processedTerm) {
                    this.removeTerm(fieldId, shortId, processedTerm);
                }
            }
        }
        this._storedFields.delete(shortId);
        this._documentIds.delete(shortId);
        this._idToShortId.delete(id);
        this._fieldLength.delete(shortId);
        this._documentCount -= 1;
    }
    /**
     * Removes all the given documents from the index. If called with no arguments,
     * it removes _all_ documents from the index.
     *
     * @param documents  The documents to be removed. If this argument is omitted,
     * all documents are removed. Note that, for removing all documents, it is
     * more efficient to call this method with no arguments than to pass all
     * documents.
     */
    removeAll(documents) {
        if (documents) {
            for (const document of documents)
                this.remove(document);
        }
        else if (arguments.length > 0) {
            throw new Error('Expected documents to be present. Omit the argument to remove all documents.');
        }
        else {
            this._index = new SearchableMap();
            this._documentCount = 0;
            this._documentIds = new Map();
            this._idToShortId = new Map();
            this._fieldLength = new Map();
            this._avgFieldLength = [];
            this._storedFields = new Map();
            this._nextId = 0;
        }
    }
    /**
     * Discards the document with the given ID, so it won't appear in search results
     *
     * It has the same visible effect of {@link MiniSearch.remove} (both cause the
     * document to stop appearing in searches), but a different effect on the
     * internal data structures:
     *
     *   - {@link MiniSearch#remove} requires passing the full document to be
     *   removed as argument, and removes it from the inverted index immediately.
     *
     *   - {@link MiniSearch#discard} instead only needs the document ID, and
     *   works by marking the current version of the document as discarded, so it
     *   is immediately ignored by searches. This is faster and more convenient
     *   than {@link MiniSearch#remove}, but the index is not immediately
     *   modified. To take care of that, vacuuming is performed after a certain
     *   number of documents are discarded, cleaning up the index and allowing
     *   memory to be released.
     *
     * After discarding a document, it is possible to re-add a new version, and
     * only the new version will appear in searches. In other words, discarding
     * and re-adding a document works exactly like removing and re-adding it. The
     * {@link MiniSearch.replace} method can also be used to replace a document
     * with a new version.
     *
     * #### Details about vacuuming
     *
     * Repetite calls to this method would leave obsolete document references in
     * the index, invisible to searches. Two mechanisms take care of cleaning up:
     * clean up during search, and vacuuming.
     *
     *   - Upon search, whenever a discarded ID is found (and ignored for the
     *   results), references to the discarded document are removed from the
     *   inverted index entries for the search terms. This ensures that subsequent
     *   searches for the same terms do not need to skip these obsolete references
     *   again.
     *
     *   - In addition, vacuuming is performed automatically by default (see the
     *   `autoVacuum` field in {@link Options}) after a certain number of
     *   documents are discarded. Vacuuming traverses all terms in the index,
     *   cleaning up all references to discarded documents. Vacuuming can also be
     *   triggered manually by calling {@link MiniSearch#vacuum}.
     *
     * @param id  The ID of the document to be discarded
     */
    discard(id) {
        const shortId = this._idToShortId.get(id);
        if (shortId == null) {
            throw new Error(`MiniSearch: cannot discard document with ID ${id}: it is not in the index`);
        }
        this._idToShortId.delete(id);
        this._documentIds.delete(shortId);
        this._storedFields.delete(shortId);
        (this._fieldLength.get(shortId) || []).forEach((fieldLength, fieldId) => {
            this.removeFieldLength(shortId, fieldId, this._documentCount, fieldLength);
        });
        this._fieldLength.delete(shortId);
        this._documentCount -= 1;
        this._dirtCount += 1;
        this.maybeAutoVacuum();
    }
    maybeAutoVacuum() {
        if (this._options.autoVacuum === false) {
            return;
        }
        const { minDirtFactor, minDirtCount, batchSize, batchWait } = this._options.autoVacuum;
        this.conditionalVacuum({ batchSize, batchWait }, { minDirtCount, minDirtFactor });
    }
    /**
     * Discards the documents with the given IDs, so they won't appear in search
     * results
     *
     * It is equivalent to calling {@link MiniSearch#discard} for all the given
     * IDs, but with the optimization of triggering at most one automatic
     * vacuuming at the end.
     *
     * Note: to remove all documents from the index, it is faster and more
     * convenient to call {@link MiniSearch.removeAll} with no argument, instead
     * of passing all IDs to this method.
     */
    discardAll(ids) {
        const autoVacuum = this._options.autoVacuum;
        try {
            this._options.autoVacuum = false;
            for (const id of ids) {
                this.discard(id);
            }
        }
        finally {
            this._options.autoVacuum = autoVacuum;
        }
        this.maybeAutoVacuum();
    }
    /**
     * It replaces an existing document with the given updated version
     *
     * It works by discarding the current version and adding the updated one, so
     * it is functionally equivalent to calling {@link MiniSearch#discard}
     * followed by {@link MiniSearch#add}. The ID of the updated document should
     * be the same as the original one.
     *
     * Since it uses {@link MiniSearch#discard} internally, this method relies on
     * vacuuming to clean up obsolete document references from the index, allowing
     * memory to be released (see {@link MiniSearch#discard}).
     *
     * @param updatedDocument  The updated document to replace the old version
     * with
     */
    replace(updatedDocument) {
        const { idField, extractField } = this._options;
        const id = extractField(updatedDocument, idField);
        this.discard(id);
        this.add(updatedDocument);
    }
    /**
     * Triggers a manual vacuuming, cleaning up references to discarded documents
     * from the inverted index
     *
     * Vacuuming is only useful for applications that use the {@link
     * MiniSearch#discard} or {@link MiniSearch#replace} methods.
     *
     * By default, vacuuming is performed automatically when needed (controlled by
     * the `autoVacuum` field in {@link Options}), so there is usually no need to
     * call this method, unless one wants to make sure to perform vacuuming at a
     * specific moment.
     *
     * Vacuuming traverses all terms in the inverted index in batches, and cleans
     * up references to discarded documents from the posting list, allowing memory
     * to be released.
     *
     * The method takes an optional object as argument with the following keys:
     *
     *   - `batchSize`: the size of each batch (1000 by default)
     *
     *   - `batchWait`: the number of milliseconds to wait between batches (10 by
     *   default)
     *
     * On large indexes, vacuuming could have a non-negligible cost: batching
     * avoids blocking the thread for long, diluting this cost so that it is not
     * negatively affecting the application. Nonetheless, this method should only
     * be called when necessary, and relying on automatic vacuuming is usually
     * better.
     *
     * It returns a promise that resolves (to undefined) when the clean up is
     * completed. If vacuuming is already ongoing at the time this method is
     * called, a new one is enqueued immediately after the ongoing one, and a
     * corresponding promise is returned. However, no more than one vacuuming is
     * enqueued on top of the ongoing one, even if this method is called more
     * times (enqueuing multiple ones would be useless).
     *
     * @param options  Configuration options for the batch size and delay. See
     * {@link VacuumOptions}.
     */
    vacuum(options = {}) {
        return this.conditionalVacuum(options);
    }
    conditionalVacuum(options, conditions) {
        // If a vacuum is already ongoing, schedule another as soon as it finishes,
        // unless there's already one enqueued. If one was already enqueued, do not
        // enqueue another on top, but make sure that the conditions are the
        // broadest.
        if (this._currentVacuum) {
            this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && conditions;
            if (this._enqueuedVacuum != null) {
                return this._enqueuedVacuum;
            }
            this._enqueuedVacuum = this._currentVacuum.then(() => {
                const conditions = this._enqueuedVacuumConditions;
                this._enqueuedVacuumConditions = defaultVacuumConditions;
                return this.performVacuuming(options, conditions);
            });
            return this._enqueuedVacuum;
        }
        if (this.vacuumConditionsMet(conditions) === false) {
            return Promise.resolve();
        }
        this._currentVacuum = this.performVacuuming(options);
        return this._currentVacuum;
    }
    async performVacuuming(options, conditions) {
        const initialDirtCount = this._dirtCount;
        if (this.vacuumConditionsMet(conditions)) {
            const batchSize = options.batchSize || defaultVacuumOptions.batchSize;
            const batchWait = options.batchWait || defaultVacuumOptions.batchWait;
            let i = 1;
            for (const [term, fieldsData] of this._index) {
                for (const [fieldId, fieldIndex] of fieldsData) {
                    for (const [shortId] of fieldIndex) {
                        if (this._documentIds.has(shortId)) {
                            continue;
                        }
                        if (fieldIndex.size <= 1) {
                            fieldsData.delete(fieldId);
                        }
                        else {
                            fieldIndex.delete(shortId);
                        }
                    }
                }
                if (this._index.get(term).size === 0) {
                    this._index.delete(term);
                }
                if (i % batchSize === 0) {
                    await new Promise((resolve) => setTimeout(resolve, batchWait));
                }
                i += 1;
            }
            this._dirtCount -= initialDirtCount;
        }
        // Make the next lines always async, so they execute after this function returns
        await null;
        this._currentVacuum = this._enqueuedVacuum;
        this._enqueuedVacuum = null;
    }
    vacuumConditionsMet(conditions) {
        if (conditions == null) {
            return true;
        }
        let { minDirtCount, minDirtFactor } = conditions;
        minDirtCount = minDirtCount || defaultAutoVacuumOptions.minDirtCount;
        minDirtFactor = minDirtFactor || defaultAutoVacuumOptions.minDirtFactor;
        return this.dirtCount >= minDirtCount && this.dirtFactor >= minDirtFactor;
    }
    /**
     * Is `true` if a vacuuming operation is ongoing, `false` otherwise
     */
    get isVacuuming() {
        return this._currentVacuum != null;
    }
    /**
     * The number of documents discarded since the most recent vacuuming
     */
    get dirtCount() {
        return this._dirtCount;
    }
    /**
     * A number between 0 and 1 giving an indication about the proportion of
     * documents that are discarded, and can therefore be cleaned up by vacuuming.
     * A value close to 0 means that the index is relatively clean, while a higher
     * value means that the index is relatively dirty, and vacuuming could release
     * memory.
     */
    get dirtFactor() {
        return this._dirtCount / (1 + this._documentCount + this._dirtCount);
    }
    /**
     * Returns `true` if a document with the given ID is present in the index and
     * available for search, `false` otherwise
     *
     * @param id  The document ID
     */
    has(id) {
        return this._idToShortId.has(id);
    }
    /**
     * Returns the stored fields (as configured in the `storeFields` constructor
     * option) for the given document ID. Returns `undefined` if the document is
     * not present in the index.
     *
     * @param id  The document ID
     */
    getStoredFields(id) {
        const shortId = this._idToShortId.get(id);
        if (shortId == null) {
            return undefined;
        }
        return this._storedFields.get(shortId);
    }
    /**
     * Search for documents matching the given search query.
     *
     * The result is a list of scored document IDs matching the query, sorted by
     * descending score, and each including data about which terms were matched and
     * in which fields.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Search for "zen art motorcycle" with default options: terms have to match
     * // exactly, and individual terms are joined with OR
     * miniSearch.search('zen art motorcycle')
     * // => [ { id: 2, score: 2.77258, match: { ... } }, { id: 4, score: 1.38629, match: { ... } } ]
     * ```
     *
     * ### Restrict search to specific fields:
     *
     * ```javascript
     * // Search only in the 'title' field
     * miniSearch.search('zen', { fields: ['title'] })
     * ```
     *
     * ### Field boosting:
     *
     * ```javascript
     * // Boost a field
     * miniSearch.search('zen', { boost: { title: 2 } })
     * ```
     *
     * ### Prefix search:
     *
     * ```javascript
     * // Search for "moto" with prefix search (it will match documents
     * // containing terms that start with "moto" or "neuro")
     * miniSearch.search('moto neuro', { prefix: true })
     * ```
     *
     * ### Fuzzy search:
     *
     * ```javascript
     * // Search for "ismael" with fuzzy search (it will match documents containing
     * // terms similar to "ismael", with a maximum edit distance of 0.2 term.length
     * // (rounded to nearest integer)
     * miniSearch.search('ismael', { fuzzy: 0.2 })
     * ```
     *
     * ### Combining strategies:
     *
     * ```javascript
     * // Mix of exact match, prefix search, and fuzzy search
     * miniSearch.search('ismael mob', {
     *  prefix: true,
     *  fuzzy: 0.2
     * })
     * ```
     *
     * ### Advanced prefix and fuzzy search:
     *
     * ```javascript
     * // Perform fuzzy and prefix search depending on the search term. Here
     * // performing prefix and fuzzy search only on terms longer than 3 characters
     * miniSearch.search('ismael mob', {
     *  prefix: term => term.length > 3
     *  fuzzy: term => term.length > 3 ? 0.2 : null
     * })
     * ```
     *
     * ### Combine with AND:
     *
     * ```javascript
     * // Combine search terms with AND (to match only documents that contain both
     * // "motorcycle" and "art")
     * miniSearch.search('motorcycle art', { combineWith: 'AND' })
     * ```
     *
     * ### Combine with AND_NOT:
     *
     * There is also an AND_NOT combinator, that finds documents that match the
     * first term, but do not match any of the other terms. This combinator is
     * rarely useful with simple queries, and is meant to be used with advanced
     * query combinations (see later for more details).
     *
     * ### Filtering results:
     *
     * ```javascript
     * // Filter only results in the 'fiction' category (assuming that 'category'
     * // is a stored field)
     * miniSearch.search('motorcycle art', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * ```
     *
     * ### Wildcard query
     *
     * Searching for an empty string (assuming the default tokenizer) returns no
     * results. Sometimes though, one needs to match all documents, like in a
     * "wildcard" search. This is possible by passing the special value
     * {@link MiniSearch.wildcard} as the query:
     *
     * ```javascript
     * // Return search results for all documents
     * miniSearch.search(MiniSearch.wildcard)
     * ```
     *
     * Note that search options such as `filter` and `boostDocument` are still
     * applied, influencing which results are returned, and their order:
     *
     * ```javascript
     * // Return search results for all documents in the 'fiction' category
     * miniSearch.search(MiniSearch.wildcard, {
     *   filter: (result) => result.category === 'fiction'
     * })
     * ```
     *
     * ### Advanced combination of queries:
     *
     * It is possible to combine different subqueries with OR, AND, and AND_NOT,
     * and even with different search options, by passing a query expression
     * tree object as the first argument, instead of a string.
     *
     * ```javascript
     * // Search for documents that contain "zen" and ("motorcycle" or "archery")
     * miniSearch.search({
     *   combineWith: 'AND',
     *   queries: [
     *     'zen',
     *     {
     *       combineWith: 'OR',
     *       queries: ['motorcycle', 'archery']
     *     }
     *   ]
     * })
     *
     * // Search for documents that contain ("apple" or "pear") but not "juice" and
     * // not "tree"
     * miniSearch.search({
     *   combineWith: 'AND_NOT',
     *   queries: [
     *     {
     *       combineWith: 'OR',
     *       queries: ['apple', 'pear']
     *     },
     *     'juice',
     *     'tree'
     *   ]
     * })
     * ```
     *
     * Each node in the expression tree can be either a string, or an object that
     * supports all {@link SearchOptions} fields, plus a `queries` array field for
     * subqueries.
     *
     * Note that, while this can become complicated to do by hand for complex or
     * deeply nested queries, it provides a formalized expression tree API for
     * external libraries that implement a parser for custom query languages.
     *
     * @param query  Search query
     * @param searchOptions  Search options. Each option, if not given, defaults to the corresponding value of `searchOptions` given to the constructor, or to the library default.
     */
    search(query, searchOptions = {}) {
        const { searchOptions: globalSearchOptions } = this._options;
        const searchOptionsWithDefaults = { ...globalSearchOptions, ...searchOptions };
        const rawResults = this.executeQuery(query, searchOptions);
        const results = [];
        for (const [docId, { score, terms, match }] of rawResults) {
            // terms are the matched query terms, which will be returned to the user
            // as queryTerms. The quality is calculated based on them, as opposed to
            // the matched terms in the document (which can be different due to
            // prefix and fuzzy match)
            const quality = terms.length || 1;
            const result = {
                id: this._documentIds.get(docId),
                score: score * quality,
                terms: Object.keys(match),
                queryTerms: terms,
                match
            };
            Object.assign(result, this._storedFields.get(docId));
            if (searchOptionsWithDefaults.filter == null || searchOptionsWithDefaults.filter(result)) {
                results.push(result);
            }
        }
        // If it's a wildcard query, and no document boost is applied, skip sorting
        // the results, as all results have the same score of 1
        if (query === MiniSearch.wildcard && searchOptionsWithDefaults.boostDocument == null) {
            return results;
        }
        results.sort(byScore);
        return results;
    }
    /**
     * Provide suggestions for the given search query
     *
     * The result is a list of suggested modified search queries, derived from the
     * given search query, each with a relevance score, sorted by descending score.
     *
     * By default, it uses the same options used for search, except that by
     * default it performs prefix search on the last term of the query, and
     * combine terms with `'AND'` (requiring all query terms to match). Custom
     * options can be passed as a second argument. Defaults can be changed upon
     * calling the {@link MiniSearch} constructor, by passing a
     * `autoSuggestOptions` option.
     *
     * ### Basic usage:
     *
     * ```javascript
     * // Get suggestions for 'neuro':
     * miniSearch.autoSuggest('neuro')
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 0.46240 } ]
     * ```
     *
     * ### Multiple words:
     *
     * ```javascript
     * // Get suggestions for 'zen ar':
     * miniSearch.autoSuggest('zen ar')
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * ### Fuzzy suggestions:
     *
     * ```javascript
     * // Correct spelling mistakes using fuzzy search:
     * miniSearch.autoSuggest('neromancer', { fuzzy: 0.2 })
     * // => [ { suggestion: 'neuromancer', terms: [ 'neuromancer' ], score: 1.03998 } ]
     * ```
     *
     * ### Filtering:
     *
     * ```javascript
     * // Get suggestions for 'zen ar', but only within the 'fiction' category
     * // (assuming that 'category' is a stored field):
     * miniSearch.autoSuggest('zen ar', {
     *   filter: (result) => result.category === 'fiction'
     * })
     * // => [
     * //  { suggestion: 'zen archery art', terms: [ 'zen', 'archery', 'art' ], score: 1.73332 },
     * //  { suggestion: 'zen art', terms: [ 'zen', 'art' ], score: 1.21313 }
     * // ]
     * ```
     *
     * @param queryString  Query string to be expanded into suggestions
     * @param options  Search options. The supported options and default values
     * are the same as for the {@link MiniSearch#search} method, except that by
     * default prefix search is performed on the last term in the query, and terms
     * are combined with `'AND'`.
     * @return  A sorted array of suggestions sorted by relevance score.
     */
    autoSuggest(queryString, options = {}) {
        options = { ...this._options.autoSuggestOptions, ...options };
        const suggestions = new Map();
        for (const { score, terms } of this.search(queryString, options)) {
            const phrase = terms.join(' ');
            const suggestion = suggestions.get(phrase);
            if (suggestion != null) {
                suggestion.score += score;
                suggestion.count += 1;
            }
            else {
                suggestions.set(phrase, { score, terms, count: 1 });
            }
        }
        const results = [];
        for (const [suggestion, { score, terms, count }] of suggestions) {
            results.push({ suggestion, terms, score: score / count });
        }
        results.sort(byScore);
        return results;
    }
    /**
     * Total number of documents available to search
     */
    get documentCount() {
        return this._documentCount;
    }
    /**
     * Number of terms in the index
     */
    get termCount() {
        return this._index.size;
    }
    /**
     * Deserializes a JSON index (serialized with `JSON.stringify(miniSearch)`)
     * and instantiates a MiniSearch instance. It should be given the same options
     * originally used when serializing the index.
     *
     * ### Usage:
     *
     * ```javascript
     * // If the index was serialized with:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     *
     * const json = JSON.stringify(miniSearch)
     * // It can later be deserialized like this:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @param json  JSON-serialized index
     * @param options  configuration options, same as the constructor
     * @return An instance of MiniSearch deserialized from the given JSON.
     */
    static loadJSON(json, options) {
        if (options == null) {
            throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
        }
        return this.loadJS(JSON.parse(json), options);
    }
    /**
     * Async equivalent of {@link MiniSearch.loadJSON}
     *
     * This function is an alternative to {@link MiniSearch.loadJSON} that returns
     * a promise, and loads the index in batches, leaving pauses between them to avoid
     * blocking the main thread. It tends to be slower than the synchronous
     * version, but does not block the main thread, so it can be a better choice
     * when deserializing very large indexes.
     *
     * @param json  JSON-serialized index
     * @param options  configuration options, same as the constructor
     * @return A Promise that will resolve to an instance of MiniSearch deserialized from the given JSON.
     */
    static async loadJSONAsync(json, options) {
        if (options == null) {
            throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
        }
        return this.loadJSAsync(JSON.parse(json), options);
    }
    /**
     * Returns the default value of an option. It will throw an error if no option
     * with the given name exists.
     *
     * @param optionName  Name of the option
     * @return The default value of the given option
     *
     * ### Usage:
     *
     * ```javascript
     * // Get default tokenizer
     * MiniSearch.getDefault('tokenize')
     *
     * // Get default term processor
     * MiniSearch.getDefault('processTerm')
     *
     * // Unknown options will throw an error
     * MiniSearch.getDefault('notExisting')
     * // => throws 'MiniSearch: unknown option "notExisting"'
     * ```
     */
    static getDefault(optionName) {
        if (defaultOptions.hasOwnProperty(optionName)) {
            return getOwnProperty(defaultOptions, optionName);
        }
        else {
            throw new Error(`MiniSearch: unknown option "${optionName}"`);
        }
    }
    /**
     * @ignore
     */
    static loadJS(js, options) {
        const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
        const miniSearch = this.instantiateMiniSearch(js, options);
        miniSearch._documentIds = objectToNumericMap(documentIds);
        miniSearch._fieldLength = objectToNumericMap(fieldLength);
        miniSearch._storedFields = objectToNumericMap(storedFields);
        for (const [shortId, id] of miniSearch._documentIds) {
            miniSearch._idToShortId.set(id, shortId);
        }
        for (const [term, data] of index) {
            const dataMap = new Map();
            for (const fieldId of Object.keys(data)) {
                let indexEntry = data[fieldId];
                // Version 1 used to nest the index entry inside a field called ds
                if (serializationVersion === 1) {
                    indexEntry = indexEntry.ds;
                }
                dataMap.set(parseInt(fieldId, 10), objectToNumericMap(indexEntry));
            }
            miniSearch._index.set(term, dataMap);
        }
        return miniSearch;
    }
    /**
     * @ignore
     */
    static async loadJSAsync(js, options) {
        const { index, documentIds, fieldLength, storedFields, serializationVersion } = js;
        const miniSearch = this.instantiateMiniSearch(js, options);
        miniSearch._documentIds = await objectToNumericMapAsync(documentIds);
        miniSearch._fieldLength = await objectToNumericMapAsync(fieldLength);
        miniSearch._storedFields = await objectToNumericMapAsync(storedFields);
        for (const [shortId, id] of miniSearch._documentIds) {
            miniSearch._idToShortId.set(id, shortId);
        }
        let count = 0;
        for (const [term, data] of index) {
            const dataMap = new Map();
            for (const fieldId of Object.keys(data)) {
                let indexEntry = data[fieldId];
                // Version 1 used to nest the index entry inside a field called ds
                if (serializationVersion === 1) {
                    indexEntry = indexEntry.ds;
                }
                dataMap.set(parseInt(fieldId, 10), await objectToNumericMapAsync(indexEntry));
            }
            if (++count % 1000 === 0)
                await wait(0);
            miniSearch._index.set(term, dataMap);
        }
        return miniSearch;
    }
    /**
     * @ignore
     */
    static instantiateMiniSearch(js, options) {
        const { documentCount, nextId, fieldIds, averageFieldLength, dirtCount, serializationVersion } = js;
        if (serializationVersion !== 1 && serializationVersion !== 2) {
            throw new Error('MiniSearch: cannot deserialize an index created with an incompatible version');
        }
        const miniSearch = new MiniSearch(options);
        miniSearch._documentCount = documentCount;
        miniSearch._nextId = nextId;
        miniSearch._idToShortId = new Map();
        miniSearch._fieldIds = fieldIds;
        miniSearch._avgFieldLength = averageFieldLength;
        miniSearch._dirtCount = dirtCount || 0;
        miniSearch._index = new SearchableMap();
        return miniSearch;
    }
    /**
     * @ignore
     */
    executeQuery(query, searchOptions = {}) {
        if (query === MiniSearch.wildcard) {
            return this.executeWildcardQuery(searchOptions);
        }
        if (typeof query !== 'string') {
            const options = { ...searchOptions, ...query, queries: undefined };
            const results = query.queries.map((subquery) => this.executeQuery(subquery, options));
            return this.combineResults(results, options.combineWith);
        }
        const { tokenize, processTerm, searchOptions: globalSearchOptions } = this._options;
        const options = { tokenize, processTerm, ...globalSearchOptions, ...searchOptions };
        const { tokenize: searchTokenize, processTerm: searchProcessTerm } = options;
        const terms = searchTokenize(query)
            .flatMap((term) => searchProcessTerm(term))
            .filter((term) => !!term);
        const queries = terms.map(termToQuerySpec(options));
        const results = queries.map(query => this.executeQuerySpec(query, options));
        return this.combineResults(results, options.combineWith);
    }
    /**
     * @ignore
     */
    executeQuerySpec(query, searchOptions) {
        const options = { ...this._options.searchOptions, ...searchOptions };
        const boosts = (options.fields || this._options.fields).reduce((boosts, field) => ({ ...boosts, [field]: getOwnProperty(options.boost, field) || 1 }), {});
        const { boostDocument, weights, maxFuzzy, bm25: bm25params } = options;
        const { fuzzy: fuzzyWeight, prefix: prefixWeight } = { ...defaultSearchOptions.weights, ...weights };
        const data = this._index.get(query.term);
        const results = this.termResults(query.term, query.term, 1, query.termBoost, data, boosts, boostDocument, bm25params);
        let prefixMatches;
        let fuzzyMatches;
        if (query.prefix) {
            prefixMatches = this._index.atPrefix(query.term);
        }
        if (query.fuzzy) {
            const fuzzy = (query.fuzzy === true) ? 0.2 : query.fuzzy;
            const maxDistance = fuzzy < 1 ? Math.min(maxFuzzy, Math.round(query.term.length * fuzzy)) : fuzzy;
            if (maxDistance)
                fuzzyMatches = this._index.fuzzyGet(query.term, maxDistance);
        }
        if (prefixMatches) {
            for (const [term, data] of prefixMatches) {
                const distance = term.length - query.term.length;
                if (!distance) {
                    continue;
                } // Skip exact match.
                // Delete the term from fuzzy results (if present) if it is also a
                // prefix result. This entry will always be scored as a prefix result.
                fuzzyMatches === null || fuzzyMatches === void 0 ? void 0 : fuzzyMatches.delete(term);
                // Weight gradually approaches 0 as distance goes to infinity, with the
                // weight for the hypothetical distance 0 being equal to prefixWeight.
                // The rate of change is much lower than that of fuzzy matches to
                // account for the fact that prefix matches stay more relevant than
                // fuzzy matches for longer distances.
                const weight = prefixWeight * term.length / (term.length + 0.3 * distance);
                this.termResults(query.term, term, weight, query.termBoost, data, boosts, boostDocument, bm25params, results);
            }
        }
        if (fuzzyMatches) {
            for (const term of fuzzyMatches.keys()) {
                const [data, distance] = fuzzyMatches.get(term);
                if (!distance) {
                    continue;
                } // Skip exact match.
                // Weight gradually approaches 0 as distance goes to infinity, with the
                // weight for the hypothetical distance 0 being equal to fuzzyWeight.
                const weight = fuzzyWeight * term.length / (term.length + distance);
                this.termResults(query.term, term, weight, query.termBoost, data, boosts, boostDocument, bm25params, results);
            }
        }
        return results;
    }
    /**
     * @ignore
     */
    executeWildcardQuery(searchOptions) {
        const results = new Map();
        const options = { ...this._options.searchOptions, ...searchOptions };
        for (const [shortId, id] of this._documentIds) {
            const score = options.boostDocument ? options.boostDocument(id, '', this._storedFields.get(shortId)) : 1;
            results.set(shortId, {
                score,
                terms: [],
                match: {}
            });
        }
        return results;
    }
    /**
     * @ignore
     */
    combineResults(results, combineWith = OR) {
        if (results.length === 0) {
            return new Map();
        }
        const operator = combineWith.toLowerCase();
        const combinator = combinators[operator];
        if (!combinator) {
            throw new Error(`Invalid combination operator: ${combineWith}`);
        }
        return results.reduce(combinator) || new Map();
    }
    /**
     * Allows serialization of the index to JSON, to possibly store it and later
     * deserialize it with {@link MiniSearch.loadJSON}.
     *
     * Normally one does not directly call this method, but rather call the
     * standard JavaScript `JSON.stringify()` passing the {@link MiniSearch}
     * instance, and JavaScript will internally call this method. Upon
     * deserialization, one must pass to {@link MiniSearch.loadJSON} the same
     * options used to create the original instance that was serialized.
     *
     * ### Usage:
     *
     * ```javascript
     * // Serialize the index:
     * let miniSearch = new MiniSearch({ fields: ['title', 'text'] })
     * miniSearch.addAll(documents)
     * const json = JSON.stringify(miniSearch)
     *
     * // Later, to deserialize it:
     * miniSearch = MiniSearch.loadJSON(json, { fields: ['title', 'text'] })
     * ```
     *
     * @return A plain-object serializable representation of the search index.
     */
    toJSON() {
        const index = [];
        for (const [term, fieldIndex] of this._index) {
            const data = {};
            for (const [fieldId, freqs] of fieldIndex) {
                data[fieldId] = Object.fromEntries(freqs);
            }
            index.push([term, data]);
        }
        return {
            documentCount: this._documentCount,
            nextId: this._nextId,
            documentIds: Object.fromEntries(this._documentIds),
            fieldIds: this._fieldIds,
            fieldLength: Object.fromEntries(this._fieldLength),
            averageFieldLength: this._avgFieldLength,
            storedFields: Object.fromEntries(this._storedFields),
            dirtCount: this._dirtCount,
            index,
            serializationVersion: 2
        };
    }
    /**
     * @ignore
     */
    termResults(sourceTerm, derivedTerm, termWeight, termBoost, fieldTermData, fieldBoosts, boostDocumentFn, bm25params, results = new Map()) {
        if (fieldTermData == null)
            return results;
        for (const field of Object.keys(fieldBoosts)) {
            const fieldBoost = fieldBoosts[field];
            const fieldId = this._fieldIds[field];
            const fieldTermFreqs = fieldTermData.get(fieldId);
            if (fieldTermFreqs == null)
                continue;
            let matchingFields = fieldTermFreqs.size;
            const avgFieldLength = this._avgFieldLength[fieldId];
            for (const docId of fieldTermFreqs.keys()) {
                if (!this._documentIds.has(docId)) {
                    this.removeTerm(fieldId, docId, derivedTerm);
                    matchingFields -= 1;
                    continue;
                }
                const docBoost = boostDocumentFn ? boostDocumentFn(this._documentIds.get(docId), derivedTerm, this._storedFields.get(docId)) : 1;
                if (!docBoost)
                    continue;
                const termFreq = fieldTermFreqs.get(docId);
                const fieldLength = this._fieldLength.get(docId)[fieldId];
                // NOTE: The total number of fields is set to the number of documents
                // `this._documentCount`. It could also make sense to use the number of
                // documents where the current field is non-blank as a normalization
                // factor. This will make a difference in scoring if the field is rarely
                // present. This is currently not supported, and may require further
                // analysis to see if it is a valid use case.
                const rawScore = calcBM25Score(termFreq, matchingFields, this._documentCount, fieldLength, avgFieldLength, bm25params);
                const weightedScore = termWeight * termBoost * fieldBoost * docBoost * rawScore;
                const result = results.get(docId);
                if (result) {
                    result.score += weightedScore;
                    assignUniqueTerm(result.terms, sourceTerm);
                    const match = getOwnProperty(result.match, derivedTerm);
                    if (match) {
                        match.push(field);
                    }
                    else {
                        result.match[derivedTerm] = [field];
                    }
                }
                else {
                    results.set(docId, {
                        score: weightedScore,
                        terms: [sourceTerm],
                        match: { [derivedTerm]: [field] }
                    });
                }
            }
        }
        return results;
    }
    /**
     * @ignore
     */
    addTerm(fieldId, documentId, term) {
        const indexData = this._index.fetch(term, createMap);
        let fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null) {
            fieldIndex = new Map();
            fieldIndex.set(documentId, 1);
            indexData.set(fieldId, fieldIndex);
        }
        else {
            const docs = fieldIndex.get(documentId);
            fieldIndex.set(documentId, (docs || 0) + 1);
        }
    }
    /**
     * @ignore
     */
    removeTerm(fieldId, documentId, term) {
        if (!this._index.has(term)) {
            this.warnDocumentChanged(documentId, fieldId, term);
            return;
        }
        const indexData = this._index.fetch(term, createMap);
        const fieldIndex = indexData.get(fieldId);
        if (fieldIndex == null || fieldIndex.get(documentId) == null) {
            this.warnDocumentChanged(documentId, fieldId, term);
        }
        else if (fieldIndex.get(documentId) <= 1) {
            if (fieldIndex.size <= 1) {
                indexData.delete(fieldId);
            }
            else {
                fieldIndex.delete(documentId);
            }
        }
        else {
            fieldIndex.set(documentId, fieldIndex.get(documentId) - 1);
        }
        if (this._index.get(term).size === 0) {
            this._index.delete(term);
        }
    }
    /**
     * @ignore
     */
    warnDocumentChanged(shortDocumentId, fieldId, term) {
        for (const fieldName of Object.keys(this._fieldIds)) {
            if (this._fieldIds[fieldName] === fieldId) {
                this._options.logger('warn', `MiniSearch: document with ID ${this._documentIds.get(shortDocumentId)} has changed before removal: term "${term}" was not present in field "${fieldName}". Removing a document after it has changed can corrupt the index!`, 'version_conflict');
                return;
            }
        }
    }
    /**
     * @ignore
     */
    addDocumentId(documentId) {
        const shortDocumentId = this._nextId;
        this._idToShortId.set(documentId, shortDocumentId);
        this._documentIds.set(shortDocumentId, documentId);
        this._documentCount += 1;
        this._nextId += 1;
        return shortDocumentId;
    }
    /**
     * @ignore
     */
    addFields(fields) {
        for (let i = 0; i < fields.length; i++) {
            this._fieldIds[fields[i]] = i;
        }
    }
    /**
     * @ignore
     */
    addFieldLength(documentId, fieldId, count, length) {
        let fieldLengths = this._fieldLength.get(documentId);
        if (fieldLengths == null)
            this._fieldLength.set(documentId, fieldLengths = []);
        fieldLengths[fieldId] = length;
        const averageFieldLength = this._avgFieldLength[fieldId] || 0;
        const totalFieldLength = (averageFieldLength * count) + length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count + 1);
    }
    /**
     * @ignore
     */
    removeFieldLength(documentId, fieldId, count, length) {
        if (count === 1) {
            this._avgFieldLength[fieldId] = 0;
            return;
        }
        const totalFieldLength = (this._avgFieldLength[fieldId] * count) - length;
        this._avgFieldLength[fieldId] = totalFieldLength / (count - 1);
    }
    /**
     * @ignore
     */
    saveStoredFields(documentId, doc) {
        const { storeFields, extractField } = this._options;
        if (storeFields == null || storeFields.length === 0) {
            return;
        }
        let documentFields = this._storedFields.get(documentId);
        if (documentFields == null)
            this._storedFields.set(documentId, documentFields = {});
        for (const fieldName of storeFields) {
            const fieldValue = extractField(doc, fieldName);
            if (fieldValue !== undefined)
                documentFields[fieldName] = fieldValue;
        }
    }
}
/**
 * The special wildcard symbol that can be passed to {@link MiniSearch#search}
 * to match all documents
 */
MiniSearch.wildcard = Symbol('*');
const getOwnProperty = (object, property) => Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
const combinators = {
    [OR]: (a, b) => {
        for (const docId of b.keys()) {
            const existing = a.get(docId);
            if (existing == null) {
                a.set(docId, b.get(docId));
            }
            else {
                const { score, terms, match } = b.get(docId);
                existing.score = existing.score + score;
                existing.match = Object.assign(existing.match, match);
                assignUniqueTerms(existing.terms, terms);
            }
        }
        return a;
    },
    [AND]: (a, b) => {
        const combined = new Map();
        for (const docId of b.keys()) {
            const existing = a.get(docId);
            if (existing == null)
                continue;
            const { score, terms, match } = b.get(docId);
            assignUniqueTerms(existing.terms, terms);
            combined.set(docId, {
                score: existing.score + score,
                terms: existing.terms,
                match: Object.assign(existing.match, match)
            });
        }
        return combined;
    },
    [AND_NOT]: (a, b) => {
        for (const docId of b.keys())
            a.delete(docId);
        return a;
    }
};
const defaultBM25params = { k: 1.2, b: 0.7, d: 0.5 };
const calcBM25Score = (termFreq, matchingCount, totalCount, fieldLength, avgFieldLength, bm25params) => {
    const { k, b, d } = bm25params;
    const invDocFreq = Math.log(1 + (totalCount - matchingCount + 0.5) / (matchingCount + 0.5));
    return invDocFreq * (d + termFreq * (k + 1) / (termFreq + k * (1 - b + b * fieldLength / avgFieldLength)));
};
const termToQuerySpec = (options) => (term, i, terms) => {
    const fuzzy = (typeof options.fuzzy === 'function')
        ? options.fuzzy(term, i, terms)
        : (options.fuzzy || false);
    const prefix = (typeof options.prefix === 'function')
        ? options.prefix(term, i, terms)
        : (options.prefix === true);
    const termBoost = (typeof options.boostTerm === 'function')
        ? options.boostTerm(term, i, terms)
        : 1;
    return { term, fuzzy, prefix, termBoost };
};
const defaultOptions = {
    idField: 'id',
    extractField: (document, fieldName) => document[fieldName],
    tokenize: (text) => text.split(SPACE_OR_PUNCTUATION),
    processTerm: (term) => term.toLowerCase(),
    fields: undefined,
    searchOptions: undefined,
    storeFields: [],
    logger: (level, message) => {
        if (typeof (console === null || console === void 0 ? void 0 : console[level]) === 'function')
            console[level](message);
    },
    autoVacuum: true
};
const defaultSearchOptions = {
    combineWith: OR,
    prefix: false,
    fuzzy: false,
    maxFuzzy: 6,
    boost: {},
    weights: { fuzzy: 0.45, prefix: 0.375 },
    bm25: defaultBM25params
};
const defaultAutoSuggestOptions = {
    combineWith: AND,
    prefix: (term, i, terms) => i === terms.length - 1
};
const defaultVacuumOptions = { batchSize: 1000, batchWait: 10 };
const defaultVacuumConditions = { minDirtFactor: 0.1, minDirtCount: 20 };
const defaultAutoVacuumOptions = { ...defaultVacuumOptions, ...defaultVacuumConditions };
const assignUniqueTerm = (target, term) => {
    // Avoid adding duplicate terms.
    if (!target.includes(term))
        target.push(term);
};
const assignUniqueTerms = (target, source) => {
    for (const term of source) {
        // Avoid adding duplicate terms.
        if (!target.includes(term))
            target.push(term);
    }
};
const byScore = ({ score: a }, { score: b }) => b - a;
const createMap = () => new Map();
const objectToNumericMap = (object) => {
    const map = new Map();
    for (const key of Object.keys(object)) {
        map.set(parseInt(key, 10), object[key]);
    }
    return map;
};
const objectToNumericMapAsync = async (object) => {
    const map = new Map();
    let count = 0;
    for (const key of Object.keys(object)) {
        map.set(parseInt(key, 10), object[key]);
        if (++count % 1000 === 0) {
            await wait(0);
        }
    }
    return map;
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// This regular expression matches any Unicode space, newline, or punctuation
// character
const SPACE_OR_PUNCTUATION = /[\n\r\p{Z}\p{P}]+/u;

// # SPDX-FileCopyrightText: 2019 Hooking
// #
// # SPDX-License-Identifier: Apache License v2


class CompendiumDirectoryT20 extends foundry.applications.sidebar.tabs.CompendiumDirectory {
	static STOP_WORDS = new Set(["o", "a", "de", "da", "do"]);

	static #searchEngine = null;

	/** Include ability to search and drag document search results */
	static DEFAULT_OPTIONS = {
		actions: {
			openSheet: CompendiumDirectoryT20.#onClickOpenSheet
		}
	};

	matchDragDrop;

	static PARTS = {
		...super.PARTS,
		match: { template: "systems/tormenta20/templates/sidebar/compendium-directory/search-result.hbs" }
	};

	get searchEngine() {
		if (!CompendiumDirectoryT20.#searchEngine) {
			const wordSegmenter =
				"Segmenter" in Intl
					? new Intl.Segmenter(game.i18n.lang, { granularity: "word" })
					: // Firefox >:(
						{
							segment(term) {
								return [{ segment: term }];
							}
						};
			CompendiumDirectoryT20.#searchEngine = new MiniSearch({
				fields: ["name", "originalName"],
				idField: "uuid",
				processTerm: (term) => {
					if (term.length <= 1 || CompendiumDirectoryT20.STOP_WORDS.has(term)) {
						return null;
					}
					return Array.from(wordSegmenter.segment(term))
						.map((t) =>
							foundry.applications.ux.SearchFilter.cleanQuery(t.segment.toLocaleLowerCase(game.i18n.lang)).replace(
								/['"]/g,
								""
							)
						)
						.filter((t) => t.length > 1);
				},
				searchOptions: { combineWith: "AND", prefix: true },
				storeFields: ["uuid", "img", "name", "type", "documentType", "packLabel"]
			});
		}

		return CompendiumDirectoryT20.#searchEngine;
	}

	/** Create a drag preview that looks like the one generated from an open compendium */
	get #dragPreview() {
		const preview = document.createElement("div");
		preview.id = "pack-search-drag-preview";

		const thumbnail = document.createElement("img");
		const title = document.createElement("h4");
		preview.append(thumbnail, title);

		return preview;
	}

	async _onFirstRender(context, options) {
		this._createContextMenu(this.#getDocumentMatchContextEntries, "ol.document-matches > li");
		return super._onFirstRender(context, options);
	}

	#getDocumentMatchContextEntries() {
		return [
			{
				name: "COMPENDIUM.ImportEntry",
				icon: fontAwesomeIcon("download").outerHTML,
				condition: (li) => {
					const uuid = li.dataset.uuid;
					if (!uuid) throw Error("Tormenta20 | Unexpected missing uuid");
					const collection = game.packs.get(fromUuidSync(uuid)?.pack ?? "", { strict: true });
					const documentClass = collection.documentClass;
					return documentClass.canUserCreate(game.user);
				},
				callback: (li) => {
					const uuid = li.dataset.uuid;
					if (!uuid) throw Error("Tormenta20 | Unexpected missing uuid");
					const packCollection = game.packs.get(fromUuidSync(uuid)?.pack ?? "", { strict: true });
					const worldCollection = game.collections.get(packCollection.documentName, { strict: true });
					const indexData = fromUuidSync(uuid) ?? { _id: "" };
					if (!("_id" in indexData && typeof indexData._id === "string")) {
						throw Error("Tormenta20 | Unexpected missing document _id");
					}
					return worldCollection.importFromCompendium(packCollection, indexData._id, {}, { renderSheet: true });
				}
			}
		];
	}

	_onRender(context, options) {
		if (options.parts.includes("directory")) {
			const matchesList = createHTMLElement("ol", { classes: ["document-matches"] });
			const html = this.element;
			html.querySelector("ol.directory-list")?.append(matchesList);
			this.matchDragDrop = new foundry.applications.ux.DragDrop({
				dragSelector: "li.match",
				permissions: {
					dragstart: this._canDragStart.bind(this),
					drop: this._canDragDrop.bind(this)
				},
				callbacks: {
					dragover: this._onDragOver.bind(this),
					dragstart: this._onDragStart.bind(this),
					drop: this._onDrop.bind(this)
				}
			}).bind(html);
		}
		return super._onRender(context, options);
	}

	/* -------------------------------------------- */
	/*  Event Listeners and Handlers                */
	/* -------------------------------------------- */

	// _getEntryContextOptions() {
	// 	        const options = super._getEntryContextOptions();

	//     options.push({
	//         name: "COMPENDIUM.MigrationStatus",
	//         icon: fontAwesomeIcon("info").outerHTML,
	//         condition: (li) => {
	//             const compendium = game.packs.get(li.dataset.pack, { strict: true });
	//             const actorOrItem =
	//                 compendium.documentClass === CONFIG.Actor.documentClass ||
	//                 compendium.documentClass === CONFIG.Item.documentClass;
	//             const isSystemCompendium = compendium.metadata.packageType === "system";
	//             return game.user.isGM && actorOrItem && !isSystemCompendium;
	//         },
	//         callback: async (li) => {
	//             const compendium = game.packs.get(li.dataset.pack, { strict: true });
	//             new CompendiumMigrationStatus(compendium).render(true);
	//         },
	//     });

	//     return options;
	// }

	/** System compendium search */
	_onSearchFilter(event, query, rgx, listElem) {
		super._onSearchFilter(event, query, rgx, listElem);
		const html = this.element;

		// Match documents within each compendium by name
		const docMatches = query.length > 0 ? this.searchEngine.search(query) : [];
		const filters = this.activeFilters;
		const filteredMatches = filters.size > 0 ? docMatches.filter((m) => filters.has(m.documentType)) : docMatches;

		// Create a list of document matches
		const matchTemplate = htmlQuery(html, ".compendium-search-match");
		if (!matchTemplate) throw Error("Tormenta20 | Match template not found");

		const listElements = filteredMatches.map((match) => {
			const li = matchTemplate.content.firstElementChild?.cloneNode(true);
			li.dataset.score = match.score.toString();
			li.dataset.uuid = match.uuid;

			// Show a thumbnail if available
			const thumbnail = li.querySelector("img");
			if (thumbnail) {
				if (typeof match.img === "string") {
					thumbnail.src = match.img;
				} else if (match.documentType === "JournalEntry") {
					thumbnail.src = "icons/svg/book.svg";
				}
			}

			const docAnchor = li.querySelector("a[data-action=openSheet]");
			const packAnchor = li.querySelector("a[data-action=activateEntry]");
			const systemType = ["Actor", "Item"].includes(match.documentType)
				? game.i18n.localize(`TYPES.${match.documentType}.${match.type}`)
				: null;
			if (docAnchor && packAnchor) {
				docAnchor.innerText = match.name;
				packAnchor.append(systemType ? `${systemType} (${match.packLabel})` : `(${match.packLabel})`);
				const collection = foundry.utils.parseUuid(match.uuid)?.collection;
				packAnchor.dataset.pack = collection?.metadata.id;
			}

			return li;
		});
		const matchesList = htmlQuery(html, "ol.document-matches");
		if (!matchesList) return;
		matchesList.replaceChildren(...listElements);
		this.matchDragDrop.bind(matchesList);
	}

	/** Anyone can drag from search results */
	_canDragStart(selector) {
		return selector === "ol.document-matches" || super._canDragStart(selector);
	}

	/** Replicate the functionality of dragging a compendium document from an open `Compendium` */
	_onDragStart(event) {
		const dragElement = event.currentTarget;
		if (!(dragElement instanceof HTMLElement && event.dataTransfer)) {
			return super._onDragStart(event);
		}
		const { uuid } = dragElement.dataset;
		if (!uuid) return super._onDragStart(event);

		const indexEntry = fromUuidSync(uuid);
		if (!indexEntry) throw Error("Tormenta20 | Unexpected error retrieving index data");

		// Clean up old drag preview
		document.querySelector("#pack-search-drag-preview")?.remove();

		// Create a new drag preview
		const dragPreview = this.#dragPreview.cloneNode(true);
		const [img, title] = Array.from(dragPreview.childNodes);
		title.innerText = indexEntry.name ?? "";
		img.src = "img" in indexEntry && indexEntry.img ? indexEntry.img : "icons/svg/book.svg";

		document.body.appendChild(dragPreview);
		const documentType = (() => {
			if (indexEntry instanceof foundry.abstract.Document) return indexEntry.documentName;
			const pack = game.packs.get(indexEntry.pack ?? "");
			return pack?.documentName ?? null;
		})();
		if (!documentType) return;

		event.dataTransfer.setDragImage(dragPreview, 75, 25);
		event.dataTransfer.setData("text/plain", JSON.stringify({ type: documentType, uuid }));
	}

	/** Called by a "ready" hook */
	compileSearchIndex() {
		console.debug("Tormenta20 | compiling search index");
		const packs = game.packs.filter((p) => p.index.size > 0 && p.testUserPermission(game.user, "OBSERVER"));
		this.searchEngine.removeAll();

		for (const pack of packs) {
			const contents = pack.index.map((i) => ({
				...i,
				documentType: pack.metadata.type,
				packLabel: pack.metadata.label
			}));
			this.searchEngine.addAll(contents);
		}
		console.debug("Tormenta20 | Finished compiling search index");
	}

	// Open compendium on result click
	static async #onClickOpenSheet(_event, target) {
		const doc = await fromUuid(target.closest("li")?.dataset.uuid ?? "");
		doc?.sheet?.render(true);
	}
}

globalThis.T20 = T20$1;
globalThis.Roll = RollT20;

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
globalThis.tormenta20 = {
	applications: {
		AbilityUseDialog,
		ActorSheetT20Character,
		ActorSheetT20CharacterTabbed,
		ActorSheetT20NPC,
		ItemSheetT20,
		TraitSelector,
		ActorSettings,
		StatblockParser,
		RestConfigDialog,
		ResourceConfig,
		CompendiumT20,
		CharacterProgression
	},
	data: {
		fields,
		models
	},
	canvas: {
		AbilityTemplate,
		TokenT20
	},
	config: T20$1,
	dice: dice,
	conditions: T20$1.conditions,
	entities: {
		ActorT20,
		ItemT20
	},
	macros: macros,
	utils,
	rollItemMacro: rollItemMacro,
	rollSkillMacro: rollSkillMacro
};

Hooks.once("init", async function () {
	console.log("T20 | Initializing the Tormenta20 Game System");
	game.tormenta20 = tormenta20;
	// CONFIG.ActiveEffect.legacyTransferral removido no v14 (depreciado desde a v11, sem
	// substituto). Efeitos de item com transfer:true agora permanecem no item e são
	// aplicados a partir dele; use actor.appliedEffects para "todos os efeitos que afetam o ator".
	// Record Cnfiguration Values
	CONFIG.T20 = T20$1;
	CONFIG.Actor.documentClass = ActorT20;
	CONFIG.Item.documentClass = ItemT20;
	CONFIG.ActiveEffect.documentClass = ActiveEffectT20;

	CONFIG.Token.documentClass = TokenDocumentT20;
	CONFIG.Token.objectClass = TokenT20;
	CONFIG.Token.rulerClass = TokenRulerT20;
	CONFIG.Token.hudClass = TokenHUDT20;
	TokenRulerT20.applyMovementConfig();
	CONFIG.time.roundTime = 6;

	// MeasuredTemplate foi absorvido por Scene Regions no v14. As Áreas de Efeito agora são
	// colocadas via canvas.regions.placeRegion (ver module/canvas/ability-template.mjs), então
	// não há mais layer/objectClass customizada para registrar aqui.

	// Register T20 stuff
	CONFIG.statusEffects = T20$1.statusEffectIcons;
	CONFIG.conditions = T20$1.conditions;

	CONFIG.controlIcons.defeated = CONFIG.statusEffects.filter((x) => x.id === "inconsciente")[0].icon;
	CONFIG.specialStatusEffects.BLIND = "cego";
	CONFIG.specialStatusEffects.DEFEATED = "morto";
	CONFIG.specialStatusEffects.INVISIBLE = "invisivel";

	// T20 cone RAW should be 53.13 degrees
	// CONFIG.MeasuredTemplate.defaults.angle = 53.13;

	// Register System Settings
	SystemSettings();

	// Patch Core Functions
	CONFIG.ui.actors = ActorDirectoryTormenta20;
	CONFIG.ui.chat = ChatLogTormenta20;
	// CONFIG.ui.combat = CombatTrackerT20;
	CONFIG.ui.compendium = CompendiumDirectoryT20;

	CONFIG.ChatMessage.documentClass = ChatMessageTormenta20;
	CONFIG.Combat.initiative = {
		formula: "1d20 + @pericias.inic.value",
		decimals: 2
	};
	Combat.prototype._getInitiativeFormula = _getInitiativeFormula;

	// Register Roll Extensions
	Roll.CHAT_TEMPLATE = "systems/tormenta20/templates/chat/roll.hbs";
	Roll.TOOLTIP_TEMPLATE = "systems/tormenta20/templates/chat/roll-breakdown.hbs";

	CONFIG.Dice.rolls.push(RollT20);
	CONFIG.Dice.rolls.RollT20 = RollT20;
	CONFIG.Dice.rolls.D20Roll = d20Roll;
	CONFIG.Dice.rolls.DamageRoll = damageRoll;

	// DATA MODEL

	CONFIG.Actor.dataModels.bases = tormenta20.data.models.BasesData;
	CONFIG.Actor.dataModels.character = tormenta20.data.models.CharacterData;
	CONFIG.Actor.dataModels.npc = tormenta20.data.models.MenaceData;
	CONFIG.Actor.dataModels.simple = tormenta20.data.models.SimpleData;
	CONFIG.Actor.dataModels.hazard = tormenta20.data.models.HazardData;

	CONFIG.Item.dataModels.arma = tormenta20.data.models.WeaponData;
	CONFIG.Item.dataModels.classe = tormenta20.data.models.ClassData;
	CONFIG.Item.dataModels.comodo = tormenta20.data.models.RoomData;
	CONFIG.Item.dataModels.consumivel = tormenta20.data.models.ConsumableData;
	CONFIG.Item.dataModels.equipamento = tormenta20.data.models.EquipmentData;
	CONFIG.Item.dataModels.magia = tormenta20.data.models.SpellData;
	CONFIG.Item.dataModels.mobilia = tormenta20.data.models.FurnitureData;
	CONFIG.Item.dataModels.poder = tormenta20.data.models.PowerData;
	CONFIG.Item.dataModels.race = tormenta20.data.models.RaceData;
	CONFIG.Item.dataModels.tesouro = tormenta20.data.models.LootData;

	// Register sheet application classes
	foundry.documents.collections.Actors.unregisterSheet("core", foundry.appv1.sheets.ActorSheet);
	foundry.documents.collections.Actors.registerSheet("tormenta20", ActorSheetT20Bases, {
		types: ["bases"],
		makeDefault: true,
		label: "T20.BasesSheet" // "Ficha de Bases"
	});
	foundry.documents.collections.Actors.registerSheet("tormenta20", ActorSheetT20Character, {
		types: ["character"],
		makeDefault: true,
		label: "T20.CharacterSheet" // "Ficha de Personagem"
	});
	foundry.documents.collections.Actors.registerSheet("tormenta20", ActorSheetT20CharacterTabbed, {
		types: ["character"],
		makeDefault: false,
		label: "T20.CharacterSheetTabbed" // "Ficha de Personagem - Abas"
	});
	foundry.documents.collections.Actors.registerSheet("tormenta20", ActorSheetT20NPC, {
		types: ["npc"],
		makeDefault: true,
		label: "T20.NPCSheet"
	});

	foundry.documents.collections.Actors.registerSheet("tormenta20", ActorSheetT20Simple, {
		types: ["simple"],
		makeDefault: true,
		label: "T20.SimpleActorSheet" // "Ficha de Simple"
	});

	foundry.documents.collections.Actors.registerSheet("tormenta20", HazardSheetT20, {
		types: ["hazard"],
		makeDefault: true,
		label: "T20.HazardSheet" // "Ficha de Perigos Complexos"
	});

	foundry.documents.collections.Items.unregisterSheet("core", foundry.appv1.sheets.ItemSheet);
	foundry.documents.collections.Items.registerSheet("tormenta20", ItemSheetT20, {
		makeDefault: true,
		label: "T20.ItemSheet"
	});
	foundry.documents.collections.Items.unregisterSheet("tormenta20", ItemSheetT20, { types: ["race"] });
	foundry.documents.collections.Items.registerSheet("tormenta20", RaceSheetT20, {
		makeDefault: true,
		types: ["race"],
		label: "T20.ItemSheet"
	});

	foundry.applications.apps.DocumentSheetConfig.unregisterSheet(
		ActiveEffect,
		"core",
		foundry.applications.sheets.ActiveEffectConfig
	);
	foundry.applications.apps.DocumentSheetConfig.registerSheet(ActiveEffect, "tormenta20", ActiveEffectConfigT20, {
		makeDefault: true,
		label: "T20.ActiveEffectSheet"
	});

	// Core Application Overrides
	// CONFIG.ui.compendium = CompendiumDirectoryT20;
	// Preload Handlebars Templates
	preloadHandlebarsTemplates();
	registerHandlebarsHelpers();
});

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

// localization && sort
Hooks.once("i18nInit", () => performPreLocalization(CONFIG.T20));

/* -------------------------------------------- */

// Load hooks
hooks();
//# sourceMappingURL=tormenta20.mjs.map
