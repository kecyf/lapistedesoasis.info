'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Send, Users, Plane, User, Mail, Phone, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

export default function InscriptionPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    type: 'coureur',
    aeroport: 'paris',
    equipe: '',
    message: '',
    assurance: false,
    volOption: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Build mailto link with form data
    const subject = encodeURIComponent(`Pré-inscription LPO Maroc 2026 - ${formData.prenom} ${formData.nom}`);
    const body = encodeURIComponent(`
DEMANDE DE PRÉ-INSCRIPTION
La Piste des Oasis 2026 - La Vallée Heureuse
Maroc, 30/05 - 05/06/2026
─────────────────────────────

NOM : ${formData.nom}
PRÉNOM : ${formData.prenom}
EMAIL : ${formData.email}
TÉLÉPHONE : ${formData.telephone || 'Non renseigné'}

TYPE : ${formData.type === 'coureur' ? 'Coureur (69km)' : 'Accompagnateur/Marcheur (49km)'}
AÉROPORT DE DÉPART : ${formData.aeroport.toUpperCase()}
${formData.equipe ? `ÉQUIPE : ${formData.equipe}` : ''}

OPTIONS :
- Assurance annulation (35€) : ${formData.assurance ? 'Oui' : 'Non'}
- Vol France-Marrakech en option : ${formData.volOption ? 'Oui, à chiffrer' : 'Non, je gère mon vol'}

${formData.message ? `MESSAGE :\n${formData.message}` : ''}

─────────────────────────────
Envoyé depuis lapistedesoasis.info
    `.trim());
    
    // Open mailto
    window.location.href = `mailto:capsud.evasion@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success after short delay
    setTimeout(() => {
      setFormState('success');
    }, 500);
  };

  if (formState === 'success') {
    return (
      <main className="min-h-screen bg-sand-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <div className="w-20 h-20 bg-oasis-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-oasis-600" />
          </div>
          <h1 className="font-display text-3xl font-bold text-night-900 mb-4">
            Votre email est prêt !
          </h1>
          <p className="text-sand-600 mb-6">
            Votre client email s'est ouvert avec votre pré-inscription. 
            Envoyez-le pour confirmer votre intérêt.
          </p>
          <p className="text-sm text-sand-500 mb-8">
            L'équipe Cap au Sud vous recontactera rapidement avec le dossier complet d'inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-terracotta-500 text-white font-medium hover:bg-terracotta-600 transition-colors"
            >
              Retour à l'accueil
            </Link>
            <button
              onClick={() => setFormState('idle')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-sand-300 text-sand-700 font-medium hover:bg-sand-100 transition-colors"
            >
              Nouvelle inscription
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sand-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-night-900 via-night-800 to-night-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sand-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Pré-inscription 2026
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 text-sand-300"
          >
            <span className="flex items-center gap-2">
              <span className="text-2xl">🇲🇦</span>
              Maroc - La Vallée Heureuse
            </span>
            <span className="hidden sm:block text-sand-500">•</span>
            <span>30 Mai - 5 Juin 2026</span>
            <span className="hidden sm:block text-sand-500">•</span>
            <span className="text-terracotta-400 font-medium">À partir de 890€</span>
          </motion.div>
        </div>
      </header>

      {/* Alert */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-medium text-sm">
                Seulement 10 places restantes !
              </p>
              <p className="text-amber-700 text-sm">
                Ce formulaire enregistre votre intérêt. Le dossier complet (passeport, certificat médical, etc.) 
                vous sera envoyé par email après validation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Identity */}
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 p-6">
              <h2 className="font-display text-xl font-semibold text-night-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-terracotta-500" />
                Vos coordonnées
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sand-700 mb-2">
                    Nom <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all"
                    placeholder="Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sand-700 mb-2">
                    Prénom <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all"
                    placeholder="Marie"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-sand-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all"
                    placeholder="marie@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sand-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
            </div>

            {/* Type & Options */}
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 p-6">
              <h2 className="font-display text-xl font-semibold text-night-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-terracotta-500" />
                Votre participation
              </h2>

              {/* Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-sand-700 mb-3">
                  Vous êtes <span className="text-terracotta-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'coureur' })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.type === 'coureur'
                        ? 'border-terracotta-500 bg-terracotta-50'
                        : 'border-sand-200 hover:border-sand-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">🏃</div>
                    <div className="font-medium text-night-900">Coureur</div>
                    <div className="text-sm text-sand-600">69 km • 4 étapes</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'accompagnateur' })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      formData.type === 'accompagnateur'
                        ? 'border-terracotta-500 bg-terracotta-50'
                        : 'border-sand-200 hover:border-sand-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">🥾</div>
                    <div className="font-medium text-night-900">Marcheur</div>
                    <div className="text-sm text-sand-600">49 km • 4 étapes</div>
                  </button>
                </div>
              </div>

              {/* Airport */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-sand-700 mb-2">
                  <Plane className="w-4 h-4 inline mr-1" />
                  Aéroport de départ souhaité <span className="text-terracotta-500">*</span>
                </label>
                <select
                  value={formData.aeroport}
                  onChange={(e) => setFormData({ ...formData, aeroport: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all bg-white"
                >
                  <option value="paris">Paris</option>
                  <option value="lyon">Lyon</option>
                  <option value="nice">Nice</option>
                  <option value="toulouse">Toulouse</option>
                  <option value="marseille">Marseille</option>
                  <option value="autre">Autre (préciser en message)</option>
                </select>
              </div>

              {/* Team */}
              <div>
                <label className="block text-sm font-medium text-sand-700 mb-2">
                  Nom d'équipe (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.equipe}
                  onChange={(e) => setFormData({ ...formData, equipe: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all"
                  placeholder="Si vous êtes inscrits en équipe (3-4 personnes)"
                />
              </div>
            </div>

            {/* Options */}
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 p-6">
              <h2 className="font-display text-xl font-semibold text-night-900 mb-6">
                Options
              </h2>

              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 rounded-xl border border-sand-200 hover:border-sand-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.assurance}
                    onChange={(e) => setFormData({ ...formData, assurance: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-sand-300 text-terracotta-500 focus:ring-terracotta-500"
                  />
                  <div>
                    <div className="font-medium text-night-900">Assurance annulation</div>
                    <div className="text-sm text-sand-600">+35€ • Recommandée</div>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-xl border border-sand-200 hover:border-sand-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.volOption}
                    onChange={(e) => setFormData({ ...formData, volOption: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-sand-300 text-terracotta-500 focus:ring-terracotta-500"
                  />
                  <div>
                    <div className="font-medium text-night-900">Vol France-Marrakech en option</div>
                    <div className="text-sm text-sand-600">~170€ • L'organisation s'occupe de votre billet</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="bg-white rounded-2xl shadow-sm border border-sand-200 p-6">
              <h2 className="font-display text-xl font-semibold text-night-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-terracotta-500" />
                Message (optionnel)
              </h2>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all resize-none"
                placeholder="Questions, précisions sur votre vol d'arrivée, etc."
              />
            </div>

            {/* Submit */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-terracotta-600 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? (
                  <>Préparation...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer ma pré-inscription
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-sand-500">
                En envoyant ce formulaire, vous acceptez le{' '}
                <Link href="/reglement" className="text-terracotta-600 hover:underline">
                  règlement de la course
                </Link>
                . Le dossier complet vous sera envoyé par email.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-sand-100 border-t border-sand-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sand-600">
            Une question ? Contactez-nous directement :
          </p>
          <p className="text-night-900 font-medium mt-2">
            capsud.evasion@gmail.com • 04 93 14 02 94
          </p>
        </div>
      </section>
    </main>
  );
}

