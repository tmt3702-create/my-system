# Warhammer Fantasy Roleplay 2nd Edition - Foundry VTT System

A comprehensive system for running grim and perilous games of Warhammer Fantasy Roleplay 2nd Edition in the Foundry Virtual Tabletop environment.

## Status: In Development

This is an MVP conversion from the WFRP4e Foundry VTT system to WFRP2e.

## Features (Planned)

### Phase 1: Character Creation ✓ (In Progress)
- Character sheets with WFRP2e characteristics
- Skill system with advances
- Career progression (4 ranks)
- Talent acquisition

### Phase 2: Combat System (Planned)
- Initiative rolls (Ag + 1d10)
- Melee/Ranged attack tests
- Degrees of Success calculation
- Armor and damage system
- Wound tracking

### Phase 3: Career Progression (Planned)
- Career exits and entries
- Rank advancement
- Experience point tracking
- Characteristic advances

### Phase 4: Magic System (Planned)
- Arcane magic with casting numbers
- Divine magic (Prayers/Miracles)
- Spell/Prayer items
- Miscast effects

## Installation

1. Clone this repository into your Foundry systems folder
2. Run `npm install`
3. Run `npm run build` to compile the system
4. Restart Foundry VTT
5. Create a new world using the "Warhammer Fantasy Roleplay 2nd Edition" system

## Development

### Building

```bash
npm run build      # Build with watch mode
npm run release    # Production build
npm run pack       # Pack compendiums
```

### Project Structure

```
src/
├── wfrp2e.js              # Main entry point
├── documents/             # Foundry Document classes
├── sheets/                # Actor and Item sheets
├── model/                 # DataModel definitions
└── system/                # Configuration, utilities, rolls
static/
├── templates/             # Handlebars templates
├── styles/                # CSS styles
├── lang/                  # Localization files
└── ...
packs/                      # Compendium packs
```

## Resources

- [Foundry VTT Documentation](https://foundryvtt.com/article/system-development/)
- [WFRP2e Official Rules](https://www.cubicle7games.com/)

## License

Apache License 2.0

## Credits

Original WFRP4e system by moo-man
WFRP2e conversion by WFRP2e Conversion Team
