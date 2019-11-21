let friends =['Jon','Doe','Sven','Felix','Bravo']
var i=0;
document.addEventListener("DOMContentLoaded",function()
{
    let button=document.getElementById("button");
button.addEventListener('click',function()
    {  
        while(friends[i]!=null)
        {
            let friend =document.createElement('div');
            friend.className='friend';
            document.body.appendChild(friend);
            let heading=document.createElement("h3");
            let name=document.createTextNode(friends[i]); 
            heading.appendChild(name);
            friend.appendChild(heading);
           // console.log(friends[i]+":");
            for(var j=99;j>0;j--)
            {
                let para=document.createElement('p');
                if(j==1)
                {
                    para.innerHTML=j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out, no more lines of code';
                friend.appendChild(para);
            //    console.log(j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out, no more lines of code');  
                 }
                else
                {
                    para.innerHTML=j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out'+(j-1)+' lines of code';
                    friend.appendChild(para);
              //      console.log(j+' lines of code in the file,'+j+' lines of code;'+friends[i]+' strikes one out, clear it all out'+--j+' lines of code');   
                }
            }
                i++;
        }

    });

    
});
