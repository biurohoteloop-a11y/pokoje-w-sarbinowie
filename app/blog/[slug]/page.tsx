import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar, Clock, ArrowLeft, ArrowRight, Shell, MapPin,
  ChevronRight, Anchor, Star, Umbrella, Camera, Utensils,
  Bike, Fish, TreePine, Sailboat, Users, Wallet, Bed,
  Heart, Sun, Waves, Phone
} from "lucide-react";
import { blogPosts } from "../posts-data";

const SITE = "https://www.pokoje-w-sarbinowie.pl";

// ============================================
// PEŁNE TREŚCI ARTYKUŁÓW - SEO CONTENT
// ============================================
const articleContent: Record<string, {
  heroImage: string;
  sections: {
    type: "text" | "heading" | "subheading" | "image" | "tip" | "list" | "quote" | "cta" | "divider" | "faq";
    content?: string;
    items?: string[];
    image?: string;
    alt?: string;
    caption?: string;
    author?: string;
    question?: string;
    answer?: string;
  }[];
}> = {
  // ============================================
  // ARTYKUŁ 1 - CO ZOBACZYĆ W SARBINOWIE
  // ============================================
  "co-zobaczyc-w-sarbinowie-atrakcje-2026": {
    heroImage: "/images/lody.jpeg",
    sections: [
      {
        type: "text",
        content:
          "Sarbinowo to urokliwa miejscowość wypoczynkowa na polskim wybrzeżu Bałtyku, położona między Mielnem a Ustroniem Morskim. Choć mniejsza od sąsiednich kurortów, kryje w sobie prawdziwe perełki, które sprawią, że Twój urlop w 2026 roku będzie niezapomniany. Przygotowaliśmy kompletny przewodnik po najlepszych atrakcjach — od plaży po lokalne smaki.",
      },
      {
        type: "heading",
        content: "1. Piaszczysta plaża — serce Sarbinowa",
      },
      {
        type: "text",
        content:
          "Główna atrakcja Sarbinowa to oczywiście szeroka, piaszczysta plaża ciągnąca się kilometrami wzdłuż wybrzeża. W przeciwieństwie do zatłoczonych plaż w Mielnie czy Kołobrzegu, tutaj znajdziesz spokój nawet w szczycie sezonu. Plaża jest łagodnie opadająca, co czyni ją idealną dla rodzin z dziećmi. Woda w zatoce nagrzewa się szybciej niż na otwartym morzu, osiągając w lipcu i sierpniu nawet 20-22°C.",
      },
      {
        type: "image",
        image: "/images/blog/sarbinowo-mielno.jpeg",
        alt: "Szeroka piaszczysta plaża w Sarbinowie nad Morzem Bałtyckim",
        caption: "Plaża w Sarbinowie — szeroka, czysta i znacznie spokojniejsza niż w pobliskim Mielnie",
      },
      {
        type: "tip",
        content:
          "💡 Najlepszy czas na plażowanie to godziny 10:00–16:00. Przychodź wcześnie rano, żeby zająć najlepsze miejsce blisko wejścia na plażę. Pamiętaj o kremie z filtrem SPF 50+ — morska bryza potrafi zmylić i łatwo się sparzyć!",
      },
      {
        type: "heading",
        content: "2. Port rybacki w Chłopach",
      },
      {
        type: "text",
        content:
          "Zaledwie 3 km od Sarbinowa znajduje się malowniczy port rybacki w Chłopach. To jedno z ostatnich miejsc na polskim wybrzeżu, gdzie można zobaczyć tradycyjne kutry wracające z połowu. Każdego ranka rybacy wyciągają łodzie na plażę i sprzedają świeże ryby prosto z sieci. Flądra, dorsz, śledź — smaki, których nie znajdziesz w żadnym supermarkecie. Port jest też doskonałym miejscem na zdjęcia — kolorowe łodzie na tle morza tworzą niepowtarzalny krajobraz.",
      },
      {
        type: "quote",
        content: "Nie ma lepszego śniadania nad morzem niż świeża wędzona ryba kupiona prosto od rybaka o poranku.",
        author: "Lokalny przewodnik, Sarbinowo",
      },
      {
        type: "heading",
        content: "3. Klif w Jarosławcu — punkt widokowy",
      },
      {
        type: "text",
        content:
          "Około 15 km na zachód od Sarbinowa wznosi się imponujący klif w Jarosławcu — jeden z najwyższych na polskim wybrzeżu. Osiąga wysokość nawet 20 metrów i oferuje zapierający dech w piersiach widok na otwarte morze. Spacer wzdłuż krawędzi klifu to niezapomniane przeżycie, szczególnie o zachodzie słońca, gdy niebo płonie odcieniami pomarańczu i fioletu. Uwaga: klif podlega ciągłej erozji, więc zachowaj bezpieczną odległość od krawędzi.",
      },
      {
        type: "image",
        image: "/images/blog/zachody-slonca.jpg",
        alt: "Zachód słońca nad klifem w Jarosławcu niedaleko Sarbinowa",
        caption: "Widok z klifu w Jarosławcu — jeden z najpiękniejszych zachodów słońca na polskim wybrzeżu",
      },
      {
        type: "heading",
        content: "4. Latarnia morska w Gąskach",
      },
      {
        type: "text",
        content:
          "Latarnia morska w Gąskach, oddalona około 10 km od Sarbinowa, to jedna z najstarszych czynnych latarni na polskim wybrzeżu. Zbudowana w 1878 roku, wznosi się na 27 metrów. Po pokonaniu 111 schodów czeka Cię panoramiczny widok na morze, las i okoliczne miejscowości. W sezonie letnim latarnia jest otwarta dla turystów — bilet kosztuje zaledwie 8 zł. To obowiązkowy punkt programu dla każdego odwiedzającego okolicę!",
      },
      {
        type: "list",
        content: "Informacje praktyczne — Latarnia w Gąskach:",
        items: [
          "📍 Adres: ul. Latarników 1, Gąski",
          "🕐 Godziny otwarcia (sezon): 10:00 – 18:00",
          "💰 Bilet: 8 zł dorośli, 5 zł dzieci",
          "📷 Idealna na zdjęcia panoramiczne",
          "🚗 Dojazd z Sarbinowa: 10 min samochodem",
        ],
      },
      {
        type: "heading",
        content: "5. Ścieżki rowerowe wzdłuż wybrzeża",
      },
      {
        type: "text",
        content:
          "Region Sarbinowa to raj dla rowerzystów. Nadmorska trasa rowerowa R10 prowadzi wzdłuż całego wybrzeża, oferując malownicze widoki na morze, wydmy i sosnowe lasy. Z Sarbinowa możesz wyruszyć na rower w stronę Mielna (7 km), Ustronia Morskiego (12 km) lub dalej do Kołobrzegu (25 km). Trasy są dobrze oznakowane i w większości prowadzą po asfaltowych ścieżkach — idealne nawet dla rodzin z dziećmi na rowerach. W Sarbinowie działa kilka wypożyczalni rowerów — ceny zaczynają się od 30 zł za dzień.",
      },
      {
        type: "heading",
        content: "6. Jezioro Jamno — kajaki i natura",
      },
      {
        type: "text",
        content:
          "Tuż za Sarbinowem rozciąga się Jezioro Jamno — duże jezioro przybrzeżne oddzielone od morza wąskim pasem lądu. To doskonałe miejsce na kajaki, wędkowanie i obserwację ptaków. Jezioro jest siedliskiem wielu gatunków ptaków wodnych, w tym łabędzi, czapli i kormoranów. Wypożyczenie kajaka kosztuje około 25–40 zł za godzinę. Szczególnie polecamy wieczorny spływ, gdy jezioro skąpane jest w złotym świetle zachodzącego słońca.",
      },
      {
        type: "heading",
        content: "7. Smażalnie ryb i lokalna kuchnia",
      },
      {
        type: "text",
        content:
          "Wizyta w Sarbinowie nie byłaby kompletna bez degustacji lokalnej kuchni nadmorskiej. W okolicy działa kilka znakomitych smażalni ryb, gdzie za 25–35 zł zjesz porcję świeżo smażonej flądry z frytkami i surówką. Polecamy też wędzonego dorsza i tradycyjną zupę rybną. Na głównej ulicy Sarbinowa znajdziesz też naleśnikarnię i lodziarnie z domowymi smakami. Koniecznie spróbuj lodów o smaku solony karmel z morzem — lokalny hit!",
      },
      {
        type: "tip",
        content:
          "🐟 Nasza rekomendacja: smażalnia przy porcie w Chłopach — najświeższe ryby na wybrzeżu, bo prosto z kutra! Przychodzą rano, więc najlepiej być przed 12:00.",
      },
      {
        type: "heading",
        content: "8. Aquapark w Mielnie",
      },
      {
        type: "text",
        content:
          "Gdy pogoda nie dopisze, doskonałą alternatywą jest Mielno Aquapark, położony zaledwie 7 km od Sarbinowa. Nowoczesny kompleks basenów ze zjeżdżalniami, jacuzzi, saunami i strefą relaksu zapewni rozrywkę całej rodzinie na cały dzień. Bilety dla dorosłych to około 45–60 zł za 2 godziny, dzieci płacą mniej. Warto wcześniej sprawdzić grafik na stronie — w weekendy bywa tłoczno.",
      },
      {
        type: "heading",
        content: "9. Nadmorskie lasy i grzyby",
      },
      {
        type: "text",
        content:
          "Zaplecze Sarbinowa to rozległe lasy sosnowe, które jesienią stają się prawdziwym rajem dla grzybiarzy. Ale nawet latem spacer leśnymi ścieżkami to czysta przyjemność — sosnowy zapach, cisza i cień drzew to idealna ucieczka od upału na plaży. W lasach wyznaczono kilka szlaków pieszych o różnej długości (od 2 do 8 km). Spotkasz tu sarny, wiewiórki i niezliczone gatunki ptaków.",
      },
      {
        type: "heading",
        content: "10. Zachody słońca na molo w Unieściu",
      },
      {
        type: "text",
        content:
          "Na koniec naszej listy — coś wyjątkowego. Molo w Unieściu (8 km od Sarbinowa) to jedno z najlepszych miejsc na polskim wybrzeżu do oglądania zachodów słońca. Drewniane molo wchodzi 200 metrów w morze, dając poczucie, że stoisz na środku Bałtyku. Wieczorem, gdy słońce tonie w morzu, a niebo przybiera kolory od złota po fiolet — to chwila, która zostaje w pamięci na zawsze. Wstęp na molo jest bezpłatny.",
      },
      {
        type: "divider",
      },
      {
        type: "heading",
        content: "Podsumowanie — Sarbinowo czeka na Ciebie",
      },
      {
        type: "text",
        content:
          "Sarbinowo to idealne miejsce dla tych, którzy szukają spokojnych wakacji nad morzem z dala od wielkomiejskiego zgiełku. Piaszczysta plaża, malownicze klify, port rybacki, ścieżki rowerowe i lokalna kuchnia — to wszystko w zasięgu ręki. A jeśli szukasz komfortowego noclegu w świetnej cenie, nasze Pokoje u Babci Jadzi czekają na Ciebie zaledwie 150 metrów od morza. Od 80 zł za osobę za dobę — bez ukrytych kosztów, z łazienką, TV i domową atmosferą.",
      },
      {
        type: "cta",
        content: "Zarezerwuj pokój i odkryj Sarbinowo osobiście!",
      },
      {
        type: "faq",
        question: "Jakie atrakcje są w Sarbinowie dla dzieci?",
        answer: "Sarbinowo oferuje szeroką, bezpieczną plażę z płytkim wejściem do morza, plac zabaw, ścieżki rowerowe oraz pobliski aquapark w Mielnie. Rodziny z dziećmi pokochają też port rybacki w Chłopach.",
      },
      {
        type: "faq",
        question: "Ile kosztują noclegi w Sarbinowie?",
        answer: "Ceny noclegów w Sarbinowie zaczynają się od 80 zł za osobę za dobę w pokojach gościnnych. To znacznie taniej niż w pobliskim Mielnie czy Kołobrzegu, przy zachowaniu tej samej jakości plaży.",
      },
      {
        type: "faq",
        question: "Jak dojechać do Sarbinowa?",
        answer: "Sarbinowo jest dostępne samochodem (droga krajowa nr 11 do Koszalina, potem droga wojewódzka do Sarbinowa), pociągiem do Koszalina + autobus, lub busem z większych miast. Z Koszalina dojazd trwa około 30 minut.",
      },
    ],
  },

  // ============================================
  // ARTYKUŁ 2 - TANIE NOCLEGI NAD MORZEM
  // ============================================
  "tanie-noclegi-nad-morzem-jak-zaoszczedzic": {
    heroImage: "/images/ROOM-1.jpg",
    sections: [
      {
        type: "text",
        content:
          "Wakacje nad polskim morzem kojarzą się wielu osobom z wysokimi cenami i pełnymi kurortami. Tymczasem istnieją sprawdzone sposoby, żeby wypocząć nad Bałtykiem komfortowo i tanio. Klucz to wybór odpowiedniego miejsca, terminu i rodzaju noclegu. W tym artykule dzielimy się praktycznymi poradami, dzięki którym Twoje wakacje 2026 będą udane i oszczędne.",
      },
      {
        type: "heading",
        content: "Dlaczego Sarbinowo to idealne miejsce na tanie wakacje?",
      },
      {
        type: "text",
        content:
          "Sarbinowo to kameralny kurort położony między Mielnem a Ustroniem Morskim. Mimo że oferuje tę samą piękną, szeroką plażę i czyste morze, ceny noclegów są tu nawet o 30-50% niższe niż w pobliskim Mielnie. Dlaczego? Bo Sarbinowo stawia na spokój i autentyczność zamiast masowej turystyki. Nie ma tu wielkich hoteli i tłumów — za to jest cisza, morska bryza i prawdziwie domowa atmosfera.",
      },
      {
        type: "list",
        content: "Porównanie cen noclegów na osobę za dobę (sezon 2026):",
        items: [
          "🏨 Mielno centrum: 150–250 zł/os.",
          "🏨 Kołobrzeg: 130–220 zł/os.",
          "🏨 Ustroń Morski: 100–180 zł/os.",
          "✅ Sarbinowo: 80–120 zł/os. — najlepsza wartość!",
        ],
      },
      {
        type: "heading",
        content: "Pokoje gościnne kontra hotel — co się bardziej opłaca?",
      },
      {
        type: "text",
        content:
          "Największą oszczędnością na wakacjach nad morzem jest wybór pokoi gościnnych zamiast hotelu. W Sarbinowie pokoje gościnne oferują standardy zbliżone do hotelu — własna łazienka, TV, lodówka, czajnik — ale w cenach 2-3 razy niższych. Dodatkowy plus to dostęp do wspólnej kuchni, gdzie możesz przygotować posiłki ze świeżych, lokalnych produktów. Rodzina 4-osobowa oszczędza w ten sposób nawet 100–150 zł dziennie na jedzeniu!",
      },
      {
        type: "tip",
        content:
          "💰 Pro tip: W Pokojach u Babci Jadzi w Sarbinowie cena wynosi stałe 80 zł za osobę za dobę — bez ukrytych kosztów. W cenie: łazienka, TV, czajnik, lodówka, dostęp do kuchni, parking i WiFi. To jeden z najlepszych stosunków jakości do ceny na całym wybrzeżu.",
      },
      {
        type: "heading",
        content: "Kiedy jechać, żeby zaoszczędzić?",
      },
      {
        type: "text",
        content:
          "Największe ceny nad morzem panują w szczycie sezonu — od połowy lipca do połowy sierpnia. Ale czy wiesz, że czerwiec i wrzesień to często lepsze miesiące na wakacje? Pogoda potrafi być równie piękna, plaże są znacznie mniej zatłoczone, a ceny spadają o 20-40%. Wrzesień nad Bałtykiem to prawdziwy skarb — ciepłe morze (woda trzyma temperaturę z lata), złote światło i spokój.",
      },
      {
        type: "list",
        content: "Najlepsze terminy na tanie wakacje nad morzem 2026:",
        items: [
          "🟢 1–20 czerwca — początek sezonu, niskie ceny, cieplejące morze",
          "🟡 20 czerwca – 10 lipca — umiarkowane ceny, dobra pogoda",
          "🔴 10 lipca – 20 sierpnia — szczyt sezonu, najwyższe ceny",
          "🟢 20 sierpnia – 15 września — spadające ceny, ciepłe morze!",
          "🟢 15–30 września — najniższe ceny, piękne złote światło",
        ],
      },
      {
        type: "heading",
        content: "Jak zaoszczędzić na jedzeniu nad morzem?",
      },
      {
        type: "text",
        content:
          "Jedzenie w restauracjach nadmorskich potrafi mocno obciążyć budżet — obiad dla rodziny to łatwo 150–200 zł. Dlatego warto wybierać noclegi z dostępem do kuchni. Ranne zakupy na lokalnym targu lub w Biedronce, śniadanie i kolacja przygotowane samodzielnie, a na obiad — smażalnia ryb z porcją za 25–35 zł. W ten sposób rodzina 4-osobowa wydaje na jedzenie 80–120 zł dziennie zamiast 300 zł.",
      },
      {
        type: "quote",
        content: "Najlepsze wakacje to nie te najdroższe, ale te, z których wracacie z uśmiechem i pieniędzmi na koncie.",
        author: "Opinia gościa, sierpień 2025",
      },
      {
        type: "heading",
        content: "Darmowe atrakcje w Sarbinowie i okolicach",
      },
      {
        type: "text",
        content:
          "Jedną z największych zalet Sarbinowa jest to, że najlepsze atrakcje są za darmo! Plaża, lasy, ścieżki rowerowe, zachody słońca na klifie, port rybacki w Chłopach — za to wszystko nie zapłacisz ani złotówki. Nawet molo w Unieściu jest bezpłatne. Jedyne wydatki to bilet na latarnię w Gąskach (8 zł) i ewentualne wypożyczenie roweru (30 zł/dzień).",
      },
      {
        type: "list",
        content: "TOP darmowe atrakcje w okolicy Sarbinowa:",
        items: [
          "🏖️ Plaża w Sarbinowie — szeroka, piaszczysta, czysta",
          "🌊 Molo w Unieściu — bezpłatne, idealne na zachody słońca",
          "⛵ Port rybacki w Chłopach — kolorowe kutry i świeże ryby",
          "🌲 Lasy nadmorskie — szlaki piesze i rowerowe",
          "🌅 Klif w Jarosławcu — zapierające dech widoki",
          "🦅 Jezioro Jamno — obserwacja ptaków i natura",
        ],
      },
      {
        type: "heading",
        content: "Podsumowanie — budżet na tydzień wakacji w Sarbinowie",
      },
      {
        type: "text",
        content:
          "Podsumowując, tydzień wakacji w Sarbinowie dla 2 osób może kosztować zaledwie 2100–2800 zł (noclegi 1120 zł + jedzenie 700–1200 zł + atrakcje 200–400 zł + dojazd). Dla rodziny 2+2 to kwota 3500–4500 zł za cały tydzień! Porównaj to z Mielnem (5000–8000 zł) czy zagranicznym all-inclusive (6000–12000 zł). Sarbinowo to dowód, że piękne wakacje nad morzem mogą być dostępne dla każdej rodziny.",
      },
      {
        type: "cta",
        content: "Sprawdź nasze pokoje od 80 zł/os. i zaplanuj budżetowe wakacje!",
      },
      {
        type: "faq",
        question: "Ile kosztuje nocleg w Sarbinowie w sezonie 2026?",
        answer: "Pokoje gościnne w Sarbinowie kosztują od 80 zł za osobę za dobę. To jedne z najtańszych noclegów na polskim wybrzeżu w tej jakości — z własną łazienką, TV i dostępem do kuchni.",
      },
      {
        type: "faq",
        question: "Czy Sarbinowo jest tańsze od Mielna?",
        answer: "Tak, zdecydowanie! Noclegi w Sarbinowie są średnio o 30-50% tańsze niż w Mielnie, a plaża jest tak samo piękna i znacznie mniej zatłoczona.",
      },
      {
        type: "faq",
        question: "Co jest w cenie noclegu w Pokojach u Babci Jadzi?",
        answer: "W cenie 80 zł/os. za dobę: pokój z własną łazienką, TV, czajnik, lodówka, dostęp do w pełni wyposażonej kuchni, darmowy parking, WiFi i wiata grillowa. Bez ukrytych opłat.",
      },
    ],
  },

  // ============================================
  // ARTYKUŁ 3 - WAKACJE Z DZIEĆMI
  // ============================================
  "wakacje-z-dziecmi-nad-baltykiem-sarbinowo": {
    heroImage: "/images/chlopiec.jpg",
    sections: [
      {
        type: "text",
        content:
          "Planowanie wakacji z dziećmi to zawsze wyzwanie — trzeba pogodzić potrzeby maluchów z pragnieniem relaksu rodziców. Sarbinowo nad Bałtykiem to jedno z najlepszych miejsc w Polsce na rodzinne wakacje. Bezpieczna plaża, spokojne otoczenie, mnóstwo atrakcji i przystępne ceny sprawiają, że rodziny wracają tu rok po roku. Oto nasz kompletny przewodnik.",
      },
      {
        type: "heading",
        content: "Bezpieczna plaża dla najmłodszych",
      },
      {
        type: "text",
        content:
          "Największym atutem Sarbinowa dla rodzin jest plaża z łagodnym, stopniowym wejściem do wody. Przez pierwsze 20–30 metrów woda sięga dorosłemu do kolan, co oznacza, że maluchy mogą bezpiecznie brodzić i bawić się na brzegu. Plaża jest piaszczysta (idealna do budowania zamków!), szeroka i — co najważniejsze — nie tak zatłoczona jak w Mielnie czy Kołobrzegu. W sezonie działa strzeżone kąpielisko z ratownikami, co daje dodatkowe poczucie bezpieczeństwa.",
      },
      {
        type: "image",
        image: "/images/chlopiec.jpg",
        alt: "Rodzina z dziećmi na plaży w Sarbinowie nad Bałtykiem",
        caption: "Plaża w Sarbinowie — łagodne wejście do wody idealne dla najmłodszych",
      },
      {
        type: "tip",
        content:
          "👶 Rada dla rodziców: Zabierzcie namiot plażowy lub parawan — ochroni maluszka przed wiatrem i słońcem. Na plaży w Sarbinowie łatwo znaleźć miejsce nawet z dużym rozłożeniem, bo nie jest tak ciasno jak w popularniejszych kurortach.",
      },
      {
        type: "heading",
        content: "Co robić z dziećmi gdy pada deszcz?",
      },
      {
        type: "text",
        content:
          "Pogoda nad Bałtykiem bywa kapryśna — warto mieć plan B. Na szczęście w okolicy nie brakuje atrakcji na deszczowe dni. Aquapark w Mielnie (7 km) to oczywisty wybór — baseny, zjeżdżalnie i strefa malucha zajmą rodzinę na 3-4 godziny. W Koszalinie (25 km) działają kino, centrum zabaw dla dzieci i muzeum. Ale nawet w naszych pokojach gościnnych — z telewizorem, grami planszowymi i wspólną kuchnią — deszczowy dzień może być przytulny i przyjemny.",
      },
      {
        type: "list",
        content: "Atrakcje dla dzieci w okolicy Sarbinowa:",
        items: [
          "🏊 Aquapark Mielno — baseny i zjeżdżalnie (7 km)",
          "🚂 Przejażdżka Bałtyckim Tramwajem Nadmorskim",
          "🏰 Budowanie zamków na plaży — codziennie!",
          "🚴 Rowery rodzinne — ścieżki nadmorskie",
          "⛵ Rejs kutrem z portu w Chłopach",
          "🦀 Łowienie krabów na molo w Unieściu",
          "🌲 Spacery po lesie — poszukiwanie zwierząt",
          "🍦 Degustacja domowych lodów w Sarbinowie",
        ],
      },
      {
        type: "heading",
        content: "Noclegi idealne dla rodzin",
      },
      {
        type: "text",
        content:          "Wybierając nocleg z dziećmi, szukaj miejsca z przestronnym pokojem (minimum dla 4 osób), łazienką, dostępem do kuchni (przygotowanie posiłków dla dzieci to podstawa!) i bezpiecznym terenem. W Pokojach u Babci Jadzi mamy dokładnie to — pokoje 4-osobowe z łazienką, w pełni wyposażoną kuchnię, ogrodzony zielony teren z wiatą grillową i parking. Wszystko 150 metrów od plaży, więc nawet z wózkiem dotrzesz w 3 minuty.",
      },
      {
        type: "tip",
        content:
          "👨‍👩‍👧‍👦 Nasz Pokój Morski i Pokój Rodzinny to pokoje 4-osobowe idealne dla rodzin. Cena to 80 zł za osobę za dobę — rodzina 2+2 płaci więc 320 zł za noc z łazienką, TV, lodówką i dostępem do kuchni. Taniej niż jeden nocleg w hotelu!",
      },
      {
        type: "heading",
        content: "Jak spakować się na wakacje z dziećmi?",
      },
      {
        type: "list",
        content: "Lista pakowania na wakacje nad morzem z dziećmi:",
        items: [
          "☀️ Krem z filtrem SPF 50+ — obowiązkowo!",
          "🏖️ Namiot plażowy lub parawan",
          "🩱 Minimum 2 komplety strojów kąpielowych",
          "🧴 Środek na komary — wieczorami się przydaje",
          "🎮 Gry planszowe na deszczowe wieczory",
          "🚲 Kaski rowerowe, jeśli planujecie wycieczki",
          "🥪 Pojemniki na kanapki — oszczędność na plaży",
          "📱 Power bank — zdjęcia wyczerpują baterię!",
          "🧸 Ulubiona zabawka dziecka — niezbędna do snu",
          "💊 Podstawowa apteczka — plastry, termometr, Ibuprom",
        ],
      },
      {
        type: "heading",
        content: "Typowy dzień rodzinnych wakacji w Sarbinowie",
      },
      {
        type: "text",
        content:
          "Jak wygląda idealny dzień wakacji z dziećmi w Sarbinowie? Oto nasza propozycja. Rano — spokojne śniadanie przygotowane w kuchni gościnnej (jajecznica, tosty, owoce). Potem 3-minutowy spacer na plażę, budowanie zamków z piasku i pluskanie się w morzu do obiadu. Obiad — albo kanapki zabrane na plażę, albo powrót do pokoju na szybki makaron. Popołudnie — wycieczka rowerowa nad Jezioro Jamno lub wizyta w porcie rybackim w Chłopach. Wieczór — grill na wiacie, gry planszowe i bajka przed snem. Perfekcyjny dzień za mniej niż 150 zł dla całej rodziny!",
      },
      {
        type: "quote",
        content: "Trzeci rok z rzędu przyjeżdżamy do Sarbinowa. Dzieci od marca pytają 'kiedy morze?'. Spokój, plaża i domowa atmosfera — nic więcej nie potrzebujemy.",
        author: "Ania i Marcin, rodzina z Poznania",
      },
      {
        type: "divider",
      },
      {
        type: "heading",
        content: "Podsumowanie — Sarbinowo stworzone dla rodzin",
      },
      {
        type: "text",
        content:
          "Sarbinowo to jedno z niewielu miejsc na polskim wybrzeżu, gdzie możesz dać dzieciom bezpieczne, piękne wakacje nad morzem bez rujnowania budżetu. Bezpieczna plaża, darmowe atrakcje, spokojne otoczenie i tanie noclegi — to idealna kombinacja. Pokoje u Babci Jadzi czekają na Waszą rodzinę z otwartymi ramionami. Zarezerwujcie termin i stwórzcie wspomnienia na całe życie!",
      },
      {
        type: "cta",
        content: "Zarezerwuj pokój rodzinny od 80 zł/os. — dzieci pokochają Sarbinowo!",
      },
      {
        type: "faq",
        question: "Czy plaża w Sarbinowie jest bezpieczna dla dzieci?",
        answer: "Tak! Plaża ma łagodne, stopniowe wejście do wody — na dystansie 20-30 metrów woda sięga dorosłemu do kolan. W sezonie działa strzeżone kąpielisko z ratownikami.",
      },
      {
        type: "faq",
        question: "Czy w Pokojach u Babci Jadzi jest kuchnia dla gości?",
        answer: "Tak, oferujemy w pełni wyposażoną kuchnię do dyspozycji gości — lodówka, kuchenka, czajnik, garnki, talerze. Idealna do przygotowania posiłków dla dzieci.",
      },
      {
        type: "faq",
        question: "Ile kosztują wakacje z rodziną w Sarbinowie?",
        answer: "Tydzień dla rodziny 2+2 to około 2240 zł za noclegi (80 zł x 4 osoby x 7 nocy) + jedzenie i atrakcje. Łącznie 3500–4500 zł za cały tydzień — znacznie taniej niż w Mielnie czy Kołobrzegu.",
      },
    ],
  },

  // ============================================
  // ARTYKUŁ 4 - KUCHNIA NADMORSKA
  // ============================================
  "kuchnia-nadmorska-sarbinowo-co-jesc": {
    heroImage: "/images/fish.jpg",
    sections: [
      {
        type: "text",
        content:
          "Wakacje nad Bałtykiem to nie tylko morze i plaża — to także uczta dla podniebienia! Kuchnia nadmorska w Sarbinowie i okolicach zachwyca świeżością, prostotą i autentycznością. Od ryb prosto z kutra, przez wędzone specjały, po domowe lody i regionalne piwa — ten kulinarny przewodnik pokaże Ci, co koniecznie musisz spróbować podczas wizyty na polskim wybrzeżu.",
      },
      {
        type: "heading",
        content: "Ryby prosto z kutra — serce nadmorskiej kuchni",
      },
      {
        type: "text",
        content:
          "Absolutnym królem nadmorskiej kuchni jest świeża ryba. W pobliskim porcie rybackim w Chłopach (3 km od Sarbinowa) każdego ranka rybacy wyciągają łodzie na plażę i sprzedają poranny połów. Flądra, dorsz, śledź, sandacz — smaki, które w żaden sposób nie przypominają mrożonek ze sklepu. Ceny? Kilogram świeżej flądry to około 25–30 zł, dorsz 30–40 zł. Jeśli nie umiesz przygotować ryby — nie martw się, smażalnie zrobią to za Ciebie po mistrzowsku!",
      },
      {
        type: "image",
        image: "/images/blog/kuchnia.jpeg",
        alt: "Świeże ryby na targu rybnym nad Morzem Bałtyckim",
        caption: "Poranny połów w porcie rybackim — świeższe ryby można dostać tylko łowiąc je samemu",
      },
      {
        type: "heading",
        content: "Top 5 dań, które musisz spróbować",
      },
      {
        type: "list",
        content: "Obowiązkowe pozycje w menu wakacyjnym:",
        items: [
          "🐟 Smażona flądra — złocista, chrupiąca, z frytkami i surówką (25–35 zł)",
          "🐡 Wędzony dorsz — delikatny, rozpływający się w ustach (20–25 zł/kawałek)",
          "🍲 Zupa rybna — gęsta, kremowa, z kawałkami ryb i warzywami (15–20 zł)",
          "🥒 Śledź w oleju z cebulą — klasyk! Na chleb z masłem (12–15 zł)",
          "🦐 Krewetki bałtyckie w czosnku — coraz popularniejszy przysmak (30–40 zł)",
        ],
      },
      {
        type: "heading",
        content: "Najlepsze smażalnie w okolicy Sarbinowa",
      },
      {
        type: "text",
        content:
          "Smażalnia przy porcie w Chłopach to bezsprzeczny numer jeden — ryby trafiają tu prosto z kutra, a porcje są ogromne. Kolejne godne polecenia miejsca to smażalnia na promenadzie w Mielnie (większy wybór, trochę drożej) i lokalna smażalnia w centrum Sarbinowa — mniejsza, ale z domowym charakterem i najniższymi cenami. Wszędzie standard jest wysoki — trudno trafić źle!",
      },
      {
        type: "tip",
        content:
          "🐟 Pro tip: Najświeższe ryby dostaniesz do godziny 12:00 — rybacy wracają z morza rano. Po 14:00 wybór jest już mniejszy. W weekendy warto przyjść wcześniej, bo kolejki potrafią być długie!",
      },
      {
        type: "heading",
        content: "Wędzone ryby — nadmorska tradycja",
      },
      {
        type: "text",
        content:
          "Wędzenie ryb to tradycja sięgająca setek lat na polskim wybrzeżu. W okolicy Sarbinowa działa kilka wędzarni, gdzie ryby przygotowywane są metodą tradycyjnego wędzenia na gorąco w dymie z drewna bukowego. Efekt? Złocista skórka, delikatny dymny aromat i mięso, które rozpływa się w ustach. Wędzoną makrelę, flądrę czy łososia kupisz na straganach plażowych i w sklepikach rybnych. Idealne na plażową przekąskę lub kolację!",
      },
      {
        type: "heading",
        content: "Lody, gofry i słodkości nadmorskie",
      },
      {
        type: "text",
        content:
          "Żadne wakacje nad morzem nie są kompletne bez lodów! W Sarbinowie i okolicach działa kilka lodziarni z domowymi, rzemieślniczymi lodami. Hit sezonu 2025 to smak 'solony karmel z morzem' — połączenie słodkiego karmelu z delikatną nutą morskiej soli. Inne popularne smaki to jagoda z lawendą, pistacja i tradycyjna śmietankowa. Gałka kosztuje 5–7 zł. Polecamy też gofry z owocami i bitą śmietaną — klasyk nadmorski za 15–20 zł.",
      },
      {
        type: "heading",
        content: "Gotowanie w kuchni gościnnej — oszczędność i zabawa",
      },
      {
        type: "text",
        content:
          "Jedną z największych zalet noclegu w pokojach gościnnych jest dostęp do kuchni. Możesz kupić świeże ryby na targu, warzywa z lokalnego sklepu i przygotować obiad samodzielnie. Świeża flądra smażona na maśle z cytryną i ziemniakami — łatwiejsze niż myślisz, a smak nieporównywalny z restauracją! W Pokojach u Babci Jadzi kuchnia jest w pełni wyposażona — kuchenka, lodówka, garnki, patelnie, naczynia. Wszystko czego potrzebujesz do kulinarnych eksperymentów na wakacjach.",
      },
      {
        type: "quote",
        content: "Najsmaczniejszy obiad na wakacjach? Flądra kupiona rano od rybaka, usmażona na maśle w kuchni gościnnej, zjedzona na tarasie z widokiem na zachodzące słońce.",
        author: "Gość z Pokoi u Babci Jadzi, lipiec 2025",
      },
      {
        type: "cta",
        content: "Zarezerwuj pokój z dostępem do kuchni i gotuj ze świeżych nadmorskich produktów!",
      },
      {
        type: "faq",
        question: "Gdzie kupić świeże ryby w Sarbinowie?",
        answer: "Najświeższe ryby kupisz w porcie rybackim w Chłopach (3 km od Sarbinowa) — rybacy sprzedają poranny połów prosto z łodzi. Najlepiej przyjść przed 12:00.",
      },
      {
        type: "faq",
        question: "Ile kosztuje obiad w smażalni ryb?",
        answer: "Porcja smażonej flądry z frytkami i surówką kosztuje 25–35 zł. Zupa rybna to 15–20 zł. Obiad dla dwojga wychodzi około 60–80 zł.",
      },
    ],
  },

  // ============================================
  // ARTYKUŁ 5 - ŚCIEŻKI ROWEROWE
  // ============================================
  "sciezki-rowerowe-sarbinowo-mielno-okolice": {
    heroImage: "/images/rower.jpg",
    sections: [
      {
        type: "text",
        content:
          "Okolice Sarbinowa to prawdziwy raj dla miłośników dwóch kółek. Nadmorskie ścieżki rowerowe, leśne dukty i malownicze trasy wzdłuż klifu oferują niezapomniane wrażenia zarówno dla zapalonych kolarzy, jak i rodzin z dziećmi. W tym przewodniku przedstawiamy najlepsze trasy rowerowe w sezonie 2026 — z mapami, dystansami i praktycznymi poradami.",
      },
      {
        type: "heading",
        content: "Trasa 1: Sarbinowo → Mielno wzdłuż morza (7 km)",
      },
      {
        type: "text",
        content:
          "To najłatwiejsza i najpopularniejsza trasa w okolicy — idealna na rodzinną wycieczkę. Ścieżka prowadzi asfaltową drogą rowerową wzdłuż wydm, z pięknym widokiem na morze po lewej stronie. Dystans 7 km w jedną stronę pokonasz w 25–30 minut spokojnym tempem. W Mielnie czeka na Ciebie promenada, lodziarnie i deptak. Wracając, zatrzymaj się na plaży w Unieściu — molo jest darmowe i idealne na odpoczynek.",
      },
      {
        type: "list",
        content: "Szczegóły trasy:",
        items: [
          "📏 Dystans: 7 km w jedną stronę (14 km w obie)",
          "⏱️ Czas: 25–30 min w jedną stronę",
          "📈 Trudność: łatwa — płaska, asfaltowa",
          "👨‍👩‍👧 Dla rodzin: TAK — bezpieczna i prosta",
          "📍 Atrakcje po drodze: plaża w Unieściu, molo, promenada Mielno",
        ],
      },
      {
        type: "heading",
        content: "Trasa 2: Sarbinowo → Ustronie Morskie przez las (12 km)",
      },
      {
        type: "text",
        content:
          "Bardziej wymagająca, ale przepiękna trasa prowadząca przez nadmorski las sosnowy. Trasa łączy asfaltowe odcinki z leśnymi duktami (utwardzone, ale nie tak gładkie jak asfalt). Sosnowy zapach, cień drzew i śpiew ptaków towarzyszą Ci przez większość drogi. W Ustroniu Morskim czeka piękna plaża, molo i doskonała restauracja rybna. Trasa jest trochę bardziej wymagająca ze względu na leśne odcinki — raczej dla starszych dzieci i dorosłych.",
      },
      {
        type: "heading",
        content: "Trasa 3: Dookoła Jeziora Jamno (25 km)",
      },
      {
        type: "text",
        content:
          "To trasa dla bardziej ambitnych rowerzystów. Pętla dookoła Jeziora Jamno to 25 km malowniczej drogi przez wsie rybackie, pola, lasy i nabrzeże jeziora. Trasa jest zróżnicowana — od płaskich odcinków po niewielkie wzniesienia. Po drodze możesz zatrzymać się na obserwację ptaków (jezioro jest siedliskiem łabędzi, czapli i kormoranów), na kawę w jednej z wiosek lub na kąpiel w jeziorze. Warto zabrać prowiant — na trasie nie ma wielu sklepów.",
      },
      {
        type: "tip",
        content:
          "🚴 Wypożyczenie roweru w Sarbinowie kosztuje 30–50 zł za dzień. Rowery dla dzieci i foteliki dziecięce też są dostępne. Polecamy rezerwację dzień wcześniej w szczycie sezonu — popularne rozmiary szybko się rozchodzą!",
      },
      {
        type: "heading",
        content: "Trasa 4: R10 — nadmorska magistrala rowerowa",
      },
      {
        type: "text",
        content:
          "Trasa R10 to międzynarodowa trasa rowerowa biegnąca wzdłuż całego polskiego wybrzeża — od Świnoujścia po Krynicę Morską. Odcinek przez Sarbinowo jest jednym z najpiękniejszych: klify, wydmy, lasy i plaże. Z Sarbinowa możesz wyruszyć w stronę Kołobrzegu (25 km) — trasa jest dobrze oznakowana i w większości asfaltowa. Dla naprawdę wytrwałych — przejazd Sarbinowo–Kołobrzeg–Sarbinowo (50 km) to intensywna, ale fantastyczna jednodniowa wycieczka.",
      },
      {
        type: "heading",
        content: "Praktyczne porady dla rowerzystów",
      },
      {
        type: "list",
        content: "Co zabrać na rowerową wycieczkę nad morzem:",
        items: [
          "💧 Woda — minimum 1 litr na osobę (morska bryza wysusza!)",
          "🧴 Krem z filtrem — nawet w ruchu się opalisz",
          "🔧 Pompka i łatka — leśne ścieżki mogą zaskoczyć",
          "📱 Naładowany telefon z mapą offline",
          "🥪 Kanapki i owoce — na trasach mało sklepów",
          "🧥 Wiatroszczelna kurtka — pogoda zmienia się szybko",
          "🔒 Zapięcie rowerowe — do zostawienia roweru na plaży",
        ],
      },
      {
        type: "cta",
        content: "Nocuj w Sarbinowie i odkryj najpiękniejsze trasy rowerowe wybrzeża!",
      },
      {
        type: "faq",
        question: "Czy w Sarbinowie można wypożyczyć rowery?",
        answer: "Tak, w Sarbinowie działa kilka wypożyczalni rowerów. Ceny zaczynają się od 30 zł za dzień. Dostępne są rowery dla dorosłych, dzieci oraz foteliki dziecięce.",
      },
      {
        type: "faq",
        question: "Jaka jest najłatwiejsza trasa rowerowa z Sarbinowa?",
        answer: "Najłatwiejsza trasa to Sarbinowo → Mielno (7 km) — płaska, asfaltowa ścieżka wzdłuż morza, idealna dla rodzin z dziećmi.",
      },
    ],
  },

  // ============================================
  // ARTYKUŁ 6 - SARBINOWO CZY MIELNO
  // ============================================
  "sarbinowo-czy-mielno-porownanie-kurortow": {
    heroImage: "/images/molo.jpeg",
    sections: [
      {
        type: "text",
        content:
          "Sarbinowo i Mielno dzieli zaledwie 7 km — ale dzieli je przepaść w charakterze i atmosferze. Jedno to cichy, kameralny kurort dla rodzin i par szukających spokoju. Drugie to tętniące imprezowym życiem centrum polskiej Riwiery. Które wybrać na wakacje 2026? Porównujemy oba kurorty pod każdym kątem — ceny, plaże, atrakcje, noclegi i klimat. Na końcu pomożemy Ci podjąć decyzję.",
      },
      {
        type: "heading",
        content: "Atmosfera i charakter — spokój kontra impreza",
      },
      {
        type: "text",
        content:
          "Mielno to znana 'stolica imprez nad Bałtykiem'. Latem główna ulica zamienia się w deptak pełen barów, klubów i sklepów z pamiątkami. Muzyka gra do rana, a plaża jest pełna ludzi od wczesnych godzin. To idealne miejsce, jeśli szukasz nocnego życia, dużego wyboru restauracji i energicznej atmosfery. Sarbinowo to przeciwieństwo — cisza, spokój i natura. Tu słyszysz szum morza zamiast muzyki z klubu. Wieczorami na plaży możesz być sam z zachodem słońca. Dla rodzin z dziećmi, par i osób szukających prawdziwego odpoczynku — to raj.",
      },
      {
        type: "list",
        content: "Porównanie cen — Sarbinowo vs Mielno (sezon 2026):",
        items: [
          "🛏️ Nocleg za osobę: Sarbinowo 80–120 zł | Mielno 150–250 zł",
          "🍽️ Obiad (smażalnia ryb): Sarbinowo 25–35 zł | Mielno 35–55 zł",
          "🍦 Lody (gałka): Sarbinowo 5–6 zł | Mielno 7–9 zł",
          "🚗 Parking (dzień): Sarbinowo darmowy | Mielno 20–40 zł",
          "🏖️ Leżak na plaży: Sarbinowo 15–20 zł | Mielno 30–50 zł",
        ],
      },
      {
        type: "heading",
        content: "Plaża — porównanie",
      },
      {
        type: "text",
        content:
          "Oba kurorty mają szeroką, piaszczystą plażę — w końcu to ten sam odcinek bałtyckiego wybrzeża. Kluczowa różnica? Tłumy. W szczycie sezonu plaża w Mielnie jest wypełniona od krawędzi do krawędzi — znalezienie wolnego miejsca to wyzwanie. W Sarbinowie, nawet w sierpniu, bez problemu rozłożysz koc z przestrzenią wokół. Woda jest identyczna — czysta, z łagodnym wejściem — ale w Sarbinowie kąpiel jest spokojniejsza i bezpieczniejsza (mniej ludzi w wodzie).",
      },
      {
        type: "heading",
        content: "Noclegi — co dostaniesz za te same pieniądze?",
      },
      {
        type: "text",
        content:
          "Za 80 zł za osobę za dobę w Sarbinowie dostaniesz pokój z własną łazienką, TV, lodówką, czajnikiem i dostępem do kuchni — plus darmowy parking i WiFi. Za te same 80 zł w Mielnie dostaniesz... miejsce w pokoju wieloosobowym w starszym kwaterze, bez łazienki, z łazienką na korytarzu. Żeby uzyskać podobny standard w Mielnie, musisz zapłacić 150–200 zł za osobę. Różnica jest ogromna.",
      },
      {
        type: "tip",
        content:
          "💡 Najlepszy kompromis: nocuj w Sarbinowie (tanie, spokojne, komfortowe), a na wieczorne wyjście jedź rowerem do Mielna (7 km, 25 min). Masz najlepsze z obu światów!",
      },
      {
        type: "heading",
        content: "Dla kogo Sarbinowo, a dla kogo Mielno?",
      },
      {
        type: "list",
        content: "Sarbinowo jest idealne dla:",
        items: [
          "👨‍👩‍👧‍👦 Rodzin z dziećmi — bezpieczna plaża, spokój, kuchnia",
          "💑 Par szukających romantycznego wypoczynku",
          "👵 Seniorów ceniących ciszę i naturę",
          "💰 Oszczędnych — najlepsze ceny na wybrzeżu",
          "🧘 Osób szukających prawdziwego odpoczynku od miasta",
        ],
      },
      {
        type: "list",
        content: "Mielno jest idealne dla:",
        items: [
          "🎉 Młodych szukających imprez i nocnego życia",
          "🛍️ Osób lubiących deptak i duży wybór lokali",
          "🏄 Fanów sportów wodnych (większa baza)",
          "📸 Influencerów i osób szukających 'życia' wokół",
        ],
      },
      {
        type: "heading",
        content: "Nasz werdykt",
      },
      {
        type: "text",
        content:
          "Jeśli czytasz ten artykuł, prawdopodobnie szukasz spokojnych, komfortowych wakacji w dobrej cenie. W takim razie Sarbinowo jest Twoim miejscem. Ta sama piękna plaża co w Mielnie, ale za połowę ceny i bez tłumów. A jeśli któregoś wieczoru zatęsknisz za gwarem — Mielno jest zaledwie 25 minut rowerem. W Pokojach u Babci Jadzi czekamy na Ciebie z domową atmosferą, komfortowymi pokojami i ceną, która nie zrujnuje budżetu wakacyjnego.",
      },
      {
        type: "cta",
        content: "Wybierz spokój i komfort — zarezerwuj pokój w Sarbinowie od 80 zł!",
      },
      {
        type: "faq",
        question: "Czy Sarbinowo jest blisko Mielna?",
        answer: "Tak! Sarbinowo jest oddalone zaledwie 7 km od Mielna — to 10 minut samochodem lub 25 minut rowerem po ścieżce nadmorskiej.",
      },
      {
        type: "faq",
        question: "Czy w Sarbinowie jest co robić wieczorami?",
        answer: "Sarbinowo to spokojny kurort — wieczory to zachody słońca na plaży, grille, spacery i gry planszowe. Kto szuka życia nocnego, może szybko dojechać do Mielna (7 km).",
      },
      {
        type: "faq",
        question: "Które miejsce jest lepsze dla rodzin z dziećmi?",
        answer: "Zdecydowanie Sarbinowo — bezpieczna, spokojna plaża, niższe ceny, mniej tłumów i dostęp do kuchni w pokojach gościnnych. Idealne warunki dla rodzin.",
      },
    ],
  },
};

// ============================================
// GENERATE STATIC PARAMS - SSG dla SEO
// ============================================
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
// ============================================
// GENERATE METADATA - dynamiczne SEO per artykuł
// ============================================
// ============================================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artykuł nie znaleziony | Blog Sarbinowo",
    };
  }

  return {
    title: `${post.title} | Blog Sarbinowo`,
    description: post.excerpt,
    keywords: [
      "sarbinowo",
      "noclegi sarbinowo",
      "pokoje sarbinowo",
      "pokoje w sarbinowie",
      "tanie noclegi sarbinowo",
      "tanie pokoje sarbinowo",
      post.category.toLowerCase(),
      "wakacje nad morzem",
      "bałtyk",
    ],
   alternates: {
      canonical: `https://www.pokoje-w-sarbinowie.pl/blog/${post.slug}`, // ← www
    },
    openGraph: {
      title: `${post.title} | Blog Sarbinowo`,
      description: post.excerpt,
      url: `https://www.pokoje-w-sarbinowie.pl/blog/${post.slug}`, // ← www
      type: "article",
      locale: "pl_PL",
      publishedTime: post.date,
      images: [
        {
          url: articleContent[post.slug]?.heroImage || post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}



// ============================================
// GŁÓWNY KOMPONENT STRONY ARTYKUŁU
// ============================================
export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const article = articleContent[params.slug];

  if (!post || !article) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const faqs = article.sections.filter((s) => s.type === "faq");

  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `${SITE}${article.heroImage.startsWith("/") ? article.heroImage : `/${article.heroImage}`}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "Pokoje u Babci Jadzi",
              url: SITE,
            },
            publisher: {
              "@type": "Organization",
              name: "Pokoje u Babci Jadzi",
              logo: {
                "@type": "ImageObject",
                url: `${SITE}/images/${encodeURIComponent("logo klientki.png")}`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE}/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* JSON-LD FAQ */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* ===== HERO ARTYKUŁU ===== */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${article.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a38] via-[#0f2a38]/50 to-transparent" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs text-white/50 mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Strona główna
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-white/80 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70 line-clamp-1">{post.title}</span>
          </nav>

          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium bg-[#5b9bc4]/20 text-[#7dbde8] border border-[#5b9bc4]/30 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {post.category}
          </span>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-[0.01em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-6 text-white/50 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} czytania
            </span>
          </div>
        </div>
      </section>

      {/* ===== TREŚĆ ARTYKUŁU ===== */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {article.sections.map((section, index) => {
            switch (section.type) {
              case "text":
                return (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#3a4a52] font-light leading-relaxed mb-8"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {section.content}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1a3a4a] mb-6 mt-16 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.content}
                  </h2>
                );

              case "subheading":
                return (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-light text-[#2a5a7b] mb-4 mt-12"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.content}
                  </h3>
                );

              case "image":
                return (
                  <figure key={index} className="my-12 -mx-6 md:-mx-12 lg:-mx-24">
                    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-none md:rounded-2xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${section.image}')` }}
                      />
                    </div>
                    {section.caption && (
                      <figcaption
                        className="text-center text-sm text-[#4a6a7a]/60 mt-4 px-6 font-light italic"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "tip":
                return (
                  <div
                    key={index}
                    className="my-10 p-6 md:p-8 bg-[#f0f7fb] border-l-4 border-[#5b9bc4] rounded-r-xl"
                  >
                    <p
                      className="text-sm md:text-base text-[#2a5a7b] font-light leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {section.content}
                    </p>
                  </div>
                );

              case "list":
                return (
                  <div key={index} className="my-10">
                    {section.content && (
                      <p
                        className="text-base md:text-lg font-medium text-[#1a3a4a] mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {section.content}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {section.items?.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base text-[#3a4a52] font-light leading-relaxed pl-2"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-12 py-8 px-8 md:px-12 border-l-4 border-[#7dbde8] bg-gradient-to-r from-[#f7fafe] to-transparent rounded-r-xl"
                  >
                    <p
                      className="text-lg md:text-xl text-[#2a5a7b] font-light leading-relaxed italic"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      &ldquo;{section.content}&rdquo;
                    </p>
                    {section.author && (
                      <cite
                        className="block mt-4 text-sm text-[#5b9bc4] font-medium not-italic"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        — {section.author}
                      </cite>
                    )}
                  </blockquote>
                );

              case "cta":
                return (
                  <div
                    key={index}
                    className="my-16 p-8 md:p-12 bg-gradient-to-r from-[#1a3a4a] to-[#2a5a7b] rounded-2xl text-center"
                  >
                    <Anchor className="w-8 h-8 text-[#7dbde8] mx-auto mb-4" />
                    <p
                      className="text-xl md:text-2xl text-white font-light mb-6"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {section.content}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5b9bc4] hover:bg-[#7dbde8] text-white text-sm tracking-[0.1em] uppercase font-light transition-all duration-300"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        Zarezerwuj pokój
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="tel:+48123456789"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm tracking-[0.1em] uppercase font-light transition-all duration-300"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <Phone className="w-4 h-4" />
                        Zadzwoń
                      </Link>
                    </div>
                  </div>
                );

              case "divider":
                return (
                  <div key={index} className="my-16 flex items-center justify-center gap-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#5b9bc4]/30" />
                    <Shell className="w-5 h-5 text-[#5b9bc4]/40" />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#5b9bc4]/30" />
                  </div>
                );

              case "faq":
                return (
                  <div
                    key={index}
                    className="my-6 p-6 bg-[#f7fafe] rounded-xl border border-[#e8eef2]"
                  >
                    <h3
                      className="text-base md:text-lg font-medium text-[#1a3a4a] mb-3 flex items-start gap-3"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-[#5b9bc4] font-bold text-lg mt-0.5">Q:</span>
                      {section.question}
                    </h3>
                    <p
                      className="text-sm md:text-base text-[#4a6a7a] font-light leading-relaxed pl-8"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {section.answer}
                    </p>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </article>

      {/* ===== NAWIGACJA MIĘDZY POSTAMI ===== */}
      <section className="bg-[#f7fafe] border-t border-[#e8eef2]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-[#5b9bc4] group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0" />
                <div>
                  <span
                    className="text-xs text-[#5b9bc4] uppercase tracking-[0.15em] font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Poprzedni artykuł
                  </span>
                  <p
                    className="text-sm text-[#1a3a4a] font-light mt-1 line-clamp-2 group-hover:text-[#2a5a7b] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 text-right md:justify-end"
              >
                <div>
                  <span
                    className="text-xs text-[#5b9bc4] uppercase tracking-[0.15em] font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Następny artykuł
                  </span>
                  <p
                    className="text-sm text-[#1a3a4a] font-light mt-1 line-clamp-2 group-hover:text-[#2a5a7b] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#5b9bc4] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#5b9bc4] hover:text-[#2a5a7b] transition-colors font-light"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do wszystkich artykułów
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


          