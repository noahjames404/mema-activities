
/**
 *
 * @author noah james c. yanga
 */
public class LabExer1A {
    public static void main(String[] args){
        /**
         * declare and initialize variables
         */
        int faveNumber = 1;
        String faveCartChar = "batman";
        char mi = 'c';
        char[] nickNameArray = {'n','j'};
        
        /**
         * print out variables
         */
        System.out.println(faveNumber + " is my favorite number");
        System.out.println("I love " + faveCartChar);
        System.out.println("my middle intial is " + mi);
        System.out.println("you can call me " + toArrayText(nickNameArray));
    }
    
    /**
     * formats char array into a single line String
     * @param arr - char[] array to be formated
     * @return a set of characters (string) format of char array
     */
    public static String toArrayText(char [] arr){
        String val = "";
        for(char n : arr){
            val += n;
        }
        return val;
    }
    
    
}
