# DataNeuron Backend API

This project is a backend server for a task manager application. It provides RESTful APIs for managing tasks and retrieving counts of operations performed.

## Base URL:
The API is currently deployed at: https://dataneuronbackend-edbc.onrender.com/

## Installation

1. Clone the repository:

   ```bash
     git clone https://github.com/shivamkumar24/DataNeuronBackend
   ```

2. Install dependencies:
   ```bash
     npm install
   ```

3. Start the server:
   ```bash
     npm run server
   ```

## End Points:
1. Get Task
   - Endpoint: ``` /task ```
   - Method: ``` GET ```
   - Description: Fetches all the data entries from the backend.
   - Response: An array of data objects.

2. Create Task
   - Endpoint: ``` /task/create ```
   - Method: ``` POST ```
   - Description: Adds a new task entry.
   - Body:
       ```
          {
             "title": "Sample task",
          }
       ```
   - Response: An array of taskData objects.

  3. Update Task
   - Endpoint: ``` /task/update/:id ```
   - Method: ``` PATCH ```
   - Description: Update the Existing task.
   - Body:
       ```
          {
             "title": "Updated Sample task",
          }
       ```
   - Response: An array of taskData objects.

4. Get Count
   - Endpoint: ``` /task/getCount ```
   - Method: ``` GET ```
   - Description: Retrieves the count of add and update operations performed.
   - Response: Get the updated Counts of operations.
  
### Deployed Backend
This setup ensures a seamless flow for managing and tracking data entries through a simple and intuitive API.


