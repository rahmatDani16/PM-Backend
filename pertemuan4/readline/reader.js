import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

//Fungsi untuk bertanya ke pengguna 

export function pertanyaan(query){
    return new Promise((resolve)=>{
        rl.question(query,(answer)=>{
            resolve(answer);
            rl.close()
        })
    })
}