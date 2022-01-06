
// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:

// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

// Di nuovo buon lavoro!




const container = document.getElementById('container');

const posts = [
    {
        avatar: 'https://picsum.photos/id/10/200/300',
        userName: 'User__1',
        data: '10 min ago',
        postText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus reiciendis minima ut nisi veniam aut.',
        pImg: 'https://picsum.photos/id/10/200/300',
        likes: 10,
    },
    {
        avatar: 'https://picsum.photos/id/20/200/300',
        userName: 'User__2',
        data: 'last week',
        postText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam commodi facere aperiam quaerat praesentium reprehenderit eos repellat nemo  cumque unde enim explicabo, saepe dignissimos velit eaque nam quasi cum tempore eum aspernatur atque? Pariatur quos rem possimus? Inventore sed ipsa quos numquam earum. Minus consectetur facilis hic autem est.',
        pImg: 'https://picsum.photos/id/20/200/300',
        likes: 20,
    },
    {
        avatar: 'https://picsum.photos/id/30/200/300',
        userName: 'User__3',
        data: 'last month',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor voluptates error architecto minus fugit velit tempore dolorem est culpa?',
        pImg: 'https://picsum.photos/id/30/200/300', 
        likes: 30,
    },
    {
        avatar: 'https://picsum.photos/id/40/200/300',
        userName: 'User__4',
        data: 'last year',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique facilis consequatur ullam consectetur quos blanditiis officia non doloribus praesentium ut fugit, ab eveniet! Debitis aut qui dolores adipisci iste',
        pImg: 'https://picsum.photos/id/40/200/300', 
        likes: 40,
    },
    {
        avatar: 'pdor__figliojpg.jpg',
        userName: 'Pdor',
        data: 'forever',
        postText: 'Chi osa interrompere il sonno di Pdor?? Il grande Pdor! Figlio di Kmer, della tribù di Istarr! Della terra desolata del Kfnirr! Uno degli ultimi sette saggi: Bvururr, Ghaner, Astaparing, Ezuzar, Parahn, Fususs e Taring! Eh?! Pdor! Colui che era, colui che è stato e colui che sempre sarà...ciucia chi e ciucia là...eh? Pdor! Colui il quale ha inseguito e ha sconfitto i demoni Semm, che ora vagano per il mondo domandandosi: "ma numm, chi Semm?" Avvicinati tu, oh uomo dalla forma gnomica, e ricordati che sei al cospetto di Pdor! Colui il quale è sceso nelle sacre acque del lago PffNiuhurr, tra le ninfe PffNigherals, e lì ha assaggiato il mitico cibo degli Dei: la PIADEINA! Avvicinati tu, oh uomo dalla terra dei fichi d\'India, e ricordati che sei al cospetto di Pdor! Colui il quale ha amato le Mille Dee, tra cui la Dea Berta: la Dea dalla gamba aperta! Pdor, il GRANDE Pdor!!Che ha visto i Mille Draghi alati Ghazis, UhRar, Parihn e PhaRemm..!',
        pImg: 'pdor__figliojpg.jpg', 
        likes: 50000,
    },
];

// loop che genera n post quanti gli oggetti contenuti nell'array posts e li inietta nel container
for (let i = 0; i < posts.length; i++) {
    const {avatar, userName, data, postText, pImg, likes} = posts[i];
    console.log(avatar, userName, data, postText, pImg, likes);
    container.innerHTML +=
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${avatar}" alt="${userName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${userName}</div>
                        <div class="post-meta__time">${data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${pImg}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
}