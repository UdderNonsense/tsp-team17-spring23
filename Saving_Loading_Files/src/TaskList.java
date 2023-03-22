import java.util.ArrayList;
public class TaskList<Task> extends ArrayList<Task> {
    private String listName;

    public TaskList(){
        listName = "DEFAULT NAME";
    }

    public void setName(String name){
        listName = name;
    }

    public String getName(){
        return listName;
    }
}
