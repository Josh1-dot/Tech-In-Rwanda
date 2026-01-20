# Configuration EmailJS - Guide Complet

## 🚀 Configuration en 5 minutes

### Étape 1 : Créer un compte EmailJS

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" (Inscription gratuite)
3. Créez un compte avec votre email

### Étape 2 : Ajouter un service email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez **Gmail** (ou votre fournisseur d'email)
4. Connectez votre compte Gmail : `techinrwanda.contact@gmail.com`
5. Autorisez EmailJS à accéder à votre compte
6. Notez le **Service ID** généré (ex: `service_abc1234`)

### Étape 3 : Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```
Sujet : Nouveau Rendez-vous - {{from_name}}

Corps du message :
────────────────────────────────────────
🗓️ NOUVEAU RENDEZ-VOUS CONFIRMÉ
────────────────────────────────────────

📅 DATE : {{appointment_date}}
🕐 HEURE : {{appointment_time}}

👤 INFORMATIONS CLIENT
────────────────────────────────────────
Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Sujet : {{subject}}

📝 DÉTAILS
────────────────────────────────────────
{{message}}

✅ Confirmé le : {{confirmed_at}}

────────────────────────────────────────
Tech In Rwanda - Système de Gestion des Rendez-vous
```

4. Configurez l'email de destination :
   - **To Email** : `techinrwanda.contact@gmail.com`
   - Ou utilisez : `{{to_email}}` (dynamique)

5. Sauvegardez et notez le **Template ID** (ex: `template_xyz5678`)

### Étape 4 : Récupérer votre Public Key

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (ex: `abcDEF123ghiJKL`)
3. Copiez-la

### Étape 5 : Configurer le code

Ouvrez le fichier `index.html` et remplacez :

```javascript
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY", // ← Remplacez ici
});
```

Par votre vraie clé :

```javascript
emailjs.init({
  publicKey: "abcDEF123ghiJKL", // ← Votre clé
});
```

Ouvrez `src/pages/Appointment.jsx` et remplacez (lignes ~78-79) :

```javascript
const response = await window.emailjs.send(
  'YOUR_SERVICE_ID',  // ← Remplacez par votre Service ID
  'YOUR_TEMPLATE_ID', // ← Remplacez par votre Template ID
  templateParams
)
```

Par vos vrais IDs :

```javascript
const response = await window.emailjs.send(
  'service_abc1234',  // ← Votre Service ID
  'template_xyz5678', // ← Votre Template ID
  templateParams
)
```

### Étape 6 : Tester

1. Démarrez votre application : `npm run dev`
2. Allez sur `/appointment`
3. Sélectionnez une date et heure
4. Remplissez le formulaire
5. Cliquez sur "Confirmer le rendez-vous"
6. ✅ Vous devriez recevoir un email sur `techinrwanda.contact@gmail.com`

## 📧 Variables disponibles dans le template

Vous pouvez utiliser ces variables dans votre template EmailJS :

- `{{to_email}}` - Email de destination (techinrwanda.contact@gmail.com)
- `{{from_name}}` - Nom du client
- `{{from_email}}` - Email du client
- `{{phone}}` - Téléphone du client
- `{{subject}}` - Sujet choisi
- `{{appointment_date}}` - Date du rendez-vous (ex: "Wednesday January 21, 2026")
- `{{appointment_time}}` - Heure du rendez-vous (ex: "4:00 pm")
- `{{confirmed_at}}` - Date et heure de confirmation
- `{{message}}` - Message formaté complet

## ✨ Personnalisation avancée

### Template HTML élégant

Dans EmailJS, passez en mode "HTML" et utilisez ce template :

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%); color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; }
    .info-box { background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 15px; margin: 15px 0; }
    .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🗓️ Nouveau Rendez-vous</h1>
      <p>Tech In Rwanda</p>
    </div>
    
    <div class="content">
      <h2>Détails du rendez-vous</h2>
      
      <div class="info-box">
        <strong>📅 Date :</strong> {{appointment_date}}<br>
        <strong>🕐 Heure :</strong> {{appointment_time}}
      </div>
      
      <h3>Informations client</h3>
      <p>
        <strong>Nom :</strong> {{from_name}}<br>
        <strong>Email :</strong> <a href="mailto:{{from_email}}">{{from_email}}</a><br>
        <strong>Téléphone :</strong> <a href="tel:{{phone}}">{{phone}}</a><br>
        <strong>Sujet :</strong> {{subject}}
      </p>
      
      <p style="color: #6b7280; font-size: 14px;">
        ✅ Confirmé le {{confirmed_at}}
      </p>
    </div>
    
    <div class="footer">
      Tech In Rwanda - Système de Gestion des Rendez-vous<br>
      techinrwanda.contact@gmail.com
    </div>
  </div>
</body>
</html>
```

## 🔒 Sécurité

- ✅ La Public Key peut être publique (dans le code)
- ✅ EmailJS protège votre email contre le spam
- ✅ Limite : 200 emails/mois (gratuit) - 1000 emails/mois (payant $8/mois)

## 🐛 Dépannage

### "EmailJS is not defined"
- Vérifiez que le script CDN est bien chargé dans `index.html`
- Ouvrez la console du navigateur et tapez `emailjs` pour vérifier

### "Invalid public key"
- Vérifiez que vous avez bien remplacé `YOUR_PUBLIC_KEY`
- Copiez-collez exactement depuis EmailJS (sensible à la casse)

### "Service not found"
- Vérifiez votre Service ID
- Assurez-vous que le service Gmail est bien connecté

### "Template not found"
- Vérifiez votre Template ID
- Assurez-vous que le template est bien sauvegardé

### Emails non reçus
- Vérifiez vos spams
- Vérifiez que `techinrwanda.contact@gmail.com` est bien configuré dans le template
- Testez directement depuis le dashboard EmailJS

## 📞 Support

Si vous avez des problèmes, contactez :
- Support EmailJS : https://www.emailjs.com/docs/
- Documentation : https://www.emailjs.com/docs/tutorial/overview/

## 💡 Alternative gratuite

Si vous ne voulez pas utiliser EmailJS, vous pouvez utiliser **FormSubmit.co** (100% gratuit, illimité) :

Remplacez dans `Appointment.jsx` la fonction `handleSubmit` par :

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const formData = new FormData()
  formData.append('_subject', `Nouveau Rendez-vous - ${formData.name}`)
  formData.append('_template', 'table')
  formData.append('Date', selectedSlot.date)
  formData.append('Heure', selectedSlot.time)
  formData.append('Nom', formData.name)
  formData.append('Email', formData.email)
  formData.append('Téléphone', formData.phone)
  formData.append('Sujet', formData.subject)
  
  await fetch('https://formsubmit.co/techinrwanda.contact@gmail.com', {
    method: 'POST',
    body: formData
  })
  
  alert('✅ Rendez-vous confirmé!')
}
```

C'est plus simple mais moins personnalisable.
