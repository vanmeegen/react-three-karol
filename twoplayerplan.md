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
- **Tab-basierte Ansicht**: Spieler programmieren nacheinander

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
- Zwei Startpositionen auf gegenüberliegenden Seiten (z.B. x=1 und x=8)
- **Blöcke in der Mitte** zwischen den Robotern
- Beide Roboter konkurrieren um dieselbe Ressource
- Mindestens 15-20 Blöcke in der Mitte zum Aufheben

## 🧪 Test-Driven Development (TDD) Ansatz

**Prinzip**: Red-Green-Refactor + Verify
1. 🔴 **Red**: Test schreiben der fehlschlägt
2. 🟢 **Green**: Minimale Implementation um Test zu bestehen
3. ✅ **Verify**: Tests ausführen (`npm test`)
4. 🏗️ **Build**: Build durchführen (`npm run build`)
5. 🔵 **Refactor**: Code verbessern, Tests müssen weiterhin bestehen

### Test-Framework Setup
- **Vitest** für Unit-Tests
- **@testing-library/react** für Component-Tests
- **@testing-library/user-event** für User-Interaktionen

### Workflow pro Schritt
1. Test schreiben
2. Test ausführen (sollte fehlschlagen) → `npm test`
3. Implementation schreiben
4. Test ausführen (sollte erfolgreich sein) → `npm test`
5. Build durchführen → `npm run build`
6. Bei Erfolg: Commit & Push
7. Bei Fehler: Fixen und wiederholen

## 🔧 Technische Implementierungsschritte (TDD)

### **Schritt 1: GameModel (TDD)**
1. 📝 Test schreiben: `GameModel.test.ts`
   - Test: Initial state ist 'setup'
   - Test: startPlayerProgramming() setzt currentPlayer
   - Test: updatePlayer1Score() erhöht Score
   - Test: checkWinCondition() setzt winner bei Score >= 10
   - Test: reset() setzt alles zurück
2. ✅ Implementation: `GameModel.ts`
3. ♻️ Refactor falls nötig

### **Schritt 2: KarolModel erweitern (TDD)**
1. 📝 Test schreiben: `KarolModel.test.ts` (erweitern)
   - Test: pickedUpBricksTotal startet bei 0
   - Test: pickupBrick() erhöht pickedUpBricksTotal
   - Test: reset() setzt pickedUpBricksTotal zurück
2. ✅ Implementation: `KarolModel.ts` erweitern
3. ♻️ Refactor falls nötig

### **Schritt 3: RaceExecutor (TDD)**
1. 📝 Test schreiben: `RaceExecutor.test.ts`
   - Test: Führt beide Programme abwechselnd aus
   - Test: Zählt pickupBrick() für beide Spieler
   - Test: Stoppt bei Gewinnbedingung
   - Test: Aktualisiert GameModel Scores
2. ✅ Implementation: `RaceExecutor.ts`
3. ♻️ Refactor falls nötig

### **Schritt 4: ScoreBoard Component (TDD)**
1. 📝 Test schreiben: `ScoreBoard.test.tsx`
   - Test: Zeigt beide Spieler-Scores an
   - Test: Aktualisiert bei Score-Änderung
   - Test: Hebt Führenden hervor
2. ✅ Implementation: `ScoreBoard.tsx`
3. ♻️ Refactor falls nötig

### **Schritt 5: WinnerDialog Component (TDD)**
1. 📝 Test schreiben: `WinnerDialog.test.tsx`
   - Test: Zeigt Gewinner an
   - Test: Zeigt Final-Scores
   - Test: "Neustart" Button funktioniert
2. ✅ Implementation: `WinnerDialog.tsx`
3. ♻️ Refactor falls nötig

### **Schritt 6: TwoPlayerGame Component (TDD)**
1. 📝 Test schreiben: `TwoPlayerGame.test.tsx`
   - Test: Zeigt Spieler 1 Programmierung zuerst
   - Test: Wechsel zu Spieler 2 funktioniert
   - Test: "Start Race" startet RaceExecutor
   - Test: ScoreBoard wird während Rennen aktualisiert
   - Test: WinnerDialog erscheint bei Gewinn
2. ✅ Implementation: `TwoPlayerGame.tsx`
3. ♻️ Refactor falls nötig

### **Schritt 7: World3D Anpassungen (TDD)**
1. 📝 Test schreiben: `World3D.test.tsx` (erweitern)
   - Test: Rendert zwei Karol-Instanzen
   - Test: Verschiedene Modelle für beide Spieler
2. ✅ Implementation: `World3D.tsx` erweitern
3. ♻️ Refactor falls nötig

### **Schritt 8: Standard Zwei-Spieler Welt (TDD)**
1. 📝 Test schreiben: `TwoPlayerWorld.test.ts`
   - Test: Erstellt Welt mit zwei Startpositionen
   - Test: Platziert Blöcke in der Mitte
   - Test: Mindestens 15-20 Blöcke vorhanden
2. ✅ Implementation: `TwoPlayerWorld.ts`
3. ♻️ Refactor falls nötig

### **Schritt 9: Integration Tests**
1. 📝 Test schreiben: `TwoPlayerIntegration.test.tsx`
   - Test: Kompletter Spielfluss von Start bis Gewinn
   - Test: Beide Spieler programmieren und Race läuft
2. ✅ Bugfixes und Anpassungen
3. ♻️ Refactor

### **Schritt 10: Hauptmenü erweitern**
1. 📝 Test schreiben: `App.test.tsx` (erweitern)
   - Test: Spielmodus-Auswahl erscheint
   - Test: Wechsel zwischen Modi funktioniert
2. ✅ Implementation: `App.tsx` erweitern
3. ♻️ Refactor falls nötig

## 🎨 UI-Mockup Konzept

### Phase 1: Spieler 1 Programmierung
```
┌─────────────────────────────────────────────────────────┐
│  [Einzelspieler] [Zwei-Spieler] ◄── Mode Selector       │
├─────────────────────────────────────────────────────────┤
│  📍 Jetzt programmiert: Spieler 1                       │
│  ────────────────────────────────────────────────────   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │   Spieler 1 Programm (Blockly/Code)              │  │
│  │   [Blockly] [Code]                               │  │
│  │                                                   │  │
│  │   wiederhole 5 mal                                │  │
│  │     Schritt                                       │  │
│  │     Aufheben                                      │  │
│  │   *ende                                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         3D Welt - Vorschau                      │    │
│  │    🤖 (links)    [BLÖCKE]    (rechts)           │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  [Fertig → Spieler 2]                                   │
└─────────────────────────────────────────────────────────┘
```

### Phase 2: Spieler 2 Programmierung
```
┌─────────────────────────────────────────────────────────┐
│  [Einzelspieler] [Zwei-Spieler] ◄── Mode Selector       │
├─────────────────────────────────────────────────────────┤
│  📍 Jetzt programmiert: Spieler 2                       │
│  ────────────────────────────────────────────────────   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │   Spieler 2 Programm (Blockly/Code)              │  │
│  │   [Blockly] [Code]                               │  │
│  │                                                   │  │
│  │   wiederhole 10 mal                               │  │
│  │     Schritt                                       │  │
│  │   *ende                                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         3D Welt - Vorschau                      │    │
│  │    🤖 (links)    [BLÖCKE]    🧛 (rechts)        │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  [◄ Zurück zu Spieler 1]  [Bereit → Start Race]        │
└─────────────────────────────────────────────────────────┘
```

### Phase 3: Rennen läuft
```
┌─────────────────────────────────────────────────────────┐
│  🏁 RENNEN LÄUFT! 🏁                                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Spieler 1: 🟦🟦🟦🟦🟦🟦🟦 7/10                         │
│  Spieler 2: 🟩🟩🟩🟩🟩 5/10                             │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         3D Welt - Live Action                   │    │
│  │    🤖 →→→    [BLÖCKE]    ←←← 🧛                 │    │
│  │         (beide bewegen sich)                    │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  Geschwindigkeit: [Langsam][Mittel][Schnell]            │
│  [⏸ Pause]  [⏹ Stopp]                                   │
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

## ✅ Getroffene Design-Entscheidungen

1. **UI-Layout**: ✅ **Nacheinander/Tab-basiert**
   - Spieler 1 programmiert zuerst
   - Dann wechselt die Ansicht zu Spieler 2
   - Voller Platz für jeden Editor
   - Spieler 2 sieht Strategie von Spieler 1 nicht während der Programmierung

2. **Welt-Design**: ✅ **Blöcke in der Mitte**
   - Roboter starten auf gegenüberliegenden Seiten
   - **Blöcke befinden sich zwischen den Robotern**
   - Beide konkurrieren um dieselben Ressourcen
   - Macht das Spiel strategischer und spannender

3. **Gewinnbedingung**: ✅ **Einfach**
   - Nur eine Bedingung: Wer zuerst 10 Blöcke aufhebt, gewinnt
   - Klare, leicht verständliche Regel

4. **Programmier-Zeit**: ✅ **Unbegrenzt**
   - Spieler haben so viel Zeit wie sie brauchen
   - Kein Zeitdruck beim Programmieren

5. **Execution Speed**: ✅ **Einstellbar**
   - Regler für verschiedene Geschwindigkeiten (langsam/mittel/schnell)
   - Wie im Einzelspieler-Modus

## 📋 Implementierungs-Todos (TDD)

### Phase 1: Core Models
- [ ] Test: GameModel.test.ts schreiben
- [ ] ✅ Implement: GameModel.ts
- [ ] Test: KarolModel.test.ts erweitern (pickedUpBricksTotal)
- [ ] Implement: KarolModel.ts erweitern
- [ ] Test: RaceExecutor.test.ts schreiben
- [ ] Implement: RaceExecutor.ts

### Phase 2: UI Components
- [ ] Test: ScoreBoard.test.tsx schreiben
- [ ] Implement: ScoreBoard.tsx
- [ ] Test: WinnerDialog.test.tsx schreiben
- [ ] Implement: WinnerDialog.tsx
- [ ] Test: TwoPlayerGame.test.tsx schreiben
- [ ] Implement: TwoPlayerGame.tsx

### Phase 3: 3D World & Integration
- [ ] Test: World3D.test.tsx erweitern
- [ ] Implement: World3D.tsx anpassen
- [ ] Test: TwoPlayerWorld.test.ts schreiben
- [ ] Implement: TwoPlayerWorld.ts
- [ ] Test: TwoPlayerIntegration.test.tsx schreiben
- [ ] Fixes basierend auf Integration Tests

### Phase 4: Main App & Polish
- [ ] Test: App.test.tsx erweitern
- [ ] Implement: App.tsx (Spielmodus-Auswahl)
- [ ] Beispiel-Programme erstellen
- [ ] Dokumentation aktualisieren
