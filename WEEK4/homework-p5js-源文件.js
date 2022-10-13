

var col;//控制颜色
var freq = 0.000000001; //步长
var r;//半径

function setup() {
  createCanvas(800,800);	
}

function draw() 
{
    //background(25*noise(millis()/2000));    //会呼吸的宇宙背景   
    background(50,100);    //会呼吸的宇宙背景          
    translate(100,100);  
    rotate(millis()/1000);//随时间旋转
    ellipseMode(RADIUS); //以半径模式画圆
    drawstar(millis()/30000);
  
    translate(500,500);  
    rotate(millis()/1000);//随时间旋转
    ellipseMode(RADIUS); //以半径模式画圆
    drawstar(millis()/80000);
  
       
}



function drawstar(rate)
{
    
  for (var i=0; i<100; i ++) {  // 粒子总数
    //circle(60,70,60);   //粒子基础位置
    //col=map(cir,25,375,175,0);  //颜色映射
    //r=map(cir,25,375,15*noise(i),10*noise(i));  //圆半径的计算，由远及近变大
    //r=map(cir,25,375,2,10); 
    //fill(col,col,200*noise(millis()/2000));//紫红为主色调
    fill(255,255,255);
    //noStroke();
    //ellipse(cir*cos(i), cir*sin(rate*i),r,r);  //周期核心
    
          
 }	
}

function drawstar(rate)
{
    
  for (var i=0; i<100; i ++) {  // 粒子总数
    cir= 200 + 175*sin(millis()*freq*i);    //粒子基础位置
    r=map(cir,25,375,30*noise(i),10*noise(i));  //圆半径的计算，由远及近变大
    //r=map(cir,25,375,2,10); 
    //fill(col,col,200*noise(millis()/2000));//紫红为主色调
    fill(255,255,255);
    //noStroke();
    ellipse(cir*cos(i), cir*sin(rate*i),r,r);  //周期核心
    
          
 }	
}


function drawmountain()//基于噪声的山峦画法
{
    for(var i=1;i<=9;i++)
      {
    for (let x=0; x < width; x++) 
    {
    let noiseVal = noise(i*10+x/100-xoff*i/1.2);//控制山的移动，实际是取随机的范围移动
      if(bgc>100)
    stroke(bgc/i-10);
      else
        stroke(100/i);
    line(x, height*3/(10-i)+noiseVal*height/2, x, height);
    }
     }
}
