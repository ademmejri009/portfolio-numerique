notes = {}

while True:
    nom = input("Matière (ou 'fin') : ")
    if nom == "fin":
        break
    try:
        notes[nom] = float(input("Note sur 20 : "))
    except ValueError:
        print("Note invalide, matière ignorée.")

if notes:
    moyenne = sum(notes.values()) / len(notes)
    meilleure = max(notes, key=notes.get)
    print(f"Moyenne : {moyenne:.2f} / 20")
    print(f"Meilleure matière : {meilleure} ({notes[meilleure]})")
else:
    print("Aucune note saisie.")
