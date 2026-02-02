import { useState } from 'react';
import { Plus, Trash2, Edit2, Phone, User } from 'lucide-react';
import Header from '@/components/Header';

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
}

export default function Contacts() {
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    {
      id: '1',
      name: 'John Doe',
      relationship: 'Family',
      phone: '555-0123',
    },
    {
      id: '2',
      name: 'Jane Smith',
      relationship: 'Friend',
      phone: '555-0456',
    },
  ]);

  const [isAddingContact, setIsAddingContact] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', relationship: '', phone: '' });

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([
        ...contacts,
        {
          id: Date.now().toString(),
          ...newContact,
        },
      ]);
      setNewContact({ name: '', relationship: '', phone: '' });
      setIsAddingContact(false);
    }
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const handleCall = (phone: string, name: string) => {
    alert(`Calling ${name}...\n\nIn production, this would dial ${phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Emergency <span className="bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">Contacts</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            Keep your trusted contacts nearby for instant notification when you need them most
          </p>
        </div>

        {/* Add Contact Form */}
        {isAddingContact && (
          <div className="bg-white border border-border/50 rounded-2xl p-8 sm:p-10 mb-8 shadow-lg">
            <h3 className="text-2xl font-black text-foreground mb-8">Add New Contact</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-foreground mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) =>
                    setNewContact({ ...newContact, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-3">
                  Relationship
                </label>
                <input
                  type="text"
                  value={newContact.relationship}
                  onChange={(e) =>
                    setNewContact({ ...newContact, relationship: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., Family, Friend, Doctor"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) =>
                    setNewContact({ ...newContact, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddContact}
                  className="flex-1 bg-gradient-to-br from-primary to-red-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
                >
                  Save Contact
                </button>
                <button
                  onClick={() => setIsAddingContact(false)}
                  className="flex-1 bg-muted text-foreground py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Contact Button */}
        {!isAddingContact && (
          <button
            onClick={() => setIsAddingContact(true)}
            className="w-full sm:w-auto bg-gradient-to-br from-primary to-red-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mb-8"
          >
            <Plus className="w-5 h-5" />
            Add Contact
          </button>
        )}

        {/* Contacts List */}
        <div className="space-y-4">
          {contacts.length === 0 ? (
            <div className="text-center py-12 bg-white border border-border rounded-xl">
              <User className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No emergency contacts yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add your first contact to get started
              </p>
            </div>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white border border-border rounded-xl p-6 sm:p-8 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-foreground">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                    <p className="text-sm font-medium text-foreground mt-1">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleCall(contact.phone, contact.name)}
                    className="p-3 rounded-lg bg-secondary text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
                    title="Call contact"
                  >
                    <Phone className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteContact(contact.id)}
                    className="p-3 rounded-lg bg-red-100 text-primary hover:bg-red-200 transition-colors flex items-center justify-center"
                    title="Delete contact"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Your emergency contacts are kept secure and private
          </p>
        </div>
      </footer>
    </div>
  );
}
