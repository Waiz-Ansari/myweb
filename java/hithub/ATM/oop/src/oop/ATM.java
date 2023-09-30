 package oop;

import java.util.HashMap;
import java.util.Scanner;

//  thjis is the main class
 public class ATM{     
    public static void main(String[] args) {
      ATMop newObj = new ATMop();
    }
 }


 class Data{ //this class for store all blance
    // int balance;
    float balance;
 }
 
 //  In this class for permitions and operations
 class ATMop {  
    //  float balance; // abhi k liye after full line comment is no mor
     Scanner sc =new Scanner(System.in);
     HashMap<Integer, Data> map = new HashMap<>();
     
     ATMop(){ 
        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
         System.out.println("welcom to our ATM");
         checkAnoutherAccount();
 }

// ===============================================================================

// IS CODE MA HI HUM SUB KER RHY HAN YAHAN PIN LAY RHY HA NI HA TO ADD KARA RHY HAN OR PHIR NEW OBJ BNA K STORE KARA RHY HAN
//check anouther amount
public void checkAnoutherAccount(){
    System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++");
System.out.println("enter your pin code");
int pincode = sc.nextInt();

if(map.containsKey(pincode) == true){
    // Do something with the obj when the pincode exists in the map
    Data obj = map.get(pincode); //ye ak object ha is ma hum jo bhi pincode avalible ha ha us ko Data obj ma store ker rhy han
    manu(obj);


}else{
    System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    System.out.println("invalid pin code please try again later");
    System.out.println("set your pin code");
    // integer pin = new integer(); 
    // int pin =  sc.nextInt();
     int pin = sc.nextInt();
    // Integer pinInteger = pin; // Auto-boxing: int to Integer
    Data obj = new Data();
    map.put(pin ,obj) ;
    manu(obj);
}



}
// ===============================================================================



 //  this is main manu method
 public void manu(Data obj){
     System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
     System.out.println("please inter a valid number");
     System.out.println( "1) check balance");
     System.out.println( "2) deposit money");
System.out.println( "3) withdraw monay");
System.out.println( "4) check another account");
System.out.println( "5) enter 5 to Exit");


// Scanner sc;
int x = sc.nextInt();

if(x==1){
    checkBalance(obj);
}
else if (x == 2 ){
deposit(obj);
 }
 else if (x == 3 ){
    withdraw(obj);
 }
 else if (x == 4 ){
    checkAnoutherAccount();
 }
 else if (x == 5 ){
    System.out.println("thank you !");
 
}
else{
    System.out.println("invalid input");
    manu(obj);
}
}


// methoda for above if else condition

public void checkBalance(Data obj){
    System.out.println("++++++++++++++++++++++++++++++++++++++");
    System.out.println("your balance :" + obj.balance);
    System.out.println("++++++++++++++++++++++++++++++++++++++");
    manu(obj);
}

public void deposit(Data obj){
    System.out.println("enter your amount deposit  ");
    // Object sc;
    // Scanner sc;
    float a =sc.nextFloat();
    
    obj.balance = obj.balance + a ;
    System.out.println("amount deposited successfully");
    System.out.println("++++++++++++++++++++++++++++++++++++++");
    manu(obj);
    
}


public void withdraw(Data obj){
    System.out.println("enter withdraw amount");
    float a = sc.nextFloat();

if(obj.balance >= a){
    obj.balance = obj.balance - a ;//(int) (obj.balance - a)
    System.out.println("amount deposited successfully");
}else{
    System.out.println("insufficent balance");
}

    System.out.println("++++++++++++++++++++++++++++++++++++++");
    manu(obj);
}

}