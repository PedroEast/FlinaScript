public class ForTest {
    public static void main(String[] args) {
        forTest();
    }

    private static void forTest() {
        for (int i = 0; i < 255; i++) {
            for (int j = 0; j < 255; j++) {
                for (int k = 0; k < 255; k++) {
                    System.out.println(i + ", " + j + ", " + k);
                }
            }
        }
    }
}
