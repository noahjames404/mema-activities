
/**
 * Print out the following data types 
 * int as faveNumber (Favorite Number), String as faveCartChar (Favorite Cartoon Character),
 * char as mi (Middle Initial), and an array of char as nickNameArray. 
 *
 *
 * note: the @see keyword is used to denote a reference link about the code used in this program.
 * @author noah james c. yanga
 */
public class LabExer1A {
    public static void main(String[] args){
        /**
         * @see https://www.w3schools.com/java/java_data_types.asp
         * declare and initialize variables
         */
        int faveNumber = 1;
        String faveCartChar = "batman";
        char mi = 'c';
        /**
        * @see https://www.w3schools.com/java/java_arrays.asp
        */
        char[] nickNameArray = {'n','j'};
        
        /**
         * @see https://www.w3schools.com/java/java_strings.asp
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
