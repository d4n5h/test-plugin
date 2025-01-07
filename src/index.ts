import axios from "axios";

class TestPlugin {
  context: any;
  constructor(context: any) {
    this.context = context;
    console.log("TestPlugin constructor");
  }

  async init() {
    this.context.events.on("test", (data: any) => {
      console.log('TestPlugin received event', data);
    });
  }

  async cleanup() {
    console.log("TestPlugin cleanup");
  }

  async test() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  }
}

export default TestPlugin;