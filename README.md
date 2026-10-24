\# Field App — Rebeca Alexandra



Membru: Rebeca G Pestritu  

GitHub: RebecaAlexandra2



\## Aplicații



\- `expo/`: aplicație Expo cu TypeScript.

\- `flutter/`: aplicație Flutter cu Dart.

\- Ambele afișează numele echipei și descrierea clădirii din exercițiul 1.



\## Rulare Expo



```powershell

cd expo

bun install

bun run web

```



Pentru emulator și iPhone: `bun start`, apoi `a` pentru Android

sau scanarea codului QR cu iPhone-ul, folosind Expo Go.



\## Rulare Flutter



```powershell

cd flutter

flutter pub get

flutter run -d chrome

```



Pentru emulator: `flutter run -d emulator-5554`.



Flutter a fost verificat în browser și pe emulator Android.

Expo a fost verificat în browser, pe emulator Android și pe iPhone.

Flutter pe iPhone necesită macOS și Xcode.



\## Exerciții TypeScript și Dart



În `exercises/ts-vs-dart/` sunt cele cinci exerciții în ambele

limbaje, inclusiv modificările cerute:



1\. Clădiri cu număr opțional de lifturi.

2\. Sondaje cu data creării.

3\. Repository cu numărare, ștergere și sortare.

4\. Încărcări cu reîncercări și pauze de 100, 200 și 400 ms.

5\. Evenimente cu anulare și motiv.



Rulare din folderul exercițiilor:



```powershell

bun run ex1.ts

dart run ex1.dart

```



Se înlocuiește `1` cu numărul exercițiului.



Verificări efectuate: TypeScript strict și `dart analyze`,

fără erori.



\## Capturi



Capturile sunt în `docs/week-1/`.

Fișierele cu `building` în nume arată versiunea cu exercițiul 1:



\- Expo: web, emulator Android și iPhone.

\- Flutter: web și emulator Android.

