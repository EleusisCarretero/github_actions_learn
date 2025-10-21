const core = requeire("@actions/core");
const github = requeire("@actions/github");

try{
    core.warning("Warning msg");
    core.error("Error mesg");
    const name = core.getInput("who_to_greet");
    console.log(`hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString())
    core.exportVariable("HELLO_TIME", time);
    core.starGroup("Logging github context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();
}   catch(Error){
    core.setFaled(error.message);
}