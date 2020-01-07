import java.util.Scanner;

/**
 *
 * @author NoahJamesYanga
 */
public class LabExer1B {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        
        Scanner user_input = new Scanner(System.in);
        
        //ask user to input an integer (whole numbers) value.
        System.out.print("Please enter an integer number: ");
        //store the user input to val variable.
        int val = user_input.nextInt();
        
        //pass the val variable to the following method's parameters
        showNumberPlus10(val);
        showNumberPlus100(val);
        showNumberPlus1000(val);
        
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 10 on the original value
     */
    public static void showNumberPlus10(int val){
        System.out.println(val +" plus " + 10 + " is " + (val+10) );
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 100 on the original value
     */
    public static void showNumberPlus100(int val){
        System.out.println(val +" plus " + 100 + " is " + (val+100));
    }
    
    /**
     * Prints out the procedure and the result.
     * @param val - adds 1000 on the original value
     */
     public static void showNumberPlus1000(int val){
        System.out.println(val +" plus " + 1000 + " is " + (val+1000));
    }
}
