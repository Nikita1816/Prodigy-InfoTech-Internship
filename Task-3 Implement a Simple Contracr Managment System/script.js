let contacts = JSON.parse(localStorage.getItem("contacts")) || []; // Load contacts from localStorage
let editingIndex = -1; // Track the index of the contact being edited

// Function to add or update a contact
function addOrUpdateContact(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    // ✅ Validation: Ensure all fields are filled
    if (name === "" || phone === "" || email === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (editingIndex === -1) {
        // ✅ Add a new contact
        contacts.push({ name, phone, email });
    } else {
        // ✅ Update the existing contact
        contacts[editingIndex] = { name, phone, email };
        editingIndex = -1; // Reset editing index after update
    }

    saveContacts(); // Save updated list to localStorage
    displayContacts(); // Refresh contact list
    resetForm(); // Clear input fields
}

// ✅ Function to display contacts
function displayContacts() {
    let list = document.getElementById("contact-list");
    list.innerHTML = ""; // Clear list before adding updated contacts

    contacts.forEach((contact, index) => {
        let li = document.createElement("li");
        li.classList.add("contact-item"); // Add CSS class for styling

        li.innerHTML = `
            <div class="contact-info">
                <strong>Name:</strong> ${contact.name} <br>
                <strong>Phone:</strong> ${contact.phone} <br>
                <strong>Email:</strong> ${contact.email}
            </div>
            <div class="button-container">
                <button class="edit-btn" onclick="editContact(${index})">✏️ Edit</button>
                <button class="delete-btn" onclick="deleteContact(${index})">❌ Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// ✅ Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1); // Remove contact from array
    saveContacts(); // Update localStorage
    displayContacts(); // Refresh UI
}

// ✅ Function to edit a contact
function editContact(index) {
    let contact = contacts[index];

    // Populate input fields with existing contact data
    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    // Set editing index and change button text
    editingIndex = index;
    document.getElementById("add-btn").innerText = "Update Contact";
}

// ✅ Function to reset the form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    // Reset button text and editing index
    document.getElementById("add-btn").innerText = "Add Contact";
    editingIndex = -1;
}

// ✅ Function to save contacts to localStorage
function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

// ✅ Load contacts on page load
window.onload = () => {
    contacts = JSON.parse(localStorage.getItem("contacts")) || []; // Reload from localStorage
    displayContacts();
};

// ✅ Ensure the button calls addOrUpdateContact correctly
document.getElementById("add-btn").addEventListener("click", addOrUpdateContact);
