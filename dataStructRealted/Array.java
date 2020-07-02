public class Array {

    private int[] intArray;
    private int elements;
    private int length;

    public Array(int max) {
        length = max;
        intArray = new int[max];
        elements = 0;
    }

    /**
     * add element.
     * @param element The {@code int} to be add in.
     */
    public void add(int element) {
        if(elements == length) {
            System.out.println("Error, you can't add element beacause the Array is full.");
        }
        intArray[elements] = element;
        elements++;
    }

    /**
     * find the element index.
     * @param searchKey The {@code int to be find the index position.
     * @return the index of searchKey in array.
     */
    public int index(int searchKey) {
        int i;
        for (i = 0; i <elements ; i++) {
            if(intArray[i] == searchKey) {
                break;
            }
        }
        if (i == elements) {
            return -1;
        }
        return i;
    }

    /**
     * delete the element.
     * @param element The {@code int} to be delete.
     * @return the sign of the success or not.
     */
    public boolean delete(int element) {
        int i = index(element);
        if (i == -1 ) {
            return  false;
        }
        for (int j = i; j < elements; j++) {
            intArray[j] = intArray[j+1];
        }
        elements--;
        return true;
    }

    /**
     * replace the oldElement to newElement. But the code is danger because the replace is not global.
     * @param oldElement The {@code int} to be replace.
     * @param newElement The {@code int} to be update.
     * @return the sign of the success or not.
     */
    public boolean update(int oldElement, int newElement) {
        int i = index(oldElement);
        if (i == -1) {
            return false;
        }
        intArray[i] = newElement;
        return true;
    }

    /**
     * to show the array content.
     */
    public void display() {
        for (int i = 0; i < elements; i++) {
            System.out.print(intArray[i] + ' ');
        }
        System.out.println();
    }

    /**
     * the First for is time, the Second for show two point and loop the array.
     * 冒泡排序是相近的两个元素比较，循环N次，每一次完成最后一个元素的排序
     */
    public void bubbleSort() {
        for (int i = 0; i < elements - 1; i++) {
            System.out.println("The " + (i + 1) + " time.");
            for (int j = 0; j < elements - i - 1; j++) {
                if (intArray[j] < intArray[j+1]) {
                    int temp = intArray[j];
                    intArray[i] = intArray[i+1];
                    intArray[i+1] = temp;
                }
                display();
            }
        }
    }

    /**
     * the First for is time and assume that minIndex, the Second only follow and compare the first.
     * 选择排序是拿全体的元素进行比较，循环N次，每一次完成最前的一个元素的排序。
     */
    public void selectSort() {
        for (int i = 0; i < elements - 1; i++) {
            System.out.println("The " + (i + 1) + "time.");
            int minIndex = i;
            for (int j = i + 1; j < elements; j++) {
                if (intArray[j] < intArray[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                int temp = intArray[i];
                intArray[i] = intArray[minIndex];
                intArray[minIndex] = temp;
            }
            display();
        }
    }

    /**
     * 插入排序旨在第二个元素起，和前面的元素比较，大了放在后面。
     */
    public void insertSort() {
        int j;
        for (int i = 1; i < elements; i++) {
            int temp = intArray[i];
            j = i;
            while( j > 0 && temp < intArray[j-1]){
                intArray[j] = intArray[j-1];
                j--;
            }
            intArray[j] = temp;
        }
    }

    public static void main(String[] args) {
        Array array = new Array(10);
        array.add(6);
        array.add(3);
        array.add(4);
        array.add(8);
        array.add(1);
        array.add(2);
        array.add(6);
        array.add(9);


    }
}
