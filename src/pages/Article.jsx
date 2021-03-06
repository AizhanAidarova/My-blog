import React from 'react';
import "../pages/Article.css";
import Comments from "./Comments";

const Article = () => {
    return (
        <>
            <div style={{width:"1200px"}} className="text">
                <img src="https://habrastorage.org/getpro/habr/upload_files/0e3/f5c/a39/0e3f5ca39c23d23a8a5bf8122d47eb26.png"/>
                <h2 className="articleH2">Великобритания планирует построить космическую солнечную электростанцию — как она будет работать?</h2>
                <p className="article">Космическая солнечная электростанция — одна из технологий, которые будут представлены в рамках Net Zero
                    Innovation Portfolio. Проект признали потенциально подходящим решением для реализации британской
                    программы «Net Zero» по переходу к экономике с нулевым показателем вредных выбросов к 2050 году.

                    Как будет работать солнечная электростанция в космосе? Какие преимущества и недостатки этой технологии?
                    Космическая солнечная энергетика предполагает сбор солнечной энергии в космосе с дальнейшей передачей на
                    Землю. Эта идея не нова, но последние технологические достижения сделали эту перспективу более реальной.

                    Система по добыче энергии в космосе представляет собой спутник или огромный космический корабль,
                    оснащённый солнечными батареями. Эти батареи вырабатывают электроэнергию, которая затем передается по
                    беспроводной сети на Землю с помощью высокочастотных радиоволн. Антенна на Земле используется для
                    преобразования радиоволн в электричество, которое затем подаётся в электросеть.</p>
                <h3 className="articleH3">Некоторые проблемы</h3>
                <p className="article">Космическая солнечная электростанция обладает модульной конструкцией, собираемой на орбите.
                    Транспортировка элементов в космос сложная, дорогоnстоящая и также несёт вред окружающей среде. Кроме
                    того, солнечные батареи довольно много весят. Но эту проблемы частично решили с помощью разработки
                    сверхлёгких солнечных элементов.

                    Проект считается технически осуществимым в первую очередь благодаря последним достижениям в ключевых
                    технологиях, таких как лёгкие солнечные элементы, беспроводная передача энергии и космическая
                    робототехника. При этом важно отметить, что для сборки даже одной электростанции потребуется множество
                    запусков космических ракет. Станция предназначена для сокращения выбросов углекислого газа в
                    долгосрочной перспективе, но в ближайшей перспективе существует проблема с выбросами, выделяемыми при
                    запусках ракет, а также с высокой стоимостью самих запусков.</p>
                <p className="article">В настоящее время космические корабли для вывода спутников на орбиту преимущественно одноразовые, хотя
                    такие компании, как SpaceX, работают над многоразовыми шаттлами. Возможность повторного использования
                    систем запуска способна значительно снизить общую стоимость солнечной энергии, добываемой в космосе.Если
                    удастся успешно построить космическую солнечную электростанцию, её эксплуатация также столкнется с рядом
                    практических проблем. Солнечные панели может повредить космический мусор. </p>
                <p className="article"> Кроме того, панели в космосе не защищены земной атмосферой. Под воздействием более интенсивного солнечного излучения они будут
                    разрушаться быстрее, чем на Земле, что приведёт к снижению генерируемой мощности.

                    Ещё одна проблема — эффективность беспроводной передачи энергии. Передача энергии на большие расстояния
                    (в данном случае со спутника в космосе на Землю) затруднена. Нынешние технологии позволяют передавать на
                    Землю лишь часть собранной энергии.</p>
                <Comments/>
            </div>
        </>
    );
};

export default Article;