def maximum(t):
    m = t[0]
    for x in t:
        if x > m:
            m = x
    return m

def tri_bulles(t):
    t = t[:]
    n = len(t)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if t[j] > t[j + 1]:
                t[j], t[j + 1] = t[j + 1], t[j]
    return t

def recherche(t, v):
    for i in range(len(t)):
        if t[i] == v:
            return i
    return -1

t = [5, 2, 9, 1]
print("Maximum :", maximum(t))
print("Tri :", tri_bulles(t))
print("Position de 9 :", recherche(t, 9))
