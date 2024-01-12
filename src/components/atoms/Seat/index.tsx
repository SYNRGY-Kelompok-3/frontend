import SmallRectangle from "../Icon/SmallRectangle";

interface SeatType {
    seat: string;
    row: string;
}

interface SeatProps {
    rows: string[];
    renderSeat: ({ seat, row }: SeatType) => JSX.Element | undefined;
}

const Seat = ({ rows, renderSeat }: SeatProps) => {
    return (
        // Map the seat lists according to rows
        <div className="flex w-[324px] justify-between font-semibold text-black pt-[312px] pl-2 relative">
            <div>
                {rows.map((row) => (
                    <div
                        key={`column1-${row}`}
                        className="flex items-center justify-center mb-4 "
                    >
                        {["A", "B", "C"].map((seat) =>
                            renderSeat({ seat, row })
                        )}
                    </div>
                ))}
                {/* Seats Footer */}
                <div className="flex">
                    <p className="w-[41px] h-[41px] mr-2 text-center">A</p>
                    <p className="w-[41px] h-[41px] mr-2 text-center">B</p>
                    <p className="w-[41px] h-[41px] mr-2 text-center">C</p>
                </div>
            </div>

            <div>
                {rows.map((row) => (
                    <div
                        key={`column2-${row}`}
                        className="flex items-center mb-4"
                    >
                        {["D", "E", "F"].map((seat) =>
                            renderSeat({ seat, row })
                        )}
                    </div>
                ))}
                <div className="flex">
                    <p className="w-[41px] h-[41px] mr-2 text-center">D</p>
                    <p className="w-[41px] h-[41px] mr-2 text-center">E</p>
                    <p className="w-[41px] h-[41px] mr-2 text-center">F</p>
                </div>
            </div>
            <SmallRectangle className="absolute left-0 top-[300px]" />
            <SmallRectangle className="absolute right-0 top-[300px]" />
        </div>
    );
};

export default Seat;
