# Système de Gestion des Rendez-vous

## 📋 Comment ça fonctionne

### Pour les clients
1. Le client visite `/appointment` 
2. Sélectionne une date et heure
3. Remplit le formulaire avec ses coordonnées
4. Clique sur "Confirmer le rendez-vous"

### Notifications Admin

Lorsqu'un rendez-vous est confirmé, **3 notifications** sont envoyées automatiquement :

#### 1. 📧 Email
- Un client email s'ouvre avec toutes les informations pré-remplies
- Destinataire : `techinrwanda.contact@gmail.com`
- Contient : date, heure, nom, email, téléphone, sujet du client

#### 2. 💬 WhatsApp (optionnel)
- Notification WhatsApp au numéro : `+250 785 649 246`
- Message formaté avec toutes les informations

#### 3. 💾 Stockage local
- Les rendez-vous sont sauvegardés dans le navigateur (localStorage)
- Accessibles via le tableau de bord admin

## 🔐 Tableau de bord Admin

### Accès
- URL : `/admin/appointments`
- Mot de passe : `techinrwanda2026`

### Fonctionnalités
- ✅ Voir tous les rendez-vous enregistrés
- ✅ Exporter en CSV
- ✅ Envoyer des rappels par email
- ✅ Supprimer des rendez-vous
- ✅ Actualiser la liste

## 🚀 Amélioration future : EmailJS

Pour automatiser complètement les emails (sans ouvrir le client email), vous pouvez configurer EmailJS :

### Étapes
1. Créer un compte gratuit sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email
4. Récupérer :
   - Service ID
   - Template ID  
   - Public Key
5. Décommenter le code EmailJS dans `Appointment.jsx`

### Avantages EmailJS
- ✅ Envoi automatique sans interaction utilisateur
- ✅ Emails HTML personnalisés
- ✅ Historique des emails envoyés
- ✅ 200 emails gratuits/mois

## 📱 Alternative : Intégration avec un CRM

Vous pouvez également intégrer avec :
- **Google Sheets** : via Google Apps Script
- **Airtable** : via API
- **Notion** : via API
- **Discord/Slack** : via Webhooks

## 🔒 Sécurité

### Pour la production
1. Remplacer le mot de passe admin par un système d'authentification sécurisé
2. Utiliser un backend (Node.js, PHP, etc.) pour stocker les rendez-vous en base de données
3. Ajouter un captcha pour éviter le spam
4. Chiffrer les données sensibles

## 📊 Export CSV

Le bouton "Exporter CSV" génère un fichier avec :
- Date du rendez-vous
- Heure
- Nom du client
- Email
- Téléphone
- Sujet
- Date de confirmation

Parfait pour importer dans Excel, Google Sheets ou votre CRM.
