import java.util.Scanner;
public class Pratice {

    public static void main(String[] args) {
        
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter the total amount of number you want in the array:");
            int a= sc.nextInt();
            int[]array=new int[a];
            
            for(int i=0; i<a; i++){
                array[i]=sc.nextInt();
            }
            System.out.println("Element in the array are:");
            
            for (int i=0; i<a; i++){
                
                System.out.println(array[i]);
            }
            
            System.out.println("The odd numbers in the arrays inputed are:");
            for(int i=0; i<a; i++){
            
                if(array[i]%2==1){
                    System.out.println(array[i]);
                }
            }
           
         }
    
    }
}