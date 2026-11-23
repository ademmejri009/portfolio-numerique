def calculer(a, op, b):
    if op == "+": return a + b
    if op == "-": return a - b
    if op == "*": return a * b
    if op == "/":
        if b == 0:
            return "Erreur : division par zéro"
        return a / b
    return "Opérateur inconnu"

while True:
    ligne = input("Calcul (ex: 8 + 4) ou 'q' pour quitter : ")
    if ligne == "q":
        break
    try:
        a, op, b = ligne.split()
        print("Résultat :", calculer(float(a), op, float(b)))
    except ValueError:
        print("Format invalide, écris : nombre opérateur nombre")
