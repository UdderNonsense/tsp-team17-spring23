import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;


public class Create {
    public Create(){

    }

    public static void createFile(String fileName){
        try {
            File myFile = new File(fileName);
            if (myFile.createNewFile()) {
                System.out.println("File created: " + myFile.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public static void writeToFile(String fileName, String boardTitle, ArrayList<TaskList<Task>> listOfTaskLists){
        try {
            FileWriter myWriter = new FileWriter(fileName);
            myWriter.write(boardTitle + "\n");

            if (listOfTaskLists.size() == 0){
                return;
            }
            TaskList<Task> tempList;

            for (int i = 1; i < listOfTaskLists.size() + 1; i++){
                tempList = listOfTaskLists.get(i-1);
                myWriter.write(i + " " + tempList.getName() +"\n");
                for (int j = 1; j < tempList.size()+1; j++){
                    myWriter.write(i + "." + j + " " + tempList.get(j-1).name() + ": " + tempList.get(j-1).description() + "\n");
                }
            }

            myWriter.close();
        } catch (IOException e) {
            System.out.print("An Error has occured");
            e.printStackTrace();
        }
    }

}
