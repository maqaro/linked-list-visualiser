# linked-list-visualiser

## Overview

`linked-list-visualiser` is a React-based application that visualizes the operations of a linked list data structure. It allows users to add, remove, and reverse nodes in the linked list, providing a clear visual representation of the list's structure and the changes made to it.

## Features

- **Add Node**: Insert a new node at the end of the linked list.
- **Remove Node**: Remove the last node from the linked list.
- **Reverse List**: Reverse the order of the nodes in the linked list.
- **Visual Representation**: Display the linked list with arrows indicating the connections between nodes.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/maqaro/linked-list-visualiser
    ```
2. Navigate to the project directory:
    ```sh
    cd linked-list-visualiser
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173/` to see the application in action.

## Components

### List

The `List` component manages the state of the linked list and renders the list of nodes. It includes controls for adding, removing, and reversing nodes.

### ListNode

The `ListNode` component represents an individual node in the linked list. It displays the node's value, index, and a reference to the next node.

### LinkedList

The `LinkedList` class defines the structure of a linked list and provides methods for adding, removing, and reversing nodes.