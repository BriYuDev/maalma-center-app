import Section from "../section";

export default function GreetingSection(){
    return <Section className="bg-slate-800 text-slate-400">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:">
                        <div className="order-2 md:order-1">
                            <h3 className="text-blue-300 scroll-m-20 pb-4 text-3xl font-semibold first:mt-0">
                                Sambutan Kepala Sekolah
                            </h3>
                            <p className="leading-7 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Integer condimentum non nulla ut fringilla.
                                Etiam eleifend efficitur pretium. Quisque malesuada
                                justo porttitor bibendum semper. Phasellus orci
                                lectus, semper sed molestie placerat, convallis eget
                                felis. Pellentesque luctus pharetra libero ut
                                gravida. Vestibulum eu nunc augue. Vivamus ante
                                massa, mollis et rutrum a, egestas quis neque. Duis
                                ut sollicitudin libero, vitae tempus leo. Mauris
                                justo ipsum, feugiat id porta eu, tincidunt non
                                magna. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed semper quam cursus odio
                                pretium, eget lacinia nisi fringilla. Aenean
                                volutpat quis turpis vitae tincidunt. Nulla velit
                                ipsum, ultricies luctus metus eu, pellentesque
                                finibus libero. Ut pellentesque quam nibh.
                            </p>
                        </div>
                        <div className="order-1 md:order-2"></div>
                    </div>
                </Section>
}