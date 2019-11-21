let friends =['Jon','Doe','Sven','Felix','Bravo']
var i=0;
document.addEventListener("DOMContentLoaded",function()
{
    let button=document.getElementById("button");
button.addEventListener('click',function()
    {  
        while(friends[i]!=null)
        {
            console.log(friends[i]+":");
            for(var j=99;j>0;j--)
            {
                if(j==1)
                console.log(j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out, no more lines of code');  
                else
                console.log(j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out'+--j+' lines of code');   
            }
                i++;
        }

    });

    
});
