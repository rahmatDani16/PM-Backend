import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Fungsi untuk bertannya dan menunggu input dari pengguna

export function tanyaApa(query){
    return new Promise((resolve)=>{
        rl.question(query,(answer)=>{
            resolve(answer)
        })
    })
}
//Fungsi untuk menutup interface readline
export function closeInterface(){
    rl.close();
}