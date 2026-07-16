import * as React from 'react';
import {Link} from 'gatsby';
import {
    BrickWall,
    Cable,
    Droplets,
    Fence,
    HardHat,
    LandPlot,
    Layers3,
    Mountain,
    Pickaxe,
    Route,
    Shovel,
    Waves,
    Zap,
} from 'lucide-react';
import Typography from '../Typography/typography';
import Container from '../container/container';

const iconByServiceKey = {
    'wykopy-wod-kan': Droplets,
    'wykopy-elektryczne': Zap,
    'wykopy-gazowe': Cable,
    'wykopy-fundamenty': Pickaxe,
    parkingi: Route,
    zageszczarki: HardHat,
    zbiorniki: Waves,
    niwelacja: LandPlot,
    odwodnienia: Mountain,
    kanalizacje: Shovel,
    palisady: Fence,
    geokraty: Layers3,
    obrzeza: BrickWall,
    'kostka-brukowa': BrickWall,
};

const Services = ({items = []}) => {
    return (
        <section className="relative overflow-hidden bg-[var(--color-primary-text)] p-[var(--space-6)]">
            <Container>
                <div
                    className="mb-10 flex flex-col gap-8 border-b border-white/10 pb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-12">
                    <div className="max-w-[760px]">
                        <Typography
                            variant="text"
                            className="mb-4 text-[14px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
                        >
                            Usługi
                        </Typography>

                        <Typography
                            variant="h2"
                            className="mb-6 max-w-[760px] text-[36px] font-extrabold uppercase leading-[1.02] text-white md:text-[44px] lg:text-[56px]"
                        >
                            Kompleksowe <span className="text-[var(--color-primary)]">usługi</span>{' '}
                            ziemne i transportowe
                        </Typography>


                        <Typography
                            variant="text"
                            className="max-w-[460px] text-[16px] leading-[1.7] md:text-[18px] text-[var(--color-secondary-text)]"
                        >
                            Oferujemy roboty ziemne, wykopy instalacyjne, przygotowanie terenu i
                            prace wykończeniowe z użyciem nowoczesnego sprzętu i doświadczonej
                            obsługi.
                        </Typography>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {items.map((service) => {
                        const Icon = iconByServiceKey[service.src] || HardHat;

                        return (
                            <Link
                                key={`${service.src}-${service.name}`}
                                to={service.link}
                                className="group rounded-[var(--border-radius)] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 text-white transition-colors duration-200 hover:border-white/20 hover:bg-[rgba(255,255,255,0.05)]"
                            >
                                <div className="grid min-h-[156px] gap-x-6 gap-y-5 grid-cols-[76px_minmax(0,1fr)]">
                                    <div className="flex flex-col items-start pt-1">
                                        <div className="mb-auto text-[var(--color-primary)]">
                                            <Icon size={40} strokeWidth={1.8}/>
                                        </div>

                                        <span className="mt-7 h-px w-7 bg-[var(--color-primary)]"/>
                                    </div>

                                    <div className="flex flex-col">
                                        <Typography
                                            variant="h6"
                                            className="mb-4 max-w-[190px] text-[18px] font-bold leading-[1.2] text-white md:text-[20px]"
                                        >
                                            {service.name}
                                        </Typography>

                                        <Typography
                                            variant="text"
                                            className="max-w-[220px] text-[15px] leading-[1.8] text-[var(--color-secondary-text)]"
                                        >
                                            {service.description}
                                        </Typography>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Services;
