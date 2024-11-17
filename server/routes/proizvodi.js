import express from "express";

const router = express.Router();

class Proizvod{
    constructor(id, naziv, cijena, velicine){
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
    }
}

const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L']),
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L']),
    new Proizvod(3, 'Zimska kapa', 40, 'onesize'),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42']),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'])
];

router.get('/', (req, res) => {
    res.status(200).json(proizvodi);
});

router.get('/:id', (req, res) => {
    let id_proizvod = req.params.id;

    if(isNaN(id_proizvod)){
        return res.status(400).json({ message: "Krivi podaci!" });
    }

    const proizvod = proizvodi.find(p => p.id == id_proizvod);

    if(!proizvod){
        return res.status(400).json({ message: "Proizvod nije pronađen" });
    }

    return res.status(200).json(proizvod);
});

export default router;