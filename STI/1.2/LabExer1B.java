import java.util.Scanner;

/**
 * Ask the user to input an integer number then
 * print out the result with the following methods 
 * showNumberPlus10,showNumberPlus100, and showNumberPlus1000 
 *
 * note: the @see keyword is used to denote a reference link about the code used in this program.
 *
 * @author NoahJamesYanga
 */
public class LabExer1B {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        /**
        * @see https://www.w3schools.com/java/java_user_input.asp
        * The Scanner class is used to get user input, 
        * and it is found in the java.util package.
        */
        Scanner user_input = new Scanner(System.in);
        
        //ask the user to input an integer (whole numbers) value.
        System.out.print("Please enter an integer number: ");
        //store the user input to val variable.
        int val = user_input.nextInt();
        
        /**
        * @see https://www.w3schools.com/java/java_methods.asp
        * pass the val variable to the following method's parameters
        */
        showNumberPlus10(val);
        showNumberPlus100(val);
        showNumberPlus1000(val);
        
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 10 on the original value
     */
    public static void showNumberPlus10(int val){
        /**
        * @see https://www.w3schools.com/java/java_strings.asp
        * concatenation of string and integer
        */
        System.out.println(val +" plus " + 10 + " is " + (val+10) );
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 100 on the original value
     */
    public static void showNumberPlus100(int val){
        /**
        * @see https://www.w3schools.com/java/java_strings.asp
        * concatenation of string and integer
        */
        System.out.println(val +" plus " + 100 + " is " + (val+100));
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 1000 on the original value
     */
     public static void showNumberPlus1000(int val){
        /**
        * @see https://www.w3schools.com/java/java_strings.asp
        * concatenation of string and integer
        */
        System.out.println(val +" plus " + 1000 + " is " + (val+1000));
    }
}
