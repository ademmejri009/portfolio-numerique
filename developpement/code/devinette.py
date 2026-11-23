import random, sys

secret = int(sys.argv[1]) if len(sys.argv) > 1 else random.randint(1, 100)
essais = 0
print("J'ai choisi un nombre entre 1 et 100.")
while True:
    essais += 1
    try:
        n = int(input("Ton choix : "))
    except ValueError:
        print("Entre un nombre entier.")
        continue
    if n < secret:
        print("Plus grand !")
    elif n > secret:
        print("Plus petit !")
    else:
        print(f"Bravo, trouvé en {essais} essais !")
        break
