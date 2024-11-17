import express from "express";

const router = express.Router();

class Proizvod{
    constructor(id, naziv, cijena, velicine, opis, slike, dostupne_boje, karakteristike){
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.slike = slike;
        this.dostupne_boje = dostupne_boje || ['crna'];
        this.karakteristike = karakteristike || {};
    }
}
  
const proizvodi = [
    new Proizvod(
        1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L'],
        'Kvalitetna pamučna majica.', 
        ['/images/majica1.png'],
        ['crna', 'bijela', 'plava'], 
        { materijal: 'pamuk', težina: '200g', održavanje: 'ručno pranje' }
    ),
    new Proizvod(
        2, "Levi's 501 traperice", 110, ['S', 'M', 'L'],
        'Originalne Levi\'s 501 traperice.',
        ['/images/traperice1.png'],
        ['plava'], 
        { materijal: 'denim', težina: '500g', održavanje: 'strojno pranje' }
    ),
    new Proizvod(
        3, 'Zimska kapa', 40, 'onesize',
        'Topla vunena kapa za zimu.',
        ['/images/kapa1.png'],
        ['crna', 'siva'], 
        { materijal: 'vuna', težina: '100g', održavanje: 'ručno pranje' }
    ),
    new Proizvod(
        4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'],
        'Sportske čarape s logotipom Adidas.',
        ['/images/carape1.png'],
        ['bijela', 'crna'], 
        { materijal: 'pamuk', težina: '50g', održavanje: 'strojno pranje' }
    ),
    new Proizvod(
        5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'],
        'Sportske tenisice s vrhunskom udobnošću.',
        ['/images/tenisice1.png'],
        ['bijela', 'crna', 'crvena'], 
        { materijal: 'sintetika', težina: '700g', održavanje: 'brisanje vlažnom krpom' }
    )
];

class Narudzba{
    constructor(id, naruceni_proizvodi){
        this.id = id;
        this.naruceni_proizvodi = naruceni_proizvodi;
    }
    get ukupnaCijena(){
        let ukupno = this.naruceni_proizvodi.reduce((suma, trenutni_proizvod) => {
            let pronadeni_proizvod = proizvodi.find(p => p.id == trenutni_proizvod.id);
            console.log(pronadeni_proizvod);
            return suma + pronadeni_proizvod.cijena * trenutni_proizvod.narucena_kolicina;
        }, 0);
        return ukupno;
    }
}

let dummy_narudzba = new Narudzba(1, [
    { id: 1, velicina: 'M', narucena_kolicina: 2 },
    { id: 3, velicina: 'onesize', narucena_kolicina: 1 },
]);

console.log(dummy_narudzba);

let narudzbe = [];

narudzbe.push(dummy_narudzba);

router.post("/", (req, res) => {
    let podaci = req.body;
    let naruceni_proizvodi = podaci.naruceni_proizvodi;

    if(!Array.isArray(naruceni_proizvodi) || naruceni_proizvodi.length == 0){
        return res.status(400).json({ message: 'Nema podataka' });
    }

    let id_nove_narudzbe = narudzbe.length ? narudzbe.at(-1).id + 1 : 1;

    const narudzba_obj = new Narudzba(id_nove_narudzbe, naruceni_proizvodi);

    narudzbe.push(narudzba_obj);

    res.status(201).json(podaci);
});

router.post('/narudzbe', (req, res) => {
    const novaNarudzba = {
        id: narudzbe.length + 1,
        proizvodi: req.body,
        datum: new Date(),
    };
    narudzbe.push(novaNarudzba);
    res.status(201).send(novaNarudzba);
});

router.get('/narudzbe', (req, res) => {
    res.send(narudzbe);
});

export default router;