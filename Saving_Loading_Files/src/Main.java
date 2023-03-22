import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<TaskList<Task>> listOfLists = new ArrayList<TaskList<Task>>();
        Create create = new Create();

        for (int i = 0; i< 4; i++){
            listOfLists.add(new TaskList<Task>());
            listOfLists.get(i).setName("LIST NAME " + (i+1));
            addTasksToList(listOfLists.get(i));
        }


        String fileName = "testFile.txt";
        create.createFile(fileName);
        create.writeToFile(fileName, "Cool Board title", listOfLists);


        Load loadObj = new Load();
        loadObj.loadFile(fileName);
        System.out.println(loadObj.getName());

        loadObj.printList();

    }

    public static void addTasksToList(TaskList list){
        for (int i = 0; i < 4; i++){
            list.add(new Task("TaskName", "[DESCRIPTION]"));
            list.add(new Task("Cool Task Name with spaces", "[Description with spaces]"));

        }
    }
}
