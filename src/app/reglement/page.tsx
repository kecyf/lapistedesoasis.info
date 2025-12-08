'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle, Clock, Users, CheckCircle, MapPin, Droplets, Heart, Camera, CreditCard, XCircle, Scale } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Présentation',
    icon: FileText,
    content: `"La Piste des Oasis" est une course à pied "nature" à étapes organisée par l'agence Cap au Sud-Evasion. Cette manifestation pourra regrouper de 35 à 60 participants (variable suivant les destinations).

L'épreuve est principalement destinée aux coureurs mais un programme marcheur est mis en place parallèlement. Celui-ci se déroule en général sur la moitié des étapes. Les sections les plus jolies sont choisies et un véhicule avec guide local sont dédiés à ce groupe de marcheurs.

Cap au Sud Evasion se réserve le droit de modifier: le règlement l'épreuve, la physionomie de l'épreuve, le lieu, la date et la destination initiale de la course en cas de force majeure (météo, cataclysme, conflit armé, invasion en tout genre, grêle, lock-out, etc.) ou pour des raisons indépendantes de sa volonté.`
  },
  {
    id: 2,
    title: "Conditions d'admission",
    icon: CheckCircle,
    content: `Pour être admis, les concurrents doivent être majeurs et titulaires d'un certificat médical attestant de leur aptitude à ce type d'épreuve (Il pourra être récupéré sur le site lors de la demande de dossier d'inscription et devra être retourné 45 jours minimum avant le départ avec le versement du solde). Également valable, une licence d'athlétisme, course hors stage en cours de validité à la date de l'épreuve.

Une exception reste possible pour toute personne liée à un projet particulier et qui sera validé par l'organisation.`
  },
  {
    id: 3,
    title: 'Catégories de concurrent',
    icon: Users,
    content: `Chaque participant homme ou femme entre dans le classement général sans distinction de sexe, d'âge. Parallèlement au classement général, il est établi plusieurs classements par catégorie :

• Individuel homme: SH senior homme, VH1 vétéran homme, VH2 vétéran homme, VH3 et VH4 vétéran hommes mélangés.

• Individuel Femme : SF senior femme, VF1 vétéran femme, VF2 vétéran femme, VF3 et VF4 vétéran femme mélangés si moins de 3 personnes dans chaque catégorie.

• Classement par équipe. Une équipe est constituée de 3 ou éventuellement 4 personnes. Pour rester en course, une équipe doit toujours être formée d'un minimum de 3 personnes. Cependant, chaque participant sera inscrit à titre individuel dans le classement général.`
  },
  {
    id: 4,
    title: 'Classement',
    icon: Scale,
    content: `Classement individuel:
Le classement de l'étape se fait par addition du temps réalisé et des éventuelles pénalités reçues. Le classement général se fait par addition des temps obtenus à chaque étape.

Classement par équipe:
Pour les équipes, le temps utilisé pour le classement sera la somme des temps réalisés par les membres de l'équipe, additionné des éventuelles pénalités. Le classement général se fait par addition des temps obtenus à chaque étape.`
  },
  {
    id: 5,
    title: 'Contrôles techniques et administratifs',
    icon: CheckCircle,
    content: `Les vérifications auront lieu le premier ou deuxième jour sur place c'est-à-dire soit le jour d'arrivée ou le lendemain si arrivée tardive le premier jour. Chaque concurrent sera convoqué et devra se présenter aux commissaires de course et contrôleurs.

Les concurrents devront impérativement avoir rempli leurs obligations administratives et techniques avant de prendre le départ. Les dossards (Marques d'identification) seront remis aux concurrents une fois que les vérifications auront été faites et à condition que le concurrent ait répondu à toutes les demandes des organisateurs.`
  },
  {
    id: 6,
    title: "Marques d'identification",
    icon: FileText,
    content: `Lors des vérifications administratives et techniques précédant le départ, l'organisation fournira à chaque concurrent trois dossards numérotés : Un dossard dorsal, un dossard poitrine et un pour le sac "journée" du coureur.`
  },
  {
    id: 7,
    title: 'Feuille de route',
    icon: MapPin,
    content: `Une carte décrivant les parcours des étapes sera établie et fournie dans la documentation remise aux participants dans leur carnet de voyage avant la course. Un carnet de bord pourra être communiqué sur une étape particulière si nécessaire.

Des commentaires seront donnés chaque matin avant le départ de l'étape du jour sur les points les plus délicats par le Directeur de course lors du briefing en français. (Anglais en option).

Sur certaines épreuves, une trace GPX de certains parcours sera fournie aux coureurs qui pourront la charger sur un GPS ou sur un smartphone avec une application GPS dédiée.`
  },
  {
    id: 8,
    title: 'Ordres de départ',
    icon: Clock,
    content: `Tous les candidats partiront en même temps quelle que soit les étapes et les catégories.`
  },
  {
    id: 9,
    title: 'Balisage',
    icon: MapPin,
    content: `Les participants de ce trail organisé par Cap au Sud Evasion devront impérativement suivre le balisage des étapes prévu par l'organisation. Le parcours sera indiqué par un balisage régulier en fonction de la topographie et du relief des paysages traversés.

Plusieurs points de repères naturels serviront d'indications supplémentaires afin que les participants restent sur l'axe du parcours.`
  },
  {
    id: 10,
    title: 'Check-point',
    icon: CheckCircle,
    content: `Les check-points (CP) sont répartis sur l'axe de chacune des étapes. Ce sont des endroits de passage obligatoires où les concurrents devront s'arrêter et indiquer leur numéro de dossard sous peine de pénalités.

Ils permettent aux contrôleurs de course de relever l'heure de passage de chaque concurrent et d'assurer l'approvisionnement en eau et en nourriture solide suivant leurs emplacements.

À l'arrivée, un chronométreur effectuera le relevé du temps (en heures, minutes et secondes) de chaque concurrent pour l'étape parcourue dans la journée.`
  },
  {
    id: 11,
    title: 'Ravitaillement en eau',
    icon: Droplets,
    content: `L'organisation se charge de l'approvisionnement en eau potable (récipients encapsulés) pour chaque concurrent. Elle sera adaptée aux besoins des concurrents, en fonction de l'étape et des conditions climatiques.

L'eau sera distribuée avant le départ, aux check points (CP) qui seront confondus avec les ravitaillements et après l'arrivée.

Quantité prévue : environ 3,5L à 6L par jour de course suivant les épreuves et particulièrement avec le maximum prévu pour les zones désertiques.`
  },
  {
    id: 12,
    title: 'Abandon',
    icon: XCircle,
    content: `En cas d'abandon, un concurrent doit impérativement prévenir l'organisation dans les plus brefs délais et remettre ses marques d'identification à un des commissaires de course. Le concurrent ne pourra quitter la course sans en aviser l'organisation.

En cas de défaillance physique et de malaise, il devra l'indiquer obligatoirement le plus tôt possible à l'organisation pour ne pas mettre sa santé en danger. Il sera alors pris en charge par l'organisation de la course et du support médical présent.

Un concurrent ayant abandonné et restant sur le bivouac sera automatiquement pris en charge par l'organisation.`
  },
  {
    id: 13,
    title: 'Parcours et risques climatiques',
    icon: AlertTriangle,
    content: `Le parcours n'est pas situé le plus souvent dans des zones perdues, inhabitées mais le milieu naturel peut comporter des dangers notamment à cause d'événements météorologiques soudains.

En cas d'orage violent, il faut se couvrir et ne pas bouger pour éviter de se perdre (à cause du manque de visibilité) ; il faut également éviter de rester dans le lit d'un oued ou d'une rivière car une vague pourrait, en cas d'orage soudain, être dangereuse.

Si la visibilité est suffisante, alors la course continue.`
  },
  {
    id: 14,
    title: 'Couverture image',
    icon: Camera,
    content: `Cap au Sud-Evasion se réserve les droits exclusifs d'utilisation des images du trail "La Piste des Oasis". Les concurrents consentent que Cap au Sud-Evasion dispose du droit exclusif de leur nom et de leur image individuelle ou collective pour tout ce qui concerne leur participation au trail, usage commercial compris.

Tout support photographique, vidéo ou cinéma réalisé pendant l'épreuve ne pourra être utilisé par les concurrents, les accompagnateurs ou l'encadrement qu'à des usages privés, sauf autorisation particulière ou accréditation.`
  },
  {
    id: 15,
    title: "Modalités d'inscription et de paiement",
    icon: CreditCard,
    content: `La date limite d'inscription varie suivant chaque course, elle sera annoncée sur le site au début des inscriptions de la course en question.

Pour s'inscrire, il suffit de remplir le formulaire en ligne correspondant à la course. 30% des frais d'engagement sont payables à l'inscription par chèque ou par virement.

IMPORTANT: le montant d'inscription fixé est valable pour un séjour en chambre double/twin partagée. Si vous vous inscrivez seul(e), vous acceptez par défaut de partager votre chambre avec une personne de même sexe.`
  },
  {
    id: 16,
    title: 'Annulations et frais associés',
    icon: XCircle,
    content: `Les demandes d'annulation de réservation, les déclarations de forfait et demandes de remboursement doivent être exprimées par mail et par lettre recommandée.

• Jusqu'à 60J avant le départ : 92€ forfaitaire
• Entre 59 et 41J : 20% du prix total
• Entre 40 et 21J : 40% du prix total
• Entre 20 et 14J : 70% du prix total
• Entre 13J et le départ : 100% du prix total

Important : Nous conseillons à chaque concurrent de contracter une assurance annulation à titre personnel.`
  },
  {
    id: 17,
    title: 'Récapitulatif des pénalités',
    icon: AlertTriangle,
    content: `• Absence document administratif : 30 min
• Absence certificat médical : Hors course
• Absence marques d'identification : 30 min
• Contrôle et pointage à un CP manquant : 30 min
• CP OBLIGATOIRE manquant : Noté hors classement pour l'étape
• Absence d'un équipement de la liste : 15 min + nouveau contrôle
• 1er dépassement du temps maximum : Temps = dernier + 1H
• 2ème dépassement du temps maximum : Hors course
• Dopage : Hors course
• Abandon membre équipe (>3 coureurs) : 30 min sur temps total équipe
• Abandon membre équipe (<3 coureurs) : Équipe déclassée
• Dégradation/pollution environnement : 30 min`
  }
];

export default function ReglementPage() {
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
            Règlement de la Course
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sand-300 text-lg max-w-2xl"
          >
            Ce règlement est commun à toutes les courses organisées par "La Piste des Oasis". 
            Les modalités particulières à chaque course seront spécifiées lors de l'inscription.
          </motion.p>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="bg-white border-b border-sand-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-terracotta-600">35-60</div>
              <div className="text-sm text-sand-600">participants max</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-terracotta-600">4-5</div>
              <div className="text-sm text-sand-600">étapes</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-terracotta-600">20-35</div>
              <div className="text-sm text-sand-600">km par étape</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-terracotta-600">4-7h</div>
              <div className="text-sm text-sand-600">temps limite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-sand-100 border-b border-sand-200">
        <div className="container mx-auto px-6 py-8">
          <h2 className="font-display text-xl font-semibold text-night-900 mb-4">Sommaire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {articles.map((article) => (
              <a 
                key={article.id}
                href={`#article-${article.id}`}
                className="text-sm text-sand-700 hover:text-terracotta-600 transition-colors"
              >
                <span className="text-terracotta-500 font-medium">Art. {article.id}</span> — {article.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={article.id}
                id={`article-${article.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.02 }}
                className="bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-sand-100 to-sand-50 px-6 py-4 border-b border-sand-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-terracotta-100 rounded-lg">
                      <Icon className="w-5 h-5 text-terracotta-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-terracotta-600 uppercase tracking-wider">
                        Article {article.id}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-night-900">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="prose prose-sand max-w-none">
                    {article.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-sand-700 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-terracotta-50 border-t border-terracotta-100">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-terracotta-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-night-900 mb-4">
              Important
            </h2>
            <p className="text-sand-700">
              Ce règlement est commun à toutes les courses organisées par "La Piste des Oasis". 
              Les modalités particulières à chaque course seront spécifiées lors de la présentation 
              de ces courses sur le site et lors de l'inscription à celle-ci.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-night-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Prêt pour l'aventure ?
          </h2>
          <p className="text-sand-300 mb-6 max-w-xl mx-auto">
            Découvrez notre prochaine édition et rejoignez-nous pour une expérience inoubliable.
          </p>
          <Link 
            href="/#next-edition"
            className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Voir la prochaine édition
          </Link>
        </div>
      </section>
    </main>
  );
}

