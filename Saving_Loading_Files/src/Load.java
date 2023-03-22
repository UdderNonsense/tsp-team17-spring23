import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Load {
    private String kName;
    private ArrayList<TaskList<Task>> listOfLists;
    private Scanner myScanner;
    private File myFile;

    public Load(){
        listOfLists = new ArrayList<TaskList<Task>>();
    }

    public void loadFile(String name){
        try {
            myFile = new File(name);
            myScanner = new Scanner(myFile);

            TaskList<Task> tempTaskList;
            boolean firstLine = true;

            int i = 1;
            String line = "";

            while (myScanner.hasNext()) {
                if (firstLine) {
                    kName = myScanner.nextLine();
                    firstLine = false;
                    line = myScanner.nextLine();

                } else {
                    //Number of lists for reference later
                    i++;

                    //Make new list and reference it with tempTaskList
                    listOfLists.add(new TaskList<Task>());
                    tempTaskList = listOfLists.get(listOfLists.size() - 1);

                    //Gets name of taskList
                    tempTaskList.setName(line);

                    //Task names and descriptions
                    String taskName = "";
                    String taskDesc = "";
                    line = myScanner.nextLine();

                    /**
                     * Parses through line, checks for ':'
                     * When it finds the colon, it sets the name and description
                     * Ex. Cool Task Name: This task is dumb
                     */
                    while (!line.equals("") && !line.substring(0, 1).equals(i+"")) {
                        for (int j = 0; j < line.length(); j++) {
                            if (line.charAt(j) == ':') {
                                taskName = line.substring(0, j);
                                taskDesc = line.substring(j + 2);
                                break;
                            }
                        }

                        tempTaskList.add(new Task(taskName, taskDesc));
                        if (myScanner.hasNext()){
                            line = myScanner.nextLine();

                        }
                        else {
                            line = "";
                        }
                    }


                }
            }
        } catch (FileNotFoundException e){
            System.out.print("FILE NOT FOUND");
        }
    }

    public String getName(){
        return kName;
    }

    public void printList(){
        for (TaskList<Task> listOfList : listOfLists) {
            System.out.println();
            System.out.println(listOfList.getName());

            for (Task task : listOfList) {
                System.out.println(task.name() + ": " + task.description());
            }
        }
    }


}
