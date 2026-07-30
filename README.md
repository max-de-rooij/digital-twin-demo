# Digital Twin Demo Application
This repository contains a demo application for the Digital Twin in Healthcare course. During the workshop, we'll be discussing the entire application and how it's structured. You will be able to use this application as a template or starting point for your own projects. 

## Why so complicated?
The application is structured in a way that is similar to how real-world software is built. Instead of one big application, we have built the application as a collection of small "services" that each have their own responsibilities. In this way, you can develop different parts of the application independently, and you can also replace parts of the application with your own implementations.

### How to extend the application
Services contain various parts. This is how you can extend the application:

**Backend**:
1. Create a new service in the `backend/app/services` folder. This is a Python file that defines the functionality of your service.
2. Create models for your service in the `backend/app/models` folder. These models define what the data that goes in and out of your service looks like. In this way, we can validate the data that is sent to your service and ensure that it is correct.
3. Create a new router in the `backend/app/api` folder. In there, you define the endpoints that your service exposes. Endpoints are the URLs that other parts of the application can use to interact with your service. You can also define the input and output data for your endpoints, which will be validated against the models you created in step 2. There are different types of endpoints, which may be used for different purposes. For example, you can create a GET endpoint to retrieve data from your service, or a POST endpoint to send data to your service.

[OPTIONAL]
If you are making a service that the frontend interacts with, you will also need to tell the frontend how to interact with your service and how it should respond to the data it receives.
**Frontend**:
1. Define your service in the `frontend/src/services` folder. This is a TypeScript file that defines how the frontend interacts with your service. You can define functions that send requests to your service and handle the responses. This will look similar to how the backend service is defined, but it will be in TypeScript instead of Python.
2. In the frontend, insert the places where your service is used and define how the frontend responds to the interactions with your service. For example, you can create a new page in the `frontend/src/pages` folder that displays the data from your service, or you can create a new component in the `frontend/src/components` folder that allows the user to interact with your service. This part may vary depending on what your service does and how it is used in the application. You can also use existing components and pages to interact with your service, or you can create new ones if needed.

### This sounds like a lot of work, is it really necessary?
Yes, it is. In real-world applications, you will often work in teams where different people are responsible for different parts of the application. By structuring the application in this way, we can ensure that different parts of the application can be developed independently and that they can be replaced with new implementations without affecting the rest of the application. This is a common practice in software development. 

Additionally, because each part of the application is defined in its own service, we can easily test each part of the application independently. In this way, for example, we start with developing the backend service, we then test those services independently, and when they work, we can move them into the frontend. If we get an error then, we know it's related to the frontend.