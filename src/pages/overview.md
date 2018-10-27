---
title: "Overview"
date: "2017-08-21"
order: 2
---

# Overview
The Fizz system comprises of the following core concepts:

## Fizz SDK
The Fizz SDK is a cross platform SDK for integrating Fizz into an application. Integration involves using the API, exposed by the SDK on both the game client and server. On the client end, the SDK has been ported to various platforms (iOS, Android). The SDK has also been integrated into commercial game engines like Unity3d and cocos2dx for minimizing integration efforts. A REST API is also supported for performing server to server (privileged) operations such as user account creation, guild/clan rooms management etc.

### Managed state
The Fizz SDK is not a mere wrapper over the client API. The SDK is also responsible for maintaining all state on behalf of the user. This includes all messages received in the clan/guild rooms. This frees up the developers from maintaining any (Fizz) state in their applications. Integration usually involves implementing the views (UI) and fetching all required state from the Fizz SDK.

## Applications
Fizz has been designed as a multi-tenant chat system. Multi-tenancy allows flexible and scalable allocation of resources for each tenant in the system. A tenant is completely isolated from other tenants (state and operations). Each game or application is represented as a tenant in the system. Applications can be created by signing up for an account on the Fizz Developer Portal. All application state is managed by Fizz (this includes chat history).

On creation, an application ID and application secrets (client and server) are generated for each application. These are required by the Fizz SDK for authenticating the client as a valid Fizz client. Each application has a unique application ID and application secrets which differentiates each application.

### Production vs. Sandbox applications
Fizz supports two kinds of applications. The sandbox applications are meant to be used while in development. Sandbox applications are subject to the following limitations:

- Sandbox applications are not covered by the Fizz SLA (no guarantees about uptime and data persistence hold). 
- In future, limitations such as max number of users, max rooms etc. can be introduced for sandbox applications. 

The Fizz Developer Portal supports creation of both sandbox and production applications. As mentioned above an application ID and application secrets are generated for each application. These can be used to differentiate between sandbox and production client versions and server environments.

## Rooms and messages
All conversations between users take place in rooms. Users must join a room to receive and send messages to other users (in the room). Fizz supports different types of rooms:

- _Universal rooms_ are automatically joined by the users. The membership of such rooms is determined on the regions defined on the Fizz Developer Portal.
- _Game defined chat rooms_ are created and managed by the game server. One use case for such type of rooms is to implement guild/clan chat.
- _Transient chat rooms_ are temporary chat rooms created for short time chat sessions. These can be created, joined and left by the user.

The Fizz SDK delivers messages in real time while the client is connected to the server. However, it is possible to sync the client with the server by fetching the message history in a room. This allows fetching messages that were sent while the client was not connected to the server. The Fizz SDK handles syncing the client with the server. Once synced, the game client can access any message in the available history of a room.

## Requests, Events and Actions
All activity in the Fizz system is represented by requests, actions and events.

### Requests
Requests are used by the client for performing CRUD operations in the system. To perform an operation, developers can use the client API to create the relevant request. After creation, a request is sent to the Fizz backend for processing. A request results in the generation of one or more events or room actions. It is also possible for the backend to deny the processing of a request.

### Events
The Fizz backend generates various events in response to other events or client requests. Each feature integration generally involves listening to and handling the relevant events (and actions). The SDK supports different listeners that allows the application to listen to and handle different events.

### Actions
All activity in rooms is represented as actions on that room. Examples of actions include; sending and receiving chat messages, etc. Similar to events, actions can also be (selectively) listened to via appropriate listeners.