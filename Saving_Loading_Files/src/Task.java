public class Task {
    private String taskName;
    private String taskDescription;

    public Task(String name, String desc){
        taskName = name;
        taskDescription = desc;
    }

    public String name(){
        return taskName;
    }

    public String description(){
        return taskDescription;
    }

    public void changeName(String name){
        taskName = name;
    }

    public void changeDesc(String desc) {
        taskDescription = desc;
    }
}
