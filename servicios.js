class Combo{
    constructor(combo,duracion,actividades,imagen){
        this.combo=combo
        this.duracion=duracion
        this.actividades=actividades
        this.imagen=imagen
    }

    generarHTML = ()=>{
        return `<p> el combo ${this.combo} tiene una duracion de ${this.duracion} e incluye ${this.actividades}</p><br> <img src="${this.imagen}" alt="${this.combo}"height="300 px" width="300px">`
    }
}

let combos = [
    new Combo('Cumpleaños','2 horas','juegos recreativos \n baile \n maquillaje artistico','https://img.freepik.com/foto-gratis/ninos-felices-jugando-juntos-al-aire-libre-bailando-sobre-cesped-disfrutando-actividades-al-aire-libre-divirtiendose-parque-concepto-fiesta-o-amistad-ninos_74855-11760.jpg?t=st=1654815007~exp=1654815607~hmac=17f0dacd1022049d3f2e149e93fdd4dd95400bfef4be43b09d5163d08c29d2c2&w=740'),
    new Combo('Fiesta Fluor','2 horas y media','juegos recreativos \n baile \n maquillaje artistico con pituras fluor \n pinta pelos \n accesorios luminosos', 'https://scontent.fcor11-1.fna.fbcdn.net/v/t1.6435-9/71895760_887846501599301_3849808611672850432_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=109&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFlWgruYn2hgkvejNHuzay96UDN-ZGusAvpQM35ka6wC2vViVwxMGozzbJYqticqeo&_nc_ohc=8zXX0mgtAS4AX_ycBrj&_nc_ht=scontent.fcor11-1.fna&oh=00_AT9BSgovWqtlLJ5Cf2bSDtP4pWDrNpSOmx4NN1tBjEBvIg&oe=62C9A451'),
    new Combo('Fiesta Arte','2 horas y media','juegos recreativos \n baile \n atriles para pintar \n pintores','https://i.blogs.es/a5d211/ideapaint/1366_2000.jpg')
]
console.table(combos)
let destino = document.getElementById('combo')
let contador = 0
for(combo of combos){
    let nuevoEle = document.createElement('div')
    nuevoEle.id = `producto${contador}`
    nuevoEle.innerHTML = combo.generarHTML()
    destino.append(nuevoEle)
    contador += 1
}


let prod0 = document.querySelector('#producto0')
let clase1 = document.querySelector('.nombres4')
console.log(prod0)
console.log(clase1)
