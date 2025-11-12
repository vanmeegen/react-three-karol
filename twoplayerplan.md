# Plan: Zwei-Spieler Roboter-Wettkampf

## 🎯 Ziel
Zwei Spieler programmieren jeweils einen Roboter. Beide Programme werden gleichzeitig ausgeführt. **Gewinner**: Wer zuerst 10 Blöcke aufgehoben hat.

## 🏗️ Architektur-Konzept

### Spielablauf:
1. **Phase 1**: Spieler 1 programmiert seinen Roboter (Blockly/Text)
2. **Phase 2**: Spieler 2 programmiert seinen Roboter (Blockly/Text)
3. **Phase 3**: Beide Programme starten gleichzeitig
4. **Phase 4**: Gewinner wird angezeigt, wenn ein Spieler 10 Blöcke aufgehoben hat

## 📦 Hauptkomponenten

### 1. **GameModel (NEU)** - Spielverwaltung
```typescript
- gameState: 'setup' | 'player1-program' | 'player2-program' | 'racing' | 'finished'
- currentPlayer: 1 | 2
- player1Score: number (aufgehobene Blöcke)
- player2Score: number
- winner: 1 | 2 | null
- winCondition: number (default: 10)
```

### 2. **Zwei Roboter-Instanzen**
- `karol1: KarolModel` (Startposition z.B. links)
- `karol2: KarolModel` (Startposition z.B. rechts)
- Visuelle Unterscheidung: Verschiedene 3D-Modelle (z.B. Robot vs. Dracula)

### 3. **Zwei Programmier-Bereiche**
- `program1: ProgramModel`
- `program2: ProgramModel`
- Getrennte Blockly-Workspaces
- Getrennte Code-Editoren

### 4. **Parallele Ausführungs-Engine (NEU)**
```typescript
class RaceExecutor {
  - executeRace(program1, program2, karol1, karol2, gameModel)
  - Führt beide Programme im Wechsel aus (Schritt für Schritt)
  - Zählt aufgehobene Blöcke
  - Prüft Gewinnbedingung nach jedem Schritt
  - Stoppt beide Programme bei Gewinn
}
```

### 5. **UI-Anpassungen**
- **Spielmodus-Auswahl**: Einzelspieler vs. Zwei-Spieler
- **Spieler-Indikator**: "Jetzt programmiert: Spieler 1/2"
- **Score-Board**: Live-Anzeige der aufgehobenen Blöcke
- **Gewinner-Dialog**: Anzeige des Siegers
- **Race-Controls**: "Bereit", "Start Race", "Neustart"

### 6. **Welt-Setup**
- Zwei Startpositionen definieren
- Symmetrisches oder asymmetrisches Layout
- Genügend Blöcke zum Aufheben platzieren (mindestens 10+ pro Spieler)

## 🔧 Technische Implementierungsschritte

### **Schritt 1: GameModel erstellen**
- Neue Datei: `src/models/GameModel.ts`
- Verwaltet Spielzustand, Spieler-Wechsel, Scores, Gewinner
- MobX Observable für reaktive UI-Updates

### **Schritt 2: RaceExecutor erstellen**
- Neue Datei: `src/interpreter/RaceExecutor.ts`
- Führt zwei Programme parallel aus (Generator-basiert)
- Zählt `pickupBrick()`-Aufrufe für jeden Spieler
- Prüft Gewinnbedingung kontinuierlich
- Unterstützt verschiedene Geschwindigkeiten

### **Schritt 3: KarolModel erweitern**
- Tracking für aufgehobene Blöcke hinzufügen
- `pickedUpBricksTotal: number` Property
- Update in `pickupBrick()` Methode

### **Schritt 4: TwoPlayerGame Component**
- Hauptkomponente für Zwei-Spieler-Modus
- Zwei Programmier-Panels (nacheinander oder Tabs)
- Spielfluss-Steuerung
- Integration mit GameModel

### **Schritt 5: UI-Komponenten**
- **ScoreBoard**: Zeigt Scores beider Spieler live
- **WinnerDialog**: Modal für Gewinner-Anzeige
- **PlayerIndicator**: Zeigt aktiven Spieler
- **RaceControls**: Start, Pause, Reset Buttons

### **Schritt 6: World3D Anpassungen**
- Zwei Karol-Komponenten rendern
- Unterschiedliche Modelle/Farben
- Kamera-Position anpassen für beide Roboter

### **Schritt 7: Standard-Welt erstellen**
- Zwei Startpositionen (z.B. x=2 und x=8)
- Symmetrisches Layout mit Blöcken
- Mindestens 10-15 Blöcke zum Aufheben pro Seite

### **Schritt 8: Hauptmenü erweitern**
- Button: "Einzelspieler" / "Zwei-Spieler"
- Routing zwischen Modi

## 🎨 UI-Mockup Konzept

```
┌─────────────────────────────────────────────────────────┐
│  [Einzelspieler] [Zwei-Spieler] ◄── Mode Selector       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Spieler 1: █████ 7/10    Spieler 2: ███ 3/10          │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────┐    │
│  │   Spieler 1          │  │   Spieler 2          │    │
│  │   Programm           │  │   Programm           │    │
│  │   (Blockly/Code)     │  │   (Blockly/Code)     │    │
│  └──────────────────────┘  └──────────────────────┘    │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         3D Welt mit 2 Robotern                 │    │
│  │    🤖 (Robot)           🧛 (Dracula)           │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  [◄ Spieler 1]  [Spieler 2 ►]  [▶ Start Race]         │
└─────────────────────────────────────────────────────────┘
```

## ⚡ Ausführungslogik

```typescript
// Pseudo-Code für parallele Ausführung
async function executeRace() {
  const gen1 = interpreter1.executeSteps();
  const gen2 = interpreter2.executeSteps();

  while (!gameModel.winner) {
    // Spieler 1 Schritt
    const result1 = gen1.next();
    if (result1.action === 'pickupBrick') {
      gameModel.player1Score += result1.count;
    }

    // Spieler 2 Schritt
    const result2 = gen2.next();
    if (result2.action === 'pickupBrick') {
      gameModel.player2Score += result2.count;
    }

    // Gewinn-Check
    if (gameModel.player1Score >= 10) {
      gameModel.winner = 1;
    } else if (gameModel.player2Score >= 10) {
      gameModel.winner = 2;
    }

    await delay(executionSpeed);
  }

  showWinnerDialog();
}
```

## 🎯 Zusätzliche Features (Optional)

1. **Kollisionserkennung**: Roboter können nicht denselben Platz besetzen
2. **Sabotage-Modus**: Spieler können Blöcke vor dem anderen legen
3. **Zeitlimit**: Gewinner bei Timeout ist wer mehr Blöcke hat
4. **Verschiedene Welten**: Auswahl zwischen verschiedenen Rennstrecken
5. **Replay-Funktion**: Rennen nochmal abspielen
6. **Statistiken**: Anzahl Schritte, Zeit, Effizienz

## ❓ Offene Entscheidungsfragen

1. **UI-Layout**: Sollen beide Programmier-Bereiche gleichzeitig sichtbar sein (Split-Screen) oder nacheinander (Tab-basiert)?

2. **Welt-Design**: Soll die Welt symmetrisch sein (faire Bedingungen) oder unterschiedliche Herausforderungen bieten?

3. **Gewinnbedingung**: Nur "10 Blöcke aufheben" oder auch alternative Bedingungen (z.B. "erreiche Zielpunkt")?

4. **Programmier-Zeit**: Soll es ein Zeitlimit für die Programmierung geben oder unbegrenzt?

5. **Execution Speed**: Soll die Ausführungsgeschwindigkeit fest sein oder einstellbar?

## 📋 Implementierungs-Todos

- [ ] GameModel erstellen
- [ ] RaceExecutor erstellen
- [ ] KarolModel erweitern (Score-Tracking)
- [ ] TwoPlayerGame Component erstellen
- [ ] ScoreBoard Component erstellen
- [ ] WinnerDialog Component erstellen
- [ ] World3D für zwei Roboter anpassen
- [ ] Standard Zwei-Spieler Welt erstellen
- [ ] Hauptmenü erweitern (Spielmodus-Auswahl)
- [ ] End-to-End Tests
- [ ] Beispiel-Programme erstellen
