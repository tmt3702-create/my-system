/**
 * Warhammer Fantasy Roleplay 2nd Edition - Foundry VTT System
 * Entry point for the WFRP2e system
 */

// Import Document Classes
import ActorWFRP2e from "./documents/actor.js";
import ItemWFRP2e from "./documents/item.js";
import ChatMessageWFRP2e from "./documents/message.js";

// Import Actor Sheets
import ActorSheetWFRP2eCharacter from "./sheets/actor/character-sheet.js";
import ActorSheetWFRP2eNPC from "./sheets/actor/npc-sheet.js";
import ActorSheetWFRP2eCreature from "./sheets/actor/creature-sheet.js";

// Import Item Sheets
import SkillSheet from "./sheets/item/skill-sheet.js";
import TalentSheet from "./sheets/item/talent-sheet.js";
import CareerSheet from "./sheets/item/career-sheet.js";
import WeaponSheet from "./sheets/item/weapon-sheet.js";
import ArmourSheet from "./sheets/item/armour-sheet.js";
import AmmunitionSheet from "./sheets/item/ammunition-sheet.js";
import TrappingSheet from "./sheets/item/trapping-sheet.js";
import SpellSheet from "./sheets/item/spell-sheet.js";
import PrayerSheet from "./sheets/item/prayer-sheet.js";
import InjurySheet from "./sheets/item/injury-sheet.js";
import DiseaseSheet from "./sheets/item/disease-sheet.js";
import MutationSheet from "./sheets/item/mutation-sheet.js";
import ContainerSheet from "./sheets/item/container-sheet.js";
import MoneySheet from "./sheets/item/money-sheet.js";

// Import Data Models
import { CharacterModel } from "./model/actor/character.js";
import { NPCModel } from "./model/actor/npc.js";
import { CreatureModel } from "./model/actor/creature.js";
import { SkillModel } from "./model/item/skill.js";
import { TalentModel } from "./model/item/talent.js";
import { CareerModel } from "./model/item/career.js";
import { WeaponModel } from "./model/item/weapon.js";
import { ArmourModel } from "./model/item/armour.js";
import { AmmunitionModel } from "./model/item/ammunition.js";
import { TrappingModel } from "./model/item/trapping.js";
import { SpellModel } from "./model/item/spell.js";
import { PrayerModel } from "./model/item/prayer.js";
import { InjuryModel } from "./model/item/injury.js";
import { DiseaseModel } from "./model/item/disease.js";
import { MutationModel } from "./model/item/mutation.js";
import { ContainerModel } from "./model/item/container.js";
import { MoneyModel } from "./model/item/money.js";

// Import System Utilities
import registerHooks from "./system/hooks.js";
import WFRP2E from "./system/config-wfrp2e.js";
import WFRP2e_Utility from "./system/utility-wfrp2e.js";
import WFRP2e_Tables from "./system/tables-wfrp2e.js";
import Migration from "./system/migrations.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Initialize the WFRP2e system
 */
Hooks.once("init", function () {
  // Enable debug logging in development mode
  console.log("WFRP2e | Initializing system");

  // Register sheet application classes
  const { DocumentSheetConfig } = foundry.applications.apps;

  // Unregister default core sheets
  const actorClass = CONFIG.Actor.documentClass;
  const itemClass = CONFIG.Item.documentClass;

  DocumentSheetConfig.unregisterSheet(actorClass, "core", foundry.appv1.sheets.ActorSheet);
  DocumentSheetConfig.unregisterSheet(itemClass, "core", foundry.appv1.sheets.ItemSheet);

  // Register WFRP2e Actor Sheets
  DocumentSheetConfig.registerSheet(actorClass, "wfrp2e", ActorSheetWFRP2eCharacter, {
    types: ["character"],
    makeDefault: true,
    label: "SHEET.CharacterSheet"
  });

  DocumentSheetConfig.registerSheet(actorClass, "wfrp2e", ActorSheetWFRP2eNPC, {
    types: ["npc"],
    makeDefault: true,
    label: "SHEET.NPCSheet"
  });

  DocumentSheetConfig.registerSheet(actorClass, "wfrp2e", ActorSheetWFRP2eCreature, {
    types: ["creature"],
    makeDefault: true,
    label: "SHEET.CreatureSheet"
  });

  // Register WFRP2e Item Sheets
  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", SkillSheet, {
    types: ["skill"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", TalentSheet, {
    types: ["talent"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", CareerSheet, {
    types: ["career"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", WeaponSheet, {
    types: ["weapon"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", ArmourSheet, {
    types: ["armour"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", AmmunitionSheet, {
    types: ["ammunition"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", TrappingSheet, {
    types: ["trapping"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", SpellSheet, {
    types: ["spell"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", PrayerSheet, {
    types: ["prayer"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", InjurySheet, {
    types: ["injury"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", DiseaseSheet, {
    types: ["disease"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", MutationSheet, {
    types: ["mutation"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", ContainerSheet, {
    types: ["container"],
    makeDefault: true
  });

  DocumentSheetConfig.registerSheet(itemClass, "wfrp2e", MoneySheet, {
    types: ["money"],
    makeDefault: true
  });

  // Register Data Models
  CONFIG.Actor.dataModels["character"] = CharacterModel;
  CONFIG.Actor.dataModels["npc"] = NPCModel;
  CONFIG.Actor.dataModels["creature"] = CreatureModel;

  CONFIG.Item.dataModels["skill"] = SkillModel;
  CONFIG.Item.dataModels["talent"] = TalentModel;
  CONFIG.Item.dataModels["career"] = CareerModel;
  CONFIG.Item.dataModels["weapon"] = WeaponModel;
  CONFIG.Item.dataModels["armour"] = ArmourModel;
  CONFIG.Item.dataModels["ammunition"] = AmmunitionModel;
  CONFIG.Item.dataModels["trapping"] = TrappingModel;
  CONFIG.Item.dataModels["spell"] = SpellModel;
  CONFIG.Item.dataModels["prayer"] = PrayerModel;
  CONFIG.Item.dataModels["injury"] = InjuryModel;
  CONFIG.Item.dataModels["disease"] = DiseaseModel;
  CONFIG.Item.dataModels["mutation"] = MutationModel;
  CONFIG.Item.dataModels["container"] = ContainerModel;
  CONFIG.Item.dataModels["money"] = MoneyModel;

  // Register Document Classes
  CONFIG.Actor.documentClass = ActorWFRP2e;
  CONFIG.Item.documentClass = ItemWFRP2e;
  CONFIG.ChatMessage.documentClass = ChatMessageWFRP2e;

  // Expose WFRP2e to global scope
  game.wfrp2e = {
    config: WFRP2E,
    utility: WFRP2e_Utility,
    tables: WFRP2e_Tables,
    migration: Migration,
    version: "1.0.0"
  };

  // Log initialization
  console.log("WFRP2e | System initialized successfully");
});

/**
 * Register hooks when the system is ready
 */
Hooks.once("ready", function () {
  // Run any necessary migrations
  if (Migration && Migration.check) {
    Migration.check();
  }
  console.log("WFRP2e | System ready");
});

/**
 * Register all system hooks
 */
registerHooks();

export { WFRP2E, WFRP2e_Utility, WFRP2e_Tables };
