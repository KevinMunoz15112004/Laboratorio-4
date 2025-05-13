//TAREA DESAFIO LABORATORIO 4
//Integrantes: Dany Mejia, Kevin Muñoz, Joshua Morocho

//Red Social: Instagram (Explorar Personas)
//OBJETOS

const user={
    nombre:"Christophe Ange",
    apellido: "De Blaireville",
    cuentaVerificada:true,
    pais: "Paris",
    profesiones:{
        profesionUno: "Manager: Influencers & Models",
        profesionDos:"Director de casting y produccion",
        profesionTres: "Fundador de: Infinity Aura e Infinity Morph",
    }, 
    publicaciones: 14,
    threads:true
}

//Agregando una clave con su valor al objeto
user.seguidores= 18200

//Eliminando una clave valor al objeto
delete user.threads
console.log(user)

const infoAdicional={
    canalDeDifusion:true,
    LinkTree:["PayPal","Instagram","Snapchat","Infinity Aura","TikTok","Facebook"],
    links:{
        PayPal: "https://tr.ee/oVOkidL7ka",
        Instagram: "https://www.instagram.com/krys_business/    ",
        Snapchat: "https://www.snapchat.com/add/kryss_business",
        Infinity_Aura: "https://www.instagram.com/infinity.aura1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        TikTok: "https://www.tiktok.com/@krys.business",
        Facebook: "https://www.facebook.com/people/Christophe-Ange-De-Blaireville/100012795614539/"  
      },
    enviarFacebook(){
        const Facebook = this.LinkTree[5];
        const linkFacebook=this.links[Facebook];
        return `Disponible link de contacto de ${user.nombre} en Facebook: ${linkFacebook}`
    }
}

console.log(infoAdicional.enviarFacebook())
//Expandiendo los objetos
const todo={...user,...infoAdicional}

console.log(todo)

//Arreglos

const usersIntagram = [
    {
        name: "Nico",
        lastName: "Bell",
        userName: "bellnico",
        postsNum: 1012,
        followInfo:{
            numberFollowers: 111000,
            followed: 2847
        },
        rol: "Creador Digital"
    },
    {
        name: "Let",
        lastName: "Castillo",
        userName: "let_castillo_",
        postsNum: 35,
        followInfo:{
            numberFollowers: 7162,
            followed: 389
        },
        rol: "Modelo"
    }
]

usersIntagram.map((user, index) => 
    console.log(`Posición ${index} - Usuario ${user.userName}`)
)

const nicoInfo = usersIntagram.find((user) => {
    return user.name === "Nico"
})

console.log(`El usuario ${nicoInfo.name} tiene ${nicoInfo.postsNum} publicaciones, además cuenta con ${nicoInfo.followInfo.followed} seguidores`)

const letInfo = usersIntagram.find((user) => {
    return user.name === "Let"
})

const {followInfo:{followed}} = letInfo

console.log(`El usuario ${letInfo.name} ocupa un rol de ${letInfo.rol} en la plataforma y tiene ${followed} seguidores`)