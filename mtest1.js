const readline=require("readline");
const rl = readline.createInterface({input:process.stdin,output:process.stdout});
rl.question("Enter number of rows:",(answer)=>{
    const n =Number(answer);
    for(let i=1;i<=n;i++){
        console.log("*".repeat(i));
    }
    rl.close();
});

