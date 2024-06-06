namespace casting {
    let age: any = 25;
    (age as number).toFixed();
    (age as string).length;
    (age as string[]).forEach(i => console.log(i)); 

    let nome: string = 35 as unknown as string; 
}

