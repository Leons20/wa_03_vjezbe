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

export { Proizvod, proizvodi };